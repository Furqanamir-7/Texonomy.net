import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Package } from "lucide-react";
import { TradingGlobe3D, type GlobeMarker } from "@/components/3d/TradingGlobe3D";
import { cn } from "@/lib/utils";

type Filter = "all" | "supplier" | "customer";

export function GlobeHeroPanel({ className }: { className?: string }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<GlobeMarker | null>(null);

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-4 min-w-0", className)}>
      <TradingGlobe3D
        filter={filter}
        activeId={active?.id ?? null}
        onSelect={setActive}
        className="h-52 sm:h-72 md:h-80 lg:h-[420px] w-full min-w-0"
      />

      <div className="flex gap-2 overflow-x-auto scrollbar-none -mx-1 px-1 pb-0.5">
        {(["all", "supplier", "customer"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
              filter === f
                ? "bg-accent/15 border-accent/40 text-accent"
                : "border-border text-text-muted hover:text-text-primary hover:border-border/80",
            )}
          >
            {f === "all" ? "All Regions" : f === "supplier" ? "Suppliers" : "Customers"}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="rounded-xl border border-accent/30 bg-bg-elevated/95 backdrop-blur-xl p-4 sm:p-5 shadow-xl shadow-accent/5"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-accent text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin size={12} className="shrink-0" />
                  {active.role === "both" ? "Supplier & Customer" : active.role === "supplier" ? "Supplier" : "Customer"}
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold leading-snug">{active.headline}</h3>
              </div>
              <button
                onClick={() => setActive(null)}
                className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-primary transition-colors shrink-0"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            {active.stats && (
              <p className="text-accent text-sm font-medium mb-2">{active.stats}</p>
            )}
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{active.detail}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <Package size={14} className="text-accent shrink-0" />
              {active.products.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/20"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
