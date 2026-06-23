"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function YarnSpoolMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.3,
      0.05
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      mouse.current.x * 0.15,
      0.05
    );
  });

  const windings = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    for (let layer = 0; layer < 12; layer++) {
      const points: THREE.Vector3[] = [];
      const radius = 0.85 + layer * 0.04;
      const y = -0.6 + layer * 0.1;
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            y + Math.sin(angle * 3) * 0.02,
            Math.sin(angle) * radius
          )
        );
      }
      lines.push(points);
    }
    return lines;
  }, []);

  return (
    <group
      ref={groupRef}
      onPointerMove={(e) => {
        mouse.current.x = (e.point.x / 2) * 2;
        mouse.current.y = (e.point.y / 2) * 2;
      }}
    >
      {/* Core cylinder */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 1.6, 32]} />
        <meshStandardMaterial color="#E8DDD4" roughness={0.6} metalness={0.1} />
      </mesh>

      {/* Top flange */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.08, 64]} />
        <meshStandardMaterial color="#D4C4B0" roughness={0.5} metalness={0.15} />
      </mesh>

      {/* Bottom flange */}
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.08, 64]} />
        <meshStandardMaterial color="#D4C4B0" roughness={0.5} metalness={0.15} />
      </mesh>

      {/* Yarn windings */}
      {windings.map((points, i) => (
        <mesh key={i}>
          <tubeGeometry
            args={[
              new THREE.CatmullRomCurve3(points),
              64,
              0.025 + (i % 3) * 0.005,
              8,
              true,
            ]}
          />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#F36A3D" : "#FF8C5A"}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
      ))}

      {/* Inner glow yarn */}
      <mesh>
        <torusGeometry args={[0.7, 0.5, 16, 64]} />
        <MeshDistortMaterial
          color="#FFB088"
          roughness={0.9}
          distort={0.1}
          speed={1}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

interface YarnSpoolProps {
  className?: string;
}

export function YarnSpool({ className }: YarnSpoolProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#FFB088" />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <YarnSpoolMesh />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={5} blur={2.5} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
