import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SITE } from "@/lib/constants";
import {
  GATEWAY_CONTACT,
  GATEWAY_DIVISIONS,
  GATEWAY_HERO,
  GATEWAY_WHAT_WE_TRADE,
  GATEWAY_WHY_TEXONOMY,
} from "@/data/gateway/content";
import { Logo } from "@/components/shared/Logo";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { ThreadParticles3D } from "@/components/3d/ThreadParticles3D";
import { useDevice } from "@/hooks/useDevice";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const GATEWAY_NAV = [
  { href: "#what-we-trade", label: "What We Trade" },
  { href: "#why-texonomy", label: "Why Texonomy" },
  { href: "#divisions", label: "Divisions" },
  { href: "#contact", label: "Contact" },
] as const;

function HeroScene() {
  const { isMobile, prefersReducedMotion } = useDevice();
  if (prefersReducedMotion) return null;
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={isMobile ? 1 : 1.5}
          gl={{ alpha: true, antialias: !isMobile }}
          className="!absolute inset-0"
          style={{ pointerEvents: "none" }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.4} color="#00b4d8" />
          <ThreadParticles3D count={isMobile ? 60 : 140} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default function Gateway() {
  const [hovered, setHovered] = useState<"trades" | "thinks" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useBodyScrollLock(menuOpen);

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          <Logo to="/" />
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-text-secondary shrink-0">
            {GATEWAY_NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-accent transition-colors whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <ThemeToggle size="sm" />
            <Button to="/trades/rfq" size="sm" variant="ghost" className="hidden lg:inline-flex">
              Request a Quote
            </Button>
            <Button to="/trades" size="sm" className="whitespace-nowrap">
              What We Trade
            </Button>
          </div>
          <div className="flex sm:hidden items-center gap-1 shrink-0">
            <ThemeToggle size="sm" />
            <button
            type="button"
            className="md:hidden p-2 shrink-0 -mr-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mx-3 mb-2 overflow-hidden rounded-xl border border-border/60 bg-bg-primary/95 backdrop-blur-xl max-h-[min(80vh,32rem)] overflow-y-auto"
            >
              <div className="flex flex-col p-3 gap-1">
                {GATEWAY_NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-border my-2" />
                <div className="flex flex-col gap-2 px-2 pb-1">
                  <Button to="/trades" className="w-full" size="sm" onClick={() => setMenuOpen(false)}>
                    What We Trade
                  </Button>
                  <Button to="/trades/rfq" variant="outline" className="w-full" size="sm" onClick={() => setMenuOpen(false)}>
                    Request a Quote
                  </Button>
                  <Button to="/trades" variant="ghost" className="w-full" size="sm" onClick={() => setMenuOpen(false)}>
                    Explore Trades
                  </Button>
                  <Button to="/thinks" variant="ghost" className="w-full" size="sm" onClick={() => setMenuOpen(false)}>
                    Explore Thinks
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
        <img
          src="/images/hero-gateway.jpg"
          alt="Trail runner in mountain landscape at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-[55%_center] sm:object-center opacity-25 pointer-events-none"
          loading="eager"
        />
        <HeroScene />
        <div className="absolute inset-0 woven-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/85 to-bg-primary pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-[10px] sm:text-xs font-semibold tracking-wide sm:tracking-widest uppercase mb-6 sm:mb-8 max-w-full"
          >
            <Sparkles size={14} className="shrink-0" />
            <span className="truncate">{GATEWAY_HERO.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="font-display text-[1.75rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-1"
          >
            We trade textiles — and we{" "}
            <span className="text-gradient">understand them.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-1"
          >
            {GATEWAY_HERO.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto"
          >
            <Button to="/trades" size="lg" className="w-full sm:w-auto">
              Explore Trades <ArrowRight size={18} />
            </Button>
            <Button to="/thinks" variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Thinks
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#what-we-trade"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative z-10 mt-10 sm:mt-16 text-text-muted hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.a>
      </section>

      <section id="what-we-trade" className="py-16 sm:py-24 md:py-32 px-4 border-y border-border bg-bg-secondary scroll-mt-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <SectionLabel text={GATEWAY_WHAT_WE_TRADE.sectionLabel} className="justify-center" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-1">
              {GATEWAY_WHAT_WE_TRADE.title}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {GATEWAY_WHAT_WE_TRADE.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="h-full">
                  <Factory size={28} className="text-accent mb-4" />
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.body}</p>
                  <Button to={item.path} variant="ghost" size="sm">
                    View {item.title} →
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-text-muted text-sm max-w-xl mx-auto px-2">
              {GATEWAY_WHAT_WE_TRADE.closingNote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="why-texonomy" className="py-16 sm:py-24 md:py-32 px-4 scroll-mt-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-10 sm:mb-16 max-w-3xl">
            <SectionLabel text={GATEWAY_WHY_TEXONOMY.sectionLabel} />
            <span className="block text-accent text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-widest uppercase mt-4 mb-3">
              {GATEWAY_WHY_TEXONOMY.eyebrow}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {GATEWAY_WHY_TEXONOMY.title}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              {GATEWAY_WHY_TEXONOMY.intro}
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {GATEWAY_WHY_TEXONOMY.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <Card className="h-full">
                  <h3 className="font-display text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="divisions" className="py-16 sm:py-24 md:py-32 px-4 bg-bg-secondary border-y border-border scroll-mt-14">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <SectionLabel text={GATEWAY_DIVISIONS.sectionLabel} className="justify-center" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold">{GATEWAY_DIVISIONS.title}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {(["trades", "thinks"] as const).map((key) => {
              const division = GATEWAY_DIVISIONS[key];
              return (
                <motion.div
                  key={key}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  animate={{ scale: hovered === key ? 1.02 : hovered && hovered !== key ? 0.98 : 1 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl border border-border overflow-hidden"
                >
                  <div className="absolute inset-0 bg-bg-elevated" />
                  <div
                    className={
                      key === "trades"
                        ? "absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        : "absolute inset-0 bg-gradient-to-bl from-accent/20 via-accent/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    }
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-muted" />
                  <div className="relative p-6 sm:p-8 md:p-10">
                    <h3 className="text-accent text-xs font-bold tracking-widest uppercase">{division.label}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-6 sm:mb-8">{division.body}</p>
                    <Button
                      to={division.path}
                      variant={key === "thinks" ? "outline" : "primary"}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {division.cta} <ArrowRight size={18} />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 px-4 scroll-mt-14">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-2xl sm:rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-secondary p-6 sm:p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 woven-pattern opacity-40" />
            <div className="relative">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{GATEWAY_CONTACT.title}</h2>
              <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">{GATEWAY_CONTACT.body}</p>
              <Button to="/trades/rfq" size="lg" className="mb-6 sm:mb-8 w-full sm:w-auto">
                {GATEWAY_CONTACT.cta}
              </Button>
              <div className="flex flex-col items-stretch sm:items-center justify-center gap-3 sm:gap-4 text-sm text-text-secondary">
                <a
                  href={`mailto:${GATEWAY_CONTACT.email}`}
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-accent transition-colors break-all"
                >
                  <Mail size={16} className="text-accent shrink-0" />
                  {GATEWAY_CONTACT.email}
                </a>
                <a
                  href={SITE.whatsappUrl}
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={16} className="text-accent shrink-0" />
                  {GATEWAY_CONTACT.phone}
                </a>
                <span className="text-text-muted">{GATEWAY_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter division="gateway" />
    </div>
  );
}
