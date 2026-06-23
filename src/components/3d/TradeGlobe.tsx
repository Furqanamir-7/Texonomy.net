"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import { useDevice } from "@/hooks/useDevice";
import { exportCountries } from "@/lib/data/company";

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function TradeRoute({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const points = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(2.2);
    return new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(24);
  }, [start, end]);

  return <Line points={points} color="#F36A3D" lineWidth={1} transparent opacity={0.4} />;
}

function Pin({ position, name }: { position: THREE.Vector3; name: string }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color="#F36A3D" />
      </mesh>
      <Html position={[0, 0.1, 0]} center distanceFactor={7} style={{ pointerEvents: "none" }}>
        <div className="globe-pin-label">{name.split(" ")[0]}</div>
      </Html>
    </group>
  );
}

function Globe({ lowPower }: { lowPower: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const origin = useMemo(() => latLngToVector3(20, 78, 2), []);
  const destinations = useMemo(
    () =>
      exportCountries.slice(0, 8).map((d) => ({
        ...d,
        pos: latLngToVector3(d.lat, d.lng, 2.02),
      })),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1.98, lowPower ? 20 : 28, lowPower ? 20 : 28]} />
        <meshBasicMaterial color="#0D0D0D" transparent opacity={0.95} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2, lowPower ? 1 : 2]} />
        <meshBasicMaterial color="#F36A3D" wireframe transparent opacity={0.3} />
      </mesh>

      {destinations.map((d) => (
        <Pin key={d.name} position={d.pos} name={d.name} />
      ))}

      {destinations.map((d) => (
        <TradeRoute key={`route-${d.name}`} start={origin} end={d.pos} />
      ))}
    </group>
  );
}

export function TradeGlobe({ className }: { className?: string }) {
  const { lowPower, isMobile, isTouch } = useDevice();

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={isMobile ? 1 : [1, 1.25]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Globe lowPower={lowPower} />
          <Stars radius={60} depth={30} count={lowPower ? 300 : 600} factor={2} saturation={0} fade speed={0.2} />
        </Suspense>
        {!isTouch && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        )}
      </Canvas>
    </div>
  );
}
