import { useEffect, useState } from "react";

export interface DeviceInfo {
  isMobile: boolean;
  isTouch: boolean;
  reducedMotion: boolean;
  lowPower: boolean;
}

const defaultDevice: DeviceInfo = {
  isMobile: false,
  isTouch: false,
  reducedMotion: false,
  lowPower: false,
};

export function useDevice(): DeviceInfo {
  const [device, setDevice] = useState<DeviceInfo>(defaultDevice);

  useEffect(() => {
    const mobileMq = window.matchMedia("(max-width: 768px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowPowerMq = window.matchMedia("(prefers-reduced-data: reduce)");

    const update = () => {
      setDevice({
        isMobile: mobileMq.matches,
        isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
        reducedMotion: motionMq.matches,
        lowPower: lowPowerMq.matches || mobileMq.matches,
      });
    };

    update();
    mobileMq.addEventListener("change", update);
    motionMq.addEventListener("change", update);
    lowPowerMq.addEventListener("change", update);
    return () => {
      mobileMq.removeEventListener("change", update);
      motionMq.removeEventListener("change", update);
      lowPowerMq.removeEventListener("change", update);
    };
  }, []);

  return device;
}
