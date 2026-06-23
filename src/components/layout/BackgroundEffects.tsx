"use client";

import { FiberParticlesScene } from "@/components/3d/dynamic";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <FiberParticlesScene className="w-full h-full opacity-30" />
    </div>
  );
}
