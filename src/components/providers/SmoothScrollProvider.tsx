"use client";

import { useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const { isMobile, reducedMotion, lowPower } = useDevice();

  useEffect(() => {
    if (isMobile || reducedMotion || lowPower) return;

    let lenis: InstanceType<typeof import("lenis").default> | null = null;
    let raf: ((time: number) => void) | null = null;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ duration: 1.0, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);

      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      if (raf) {
        import("gsap").then(({ gsap }) => {
          gsap.ticker.remove(raf!);
        });
      }
      lenis?.destroy();
    };
  }, [isMobile, reducedMotion, lowPower]);

  return <>{children}</>;
}
