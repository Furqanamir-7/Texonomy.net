import { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Globe,
  Brain,
  GraduationCap,
  LineChart,
  Factory,
  Shield,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { SITE, GATEWAY_STATS } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ThreadParticles3D } from "@/components/3d/ThreadParticles3D";
import { useDevice } from "@/hooks/useDevice";

const HEADLINE_WORDS = ["Two", "Arms.", "One", "Intelligence."];

const TRADES_FEATURES = ["Premium yarn & fabrics", "Global export supply", "24h quote response", "End-to-end logistics"];
const THINKS_FEATURES = ["Market intelligence", "Sales & ops training", "Production consulting", "Custom research"];

const CAPABILITIES = [
  { icon: Package, title: "Yarn & Raw Materials", desc: "Cotton, polyester, blended counts sourced to spec for mills worldwide." },
  { icon: Factory, title: "Production Advisory", desc: "Capacity planning, process optimization, and cost structure analysis." },
  { icon: GraduationCap, title: "Industry Training", desc: "Hands-on programs for sales teams, plant managers, and procurement." },
  { icon: LineChart, title: "Market Intelligence", desc: "Price tracking, demand forecasts, and trade flow analysis." },
  { icon: Globe, title: "Global Trade Network", desc: "Supply chains spanning South Asia, GCC, Europe, and the Americas." },
  { icon: Shield, title: "Quality Assurance", desc: "Lab-tested yarn, documented specs, and consistent shipment quality." },
];

const CLIENTS = ["Arvind Mills", "Welspun", "Vardhman", "Raymond", "Trident", "Alok Industries"];

const TESTIMONIALS = [
  {
    quote: "Texonomy bridges the gap between sourcing and strategy — one partner for yarn supply and market insight.",
    author: "Rajesh Mehta",
    role: "MD, Surat Yarn Mills",
  },
  {
    quote: "Their dual offering means our sales team trains with the same people who understand our supply chain.",
    author: "Ahmed Al-Rashidi",
    role: "Al-Rashidi Textiles, Turkey",
  },
];

function HeroScene() {
  const { isMobile, prefersReducedMotion } = useDevice();
  if (prefersReducedMotion) return null;
  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ alpha: true, antialias: !isMobile }}
        className="!absolute inset-0"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#00b4d8" />
        <ThreadParticles3D count={isMobile ? 60 : 140} />
      </Canvas>
    </Suspense>
  );
}

