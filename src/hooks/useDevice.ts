import { useState, useEffect } from "react";

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  prefersReducedMotion: boolean;
  screenWidth: number;
}

export function useDevice(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>(() => ({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isTouch: false,
    prefersReducedMotion: false,
    screenWidth: typeof window !== "undefined" ? window.innerWidth : 1280,
  }));

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setDevice({
        isMobile: w < 768,
        isTablet: w >= 768 && w < 1024,
        isDesktop: w >= 1024,
        isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        screenWidth: w,
      });
    };

    update();
    window.addEventListener("resize", update);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", update);

    return () => {
      window.removeEventListener("resize", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return device;
}
