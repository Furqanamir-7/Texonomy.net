"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ThreadLine({ index, total }: { index: number; total: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const mouse = state.pointer;

    ref.current.position.x = Math.sin(t * 0.5 + offset) * 2 + mouse.x * 0.5;
    ref.current.position.y = Math.cos(t * 0.3 + offset) * 1.5 + mouse.y * 0.5;
    ref.current.rotation.z = t * 0.2 + offset;
  });

  const colors = ["#F36A3D", "#FF8C5A", "#FFB088"];

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[0.008, 0.008, 3, 8]} />
      <meshStandardMaterial
        color={colors[index % 3]}
        transparent
        opacity={0.5}
        roughness={0.9}
      />
    </mesh>
  );
}

export function ThreadStrands({ className }: { className?: string }) {
  const count = 12;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#FFB088" />
        {Array.from({ length: count }).map((_, i) => (
          <ThreadLine key={i} index={i} total={count} />
        ))}
      </Canvas>
    </div>
  );
}
