"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

const destinations = [
  { lat: 40.7, lng: -74.0 },
  { lat: 51.5, lng: -0.1 },
  { lat: 23.7, lng: 90.4 },
  { lat: 35.9, lng: 104.2 },
  { lat: -23.5, lng: -46.6 },
  { lat: 30.0, lng: 31.2 },
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function TradeRoute({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) {
  const points = useMemo(() => {
    const mid = start.clone().add(end).multiplyScalar(0.5);
    mid.normalize().multiplyScalar(2.2);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(50);
  }, [start, end]);

  return <Line points={points} color={color} lineWidth={1} transparent opacity={0.6} />;
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const routes = useMemo(() => {
    const origin = latLngToVector3(20, 78, 2);
    return destinations.map((dest) => ({
      start: origin,
      end: latLngToVector3(dest.lat, dest.lng, 2),
    }));
  }, []);

  const markers = useMemo(
    () => destinations.map((d) => latLngToVector3(d.lat, d.lng, 2.02)),
    []
  );

  return (
    <group ref={groupRef}>
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.7}
          metalness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 32]} />
        <meshBasicMaterial color="#F36A3D" wireframe transparent opacity={0.08} />
      </mesh>

      {routes.map((route, i) => (
        <TradeRoute key={i} start={route.start} end={route.end} color="#F36A3D" />
      ))}

      {markers.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FF8C5A" emissive="#F36A3D" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export function TradeGlobe({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#FFB088" />
        <Globe />
        <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
