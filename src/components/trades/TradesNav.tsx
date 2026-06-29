import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { TRADES_STATIC_PAGES, TRADES_CATEGORIES } from "@/data/trades/trades.config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function TradesNav() {
  const [open, setOpen] = useState(false);
  const [tradesOpen, setTradesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Logo to="/trades" division="trades" />

        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/trades"
            className={cn(
              "px-3 py-2 text-sm font-medium accent-underline",
              isActive("/trades") ? "text-accent" : "text-text-secondary hover:text-text-primary",
            )}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setTradesOpen(true)}
            onMouseLeave={() => setTradesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 px-3 py-2 text-sm font-medium",
                location.pathname.startsWith("/trades/yarn") ||
                  location.pathname.startsWith("/trades/fabrics") ||
                  location.pathname.startsWith("/trades/home-textile") ||
                  location.pathname.startsWith("/trades/garments")
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              Trades <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {tradesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-1 w-[520px] rounded-xl border border-border bg-bg-elevated/95 backdrop-blur-xl p-4 shadow-xl z-50 grid grid-cols-2 gap-4"
                >
                  {TRADES_CATEGORIES.map((cat) => (
                    <div key={cat.id}>
                      <Link
                        to={cat.placeholder ? "#" : cat.path}
                        className={cn(
                          "block font-medium text-sm mb-2 hover:text-accent transition-colors",
                          cat.placeholder ? "text-text-muted cursor-default" : "text-text-primary",
                        )}
                      >
                        {cat.label}
                        {cat.placeholder && <span className="text-xs text-text-muted ml-1">(TBD)</span>}
                      </Link>
                      {cat.subcategories.length > 0 && (
                        <ul className="space-y-1">
                          {cat.subcategories.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={cat.path}
                                className="text-xs text-text-muted hover:text-accent transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {TRADES_STATIC_PAGES.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className={cn(
                "px-3 py-2 text-sm font-medium accent-underline whitespace-nowrap",
                isActive(page.path) ? "text-accent" : "text-text-secondary hover:text-text-primary",
              )}
            >
              {page.label}
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
            className="lg:hidden mx-4 mb-2 overflow-hidden rounded-xl border border-border/60 bg-bg-primary/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col p-3 gap-1">
              <Link to="/trades" onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-elevated">
                Home
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-accent uppercase tracking-wider">Trades</div>
              {TRADES_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.placeholder ? "#" : cat.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm text-text-secondary hover:bg-bg-elevated rounded-lg"
                >
                  {cat.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {TRADES_STATIC_PAGES.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-elevated"
                >
                  {page.label}
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
