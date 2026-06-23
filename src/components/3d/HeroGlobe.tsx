"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useDevice } from "@/hooks/useDevice";

const HUB = { name: "India", lat: 20.59, lng: 78.96 };

const DESTINATIONS = [
  { name: "USA", lat: 37.09, lng: -95.71 },
  { name: "UK", lat: 55.37, lng: -3.43 },
  { name: "Germany", lat: 51.16, lng: 10.45 },
  { name: "Turkey", lat: 38.96, lng: 35.24 },
  { name: "Bangladesh", lat: 23.68, lng: 90.35 },
  { name: "Vietnam", lat: 14.05, lng: 108.27 },
  { name: "Brazil", lat: -14.23, lng: -51.92 },
  { name: "Egypt", lat: 26.82, lng: 30.8 },
];

function latLngToVec(lat: number, lng: number, r: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function Route({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  const points = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(2.35);
    return new THREE.QuadraticBezierCurve3(start, mid, end).getPoints(32);
  }, [start, end]);

  return <Line points={points} color="#F36A3D" lineWidth={1} transparent opacity={0.45} />;
}

function Pin({
  position,
  name,
  isHub,
}: {
  position: THREE.Vector3;
  name: string;
  isHub?: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.15;
      ref.current.scale.setScalar(isHub ? s * 1.3 : s);
    }
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[isHub ? 0.055 : 0.035, 8, 8]} />
        <meshBasicMaterial color={isHub ? "#FF8C5A" : "#F36A3D"} />
      </mesh>
      <mesh>
        <sphereGeometry args={[isHub ? 0.09 : 0.06, 8, 8]} />
        <meshBasicMaterial color="#F36A3D" transparent opacity={0.15} />
      </mesh>
      <Html
        position={[0, isHub ? 0.14 : 0.1, 0]}
        center
        distanceFactor={6}
        zIndexRange={[0, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div className={`globe-pin-label ${isHub ? "border-secondary text-secondary" : ""}`}>
          {name}
        </div>
      </Html>
    </group>
  );
}

function GlobeScene({ lowPower }: { lowPower: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.08,
      0.04
    );
  });

  const hubPos = useMemo(() => latLngToVec(HUB.lat, HUB.lng, 2), []);
  const pins = useMemo(
    () => DESTINATIONS.map((d) => ({ ...d, pos: latLngToVec(d.lat, d.lng, 2.02) })),
    []
  );
  const routes = useMemo(
    () => pins.map((p) => ({ start: hubPos, end: p.pos })),
    [hubPos, pins]
  );

  const wireDetail = lowPower ? 1 : 2;

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        mouse.current.x = e.point.x;
        mouse.current.y = e.point.y;
      }}
    >
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[1.98, lowPower ? 24 : 32, lowPower ? 24 : 32]} />
        <meshBasicMaterial color="#0D0D0D" transparent opacity={0.95} />
      </mesh>

      {/* Wireframe geodesic */}
      <mesh>
        <icosahedronGeometry args={[2, wireDetail]} />
        <meshBasicMaterial color="#F36A3D" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Outer glow wireframe */}
      <mesh>
        <icosahedronGeometry args={[2.02, wireDetail]} />
        <meshBasicMaterial color="#FF8C5A" wireframe transparent opacity={0.08} />
      </mesh>

      <Pin position={hubPos} name={HUB.name} isHub />

      {pins.map((pin) => (
        <Pin key={pin.name} position={pin.pos} name={pin.name} />
      ))}

      {routes.map((r, i) => (
        <Route key={i} start={r.start} end={r.end} />
      ))}
    </group>
  );
}

interface HeroGlobeProps {
  className?: string;
}

export function HeroGlobe({ className }: HeroGlobeProps) {
  const { lowPower, isMobile } = useDevice();

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        frameloop="always"
        style={{ touchAction: "none" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#FFB088" />
        <Suspense fallback={null}>
          <GlobeScene lowPower={lowPower} />
          <Stars
            radius={80}
            depth={40}
            count={lowPower ? 400 : 800}
            factor={2}
            saturation={0}
            fade
            speed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
