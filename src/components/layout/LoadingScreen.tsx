"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-card-elevated"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center">
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            <h2 className="text-xl font-bold text-foreground">
              Atlas <span className="gradient-text">Textile</span>
            </h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
