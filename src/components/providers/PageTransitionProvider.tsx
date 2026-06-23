"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDevice } from "@/hooks/useDevice";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { reducedMotion } = useDevice();

  if (reducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
