"use client";

import dynamic from "next/dynamic";

function GlobeLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-primary/20 border-t-primary animate-spin" />
    </div>
  );
}

export const HeroGlobeScene = dynamic(
  () => import("@/components/3d/HeroGlobe").then((m) => m.HeroGlobe),
  { ssr: false, loading: GlobeLoader }
);

export const YarnSpoolScene = dynamic(
  () => import("@/components/3d/YarnSpool").then((m) => m.YarnSpool),
  { ssr: false, loading: GlobeLoader }
);

export const TradeGlobeScene = dynamic(
  () => import("@/components/3d/TradeGlobe").then((m) => m.TradeGlobe),
  { ssr: false, loading: GlobeLoader }
);

export const ThreadStrandsScene = dynamic(
  () => import("@/components/3d/ThreadStrands").then((m) => m.ThreadStrands),
  { ssr: false }
);