export default function Gateway() {
  const [hovered, setHovered] = useState<"trades" | "thinks" | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Logo to="/" />
          <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
            <a href="#divisions" className="hover:text-accent transition-colors">Divisions</a>
            <a href="#capabilities" className="hover:text-accent transition-colors">Capabilities</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button to="/trades/rfq" size="sm" variant="ghost" className="hidden md:inline-flex">
              Get a Quote
            </Button>
            <Button to="/thinks/contact" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-16 overflow-hidden">
        <img
          src="/images/hero-gateway.jpg"
          alt="Textile fibers and woven fabric"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <HeroScene />
        <div className="absolute inset-0 woven-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/85 to-bg-primary" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold tracking-widest uppercase mb-8"
          >
            <Sparkles size={14} />
            {SITE.motto}
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={word === "Intelligence." ? "text-gradient" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          >
            One company. Two specialized divisions — <strong className="text-text-primary font-medium">commercial execution</strong> and{" "}
            <strong className="text-text-primary font-medium">strategic insight</strong> — built for the global textile economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
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

        {/* Division cards */}
        <div id="divisions" className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-5">
          {/* Trades */}
          <motion.div
            onMouseEnter={() => setHovered("trades")}
            onMouseLeave={() => setHovered(null)}
            animate={{ scale: hovered === "trades" ? 1.02 : hovered === "thinks" ? 0.98 : 1 }}
            transition={{ duration: 0.35 }}
            className="group relative rounded-2xl border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-bg-elevated" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-muted" />
            <div className="relative p-8 md:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">Texonomy Trades</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">Source. Supply. Deliver.</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Package size={24} className="text-accent" />
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                B2B textile trading — premium yarn, fabrics, home textile, and garments for mills, manufacturers, and exporters worldwide.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {TRADES_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button to="/trades" size="lg" className="w-full sm:w-auto">
                Enter Trades <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>

          {/* Thinks */}
          <motion.div
            onMouseEnter={() => setHovered("thinks")}
            onMouseLeave={() => setHovered(null)}
            animate={{ scale: hovered === "thinks" ? 1.02 : hovered === "trades" ? 0.98 : 1 }}
            transition={{ duration: 0.35 }}
            className="group relative rounded-2xl border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-bg-elevated" />
            <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 via-accent/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-muted to-accent" />
            <div className="relative p-8 md:p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-accent text-xs font-bold tracking-widest uppercase">Texonomy Thinks</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">Consult. Train. Advise.</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Brain size={24} className="text-accent" />
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Training programs, market intelligence, production consulting, and strategic advisory for textile industry professionals.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {THINKS_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button to="/thinks" variant="outline" size="lg" className="w-full sm:w-auto">
                Enter Thinks <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#stats"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative z-10 mt-12 text-text-muted hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </motion.a>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 border-y border-border bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 woven-pattern opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {GATEWAY_STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div className="text-center p-6 rounded-2xl border border-border/50 bg-bg-elevated/40 hover:border-accent/30 transition-colors">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-1">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-text-muted text-sm uppercase tracking-wider">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 md:py-32 px-4">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="Unified Capabilities" className="justify-center" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Everything the textile industry needs
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From sourcing yarn at scale to training your sales force — Texonomy covers the full value chain under one roof.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.07}>
                <Card className="h-full">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <cap.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{cap.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why */}
      <section id="about" className="py-24 md:py-32 px-4 bg-bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionLabel text="Why Texonomy" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The only partner that <span className="text-gradient">trades</span> and <span className="text-gradient">thinks</span> for you
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Most firms do one or the other — supply yarn or advise on markets. Texonomy was built to do both, because the best sourcing decisions come from the deepest market intelligence.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Whether you need 10 tonnes of Ne 30 combed cotton or a training program for your export sales team, you get practitioners who understand count systems, trade flows, and margin pressure — not generic consultants.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/trades/yarn" variant="secondary" size="sm">Browse Yarn Products</Button>
              <Button to="/thinks/consulting" variant="ghost" size="sm">View Consulting →</Button>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Trades", value: "B2B Supply", icon: Package },
                { label: "Thinks", value: "Advisory", icon: Brain },
                { label: "Reach", value: "Global Supply", icon: Globe },
                { label: "Experience", value: "24+ Years", icon: Shield },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl border border-border bg-bg-elevated/60 hover:border-accent/30 transition-colors text-center"
                >
                  <item.icon size={28} className="text-accent mx-auto mb-3" />
                  <div className="text-text-muted text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="font-display font-bold text-lg">{item.value}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-4">
        <ScrollReveal className="text-center">
          <p className="text-text-muted text-xs uppercase tracking-widest mb-8">Trusted by leading textile enterprises</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {CLIENTS.map((c) => (
              <span key={c} className="font-display font-semibold text-lg text-text-secondary/50 hover:text-accent/70 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-bg-secondary border-y border-border">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel text="Client Voices" className="justify-center" />
            <h2 className="font-display text-3xl font-bold">What industry leaders say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1}>
                <Card glow className="h-full">
                  <p className="text-text-primary leading-relaxed italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-text-muted text-sm">{t.role}</div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-secondary p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 woven-pattern opacity-40" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to work with Texonomy?</h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Source premium yarn, train your team, or decode your market — start with the division that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/trades/rfq" size="lg">Request a Quote</Button>
                <Button to="/thinks/contact" variant="outline" size="lg">Book a Consultation</Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter division="gateway" />
    </div>
  );
}
