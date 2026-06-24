import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { TRADES_NAV, TRADES_PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function TradesNav() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Logo to="/" division="trades" />

        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/trades"
            className={cn(
              "px-3 py-2 text-sm font-medium accent-underline",
              location.pathname === "/trades" ? "text-accent" : "text-text-secondary hover:text-text-primary",
            )}
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary">
              Products <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 w-72 rounded-xl border border-border bg-bg-elevated/95 backdrop-blur-xl p-3 shadow-xl z-50"
                >
                  {TRADES_PRODUCTS.map((p) => (
                    <Link
                      key={p.path}
                      to={p.path}
                      className="block px-3 py-2.5 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <div className="font-medium text-text-primary text-sm">{p.label}</div>
                      <div className="text-text-muted text-xs">{p.desc}</div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {TRADES_NAV.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium accent-underline",
                location.pathname === link.path ? "text-accent" : "text-text-secondary hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link to="/thinks" className="text-xs text-text-muted hover:text-accent transition-colors whitespace-nowrap">
            Switch to Thinks →
          </Link>
          <Button to="/trades/rfq" size="sm">Request Quote</Button>
        </div>

        <button className="lg:hidden p-2 shrink-0" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-4 mb-2 overflow-hidden rounded-xl border border-border/60 bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-3 gap-1">
              {TRADES_NAV.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-elevated"
                >
                  {link.label}
                </Link>
              ))}
              {TRADES_PRODUCTS.map((p) => (
                <Link key={p.path} to={p.path} onClick={() => setOpen(false)} className="block px-4 py-2 text-xs text-text-muted">
                  {p.label}
                </Link>
              ))}
              <Link to="/thinks" onClick={() => setOpen(false)} className="px-4 py-2 text-xs text-text-muted">
                Switch to Thinks →
              </Link>
              <div className="pt-2 px-2">
                <Button to="/trades/rfq" className="w-full" size="sm" onClick={() => setOpen(false)}>
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
