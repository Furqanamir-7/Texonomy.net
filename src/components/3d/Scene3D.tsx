import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useDevice } from "@/hooks/useDevice";
import { ThreadParticles3D } from "./ThreadParticles3D";

interface Scene3DProps {
  className?: string;
  particleCount?: number;
}

function SceneFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent animate-pulse" />
  );
}

export function Scene3D({ className = "", particleCount }: Scene3DProps) {
  const { isMobile, prefersReducedMotion } = useDevice();

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
      </div>
    );
  }

  const count = particleCount ?? (isMobile ? 80 : 200);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
          gl={{ antialias: !isMobile, alpha: true }}
          style={{ background: "transparent", pointerEvents: "none" }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00b4d8" />
          <ThreadParticles3D count={count} />
        </Canvas>
      </Suspense>
    </div>
  );
}
