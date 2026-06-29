import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className, hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border bg-bg-elevated/60 backdrop-blur-sm p-4 sm:p-6",
        glow && "glow-accent",
        className,
      )}
      whileHover={
        hover
          ? {
              y: -4,
              borderColor: "rgba(0, 180, 216, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 180, 216, 0.1)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
