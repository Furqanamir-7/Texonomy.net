import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useDevice } from "@/hooks/useDevice";

export function YarnScene3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { isMobile } = useDevice();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const rings = isMobile ? 3 : 5;

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh>
          <torusGeometry args={[1.2, 0.15, 16, 48]} />
          <MeshDistortMaterial
            color="#00b4d8"
            emissive="#0077b6"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.6}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      {Array.from({ length: rings }).map((_, i) => {
        const scale = 1.5 + i * 0.4;
        const opacity = 0.15 - i * 0.02;
        return (
          <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.3]}>
            <torusGeometry args={[scale, 0.02, 8, 64]} />
            <meshBasicMaterial color="#00b4d8" transparent opacity={opacity} />
          </mesh>
        );
      })}

      <mesh rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[2.5, 0.04, 0.04]} />
        <meshStandardMaterial color="#6b7b8c" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[2.5, 0.04, 0.04]} />
        <meshStandardMaterial color="#6b7b8c" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
