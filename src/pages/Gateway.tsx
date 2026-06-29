import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Sparkles,
  ChevronDown,
  Mail,
  Phone,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
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
import { ThreadParticles3D } from "@/components/3d/ThreadParticles3D";
import { useDevice } from "@/hooks/useDevice";

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

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Logo to="/" />
          <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
            <a href="#what-we-trade" className="hover:text-accent transition-colors">What We Trade</a>
            <a href="#why-texonomy" className="hover:text-accent transition-colors">Why Texonomy</a>
            <a href="#divisions" className="hover:text-accent transition-colors">Divisions</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button to="/trades/rfq" size="sm" variant="ghost" className="hidden md:inline-flex">
              Request a Quote
            </Button>
            <Button to="/trades" size="sm">
              What We Trade
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-16 overflow-hidden">
        <img
          src="/images/hero-gateway.jpg"
          alt="Textile fibers and woven fabric"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          loading="eager"
        />
        <HeroScene />
        <div className="absolute inset-0 woven-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/85 to-bg-primary pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <Sparkles size={14} />
            {GATEWAY_HERO.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            We trade textiles — and we{" "}
            <span className="text-gradient">understand them.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {GATEWAY_HERO.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/trades" size="lg">
              Explore Trades <ArrowRight size={18} />
            </Button>
            <Button to="/thinks" variant="outline" size="lg">
              Explore Thinks
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#what-we-trade"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative z-10 mt-16 text-text-muted hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.a>
      </section>

      <section id="what-we-trade" className="py-24 md:py-32 px-4 border-y border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text={GATEWAY_WHAT_WE_TRADE.sectionLabel} className="justify-center" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              {GATEWAY_WHAT_WE_TRADE.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {GATEWAY_WHAT_WE_TRADE.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="h-full">
                  <Factory size={28} className="text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.body}</p>
                  <Button to={item.path} variant="ghost" size="sm">
                    View {item.title} →
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-text-muted text-sm max-w-xl mx-auto">
              {GATEWAY_WHAT_WE_TRADE.closingNote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="why-texonomy" className="py-24 md:py-32 px-4">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16 max-w-3xl">
            <SectionLabel text={GATEWAY_WHY_TEXONOMY.sectionLabel} />
            <span className="block text-accent text-xs font-bold tracking-widest uppercase mt-4 mb-3">
              {GATEWAY_WHY_TEXONOMY.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {GATEWAY_WHY_TEXONOMY.title}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {GATEWAY_WHY_TEXONOMY.intro}
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {GATEWAY_WHY_TEXONOMY.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.body}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="divisions" className="py-24 md:py-32 px-4 bg-bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text={GATEWAY_DIVISIONS.sectionLabel} className="justify-center" />
            <h2 className="font-display text-3xl md:text-5xl font-bold">{GATEWAY_DIVISIONS.title}</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
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
                    className={`absolute inset-0 bg-gradient-to-${key === "trades" ? "br" : "bl"} from-accent/20 via-accent/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-muted" />
                  <div className="relative p-8 md:p-10">
                    <h3 className="text-accent text-xs font-bold tracking-widest uppercase">{division.label}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-8">{division.body}</p>
                    <Button to={division.path} variant={key === "thinks" ? "outline" : "primary"} size="lg">
                      {division.cta} <ArrowRight size={18} />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-secondary p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 woven-pattern opacity-40" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{GATEWAY_CONTACT.title}</h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">{GATEWAY_CONTACT.body}</p>
              <Button to="/trades/rfq" size="lg" className="mb-8">
                {GATEWAY_CONTACT.cta}
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary">
                <a
                  href={`mailto:${GATEWAY_CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail size={16} className="text-accent" />
                  {GATEWAY_CONTACT.email}
                </a>
                <a href={SITE.whatsappUrl} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" />
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
