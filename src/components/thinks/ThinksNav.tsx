import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { THINKS_NAV } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export function ThinksNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useBodyScrollLock(open);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        <Logo to="/" division="thinks" />

        <div className="hidden lg:flex items-center gap-1">
          {THINKS_NAV.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors accent-underline",
                location.pathname === link.path
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle size="sm" />
          <Link to="/trades" className="text-xs text-text-muted hover:text-accent transition-colors whitespace-nowrap">
            Switch to Trades →
          </Link>
          <Button to="/thinks/contact" size="sm">Book Consultation</Button>
        </div>

        <div className="flex lg:hidden items-center gap-1 shrink-0">
          <ThemeToggle size="sm" />
          <button className="p-2 -mr-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
              {THINKS_NAV.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-lg text-sm font-medium",
                    location.pathname === link.path
                      ? "text-accent bg-accent/10"
                      : "text-text-secondary hover:bg-bg-elevated",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/trades" onClick={() => setOpen(false)} className="px-4 py-2 text-xs text-text-muted">
                Switch to Trades →
              </Link>
              <div className="pt-2 px-2">
                <Button to="/thinks/contact" className="w-full" size="sm" onClick={() => setOpen(false)}>
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
