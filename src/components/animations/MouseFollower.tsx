"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isDesktop || reducedMotion) return;

    setEnabled(true);
    const handleMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-primary/25 pointer-events-none z-[9998] hidden lg:block"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
    />
  );
}
