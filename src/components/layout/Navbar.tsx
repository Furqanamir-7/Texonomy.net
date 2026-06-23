"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-500",
          scrolled ? "top-3" : "top-5"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <nav
          className={cn(
            "flex items-center justify-between px-4 md:px-6 py-3 rounded-full transition-all duration-500",
            scrolled
              ? "glass card-shadow backdrop-blur-xl"
              : "bg-white/60 backdrop-blur-md border border-white/40"
          )}
        >
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
              <span className="text-white text-xs font-bold">AT</span>
            </div>
            <span className="font-bold text-dark hidden sm:block">
              Atlas<span className="text-primary">Textile</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      pathname.startsWith("/yarn") ||
                        pathname.startsWith("/fabrics") ||
                        pathname.startsWith("/home-textile") ||
                        pathname.startsWith("/garments")
                        ? "text-primary bg-primary/5"
                        : "text-text hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && link.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] p-4 rounded-[28px] glass card-shadow"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "p-4 rounded-2xl transition-all duration-300 group",
                                child.featured
                                  ? "col-span-2 gradient-bg text-white"
                                  : "hover:bg-primary/5"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4
                                    className={cn(
                                      "font-semibold text-sm",
                                      child.featured ? "text-white" : "text-dark"
                                    )}
                                  >
                                    {child.title}
                                    {child.featured && (
                                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                        Flagship
                                      </span>
                                    )}
                                  </h4>
                                  <p
                                    className={cn(
                                      "text-xs mt-1",
                                      child.featured ? "text-white/80" : "text-text/60"
                                    )}
                                  >
                                    {child.description}
                                  </p>
                                </div>
                                <ArrowRight
                                  className={cn(
                                    "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                    child.featured ? "text-white" : "text-primary"
                                  )}
                                />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/5"
                      : "text-text hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/yarn">Explore Yarn</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-primary/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass rounded-[28px] p-6 card-shadow lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-2xl text-sm font-medium",
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-text hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-4 py-2 text-xs text-text/70 hover:text-primary"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-dark/5">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
