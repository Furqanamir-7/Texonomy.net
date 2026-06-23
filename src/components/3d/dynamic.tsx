"use client";

import dynamic from "next/dynamic";

function Loading3D() {
  return <div className="w-full h-full animate-pulse bg-primary/5 rounded-3xl" />;
}

function LoadingGlobe() {
  return <div className="w-full h-full animate-pulse bg-dark/5 rounded-3xl" />;
}

export const YarnSpoolScene = dynamic(
  () => import("@/components/3d/YarnSpool").then((m) => m.YarnSpool),
  { ssr: false, loading: Loading3D }
);

export const TradeGlobeScene = dynamic(
  () => import("@/components/3d/TradeGlobe").then((m) => m.TradeGlobe),
  { ssr: false, loading: LoadingGlobe }
);

export const FiberParticlesScene = dynamic(
  () => import("@/components/3d/FiberParticles").then((m) => m.FiberParticles),
  { ssr: false }
);

export const ThreadStrandsScene = dynamic(
  () => import("@/components/3d/ThreadStrands").then((m) => m.ThreadStrands),
  { ssr: false }
);
