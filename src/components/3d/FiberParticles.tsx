"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Fibers() {
  const count = 80;
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10
        ),
        speed: 0.2 + Math.random() * 0.5,
        rotation: Math.random() * Math.PI,
        scale: 0.3 + Math.random() * 0.7,
      });
    }
    return data;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position.x + Math.sin(t * p.speed + i) * 0.5,
        p.position.y + Math.cos(t * p.speed * 0.7 + i) * 0.3,
        p.position.z + Math.sin(t * p.speed * 0.5 + i * 0.5) * 0.2
      );
      dummy.rotation.set(t * p.speed * 0.2, p.rotation, 0);
      dummy.scale.setScalar(p.scale * 0.05);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 0.02, 0.02]} />
      <meshStandardMaterial color="#FFB088" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function FiberParticles({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.5} />
        <Fibers />
      </Canvas>
    </div>
  );
}
