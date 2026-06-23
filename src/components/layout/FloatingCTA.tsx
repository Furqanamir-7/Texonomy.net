"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full gradient-bg text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring" }}
        aria-label="Quick contact"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-72 rounded-[28px] glass card-shadow p-6"
          >
            <h4 className="font-bold text-foreground mb-2">Quick Inquiry</h4>
            <p className="text-xs text-muted mb-4">
              Need yarn samples or a quote? We respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="block w-full text-center py-3 rounded-full gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
