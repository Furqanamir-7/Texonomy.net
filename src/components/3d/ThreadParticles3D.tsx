import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ThreadParticles3DProps {
  count?: number;
}

export function ThreadParticles3D({ count = 150 }: ThreadParticles3DProps) {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const accent = new THREE.Color("#00b4d8");
    const bronze = new THREE.Color("#6b7b8c");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 16;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 8;

      const c = Math.random() > 0.3 ? accent : bronze;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  const linePositions = useMemo(() => {
    const segments = Math.min(count, 60);
    const pos = new Float32Array(segments * 6);
    for (let i = 0; i < segments; i++) {
      const i6 = i * 6;
      const angle = (i / segments) * Math.PI * 2;
      const r = 3 + Math.random() * 2;
      pos[i6] = Math.cos(angle) * r;
      pos[i6 + 1] = Math.sin(angle) * r * 0.6;
      pos[i6 + 2] = (Math.random() - 0.5) * 2;
      pos[i6 + 3] = Math.cos(angle + 0.5) * (r + 1);
      pos[i6 + 4] = Math.sin(angle + 0.5) * (r + 1) * 0.6;
      pos[i6 + 5] = (Math.random() - 0.5) * 2;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.05;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.z = t * 0.03;
    }
  });

  return (
    <group>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00b4d8" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
