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
import { Logo } from "@/components/shared/Logo";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ThreadParticles3D } from "@/components/3d/ThreadParticles3D";
import { useDevice } from "@/hooks/useDevice";

const WHAT_WE_TRADE = [
  {
    title: "Yarn",
    desc: "Cotton, polyester, and blended yarns. Ring-spun, open-end, and vortex, from Ne 4 to Ne 120.",
    path: "/trades/yarn",
  },
  {
    title: "Fabric",
    desc: "Cotton, poly-cotton, Tencel-cotton, and blended constructions.",
    path: "/trades/fabrics",
  },
  {
    title: "Home Textiles",
    desc: "Bed linen, towels, quilts, duvets, and furnishings.",
    path: "/trades/home-textile",
  },
];

const WHY_TEXONOMY = [
  {
    title: "Two decades of product knowledge",
    desc: "Count systems, fiber behavior, and how a yarn or fabric performs before it ever ships.",
  },
  {
    title: "The right quality, deliberately",
    desc: "Texonomy matches the textile to your end use — so you don't pay for quality you don't need, or get caught short on the quality you do.",
  },
  {
    title: "Production-plan thinking",
    desc: "Hundreds of production plans built over the years mean an order gets read the way a mill reads it, not the way a broker does.",
  },
  {
    title: "Quotes in an hour or two",
    desc: "Knowing the markets and the mills cold means fast, specific pricing — not a service promise, just what working the trade looks like.",
  },
];

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

      {/* Hero */}
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
            Texonomy — Trades &amp; Thinks
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
            B2B textile supply — yarn, fabric, and home textiles — for mills, manufacturers, and exporters,
            by people who know count systems, trade flows, and where margins come from.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button to="/trades/rfq" size="lg">
              Request a Quote <ArrowRight size={18} />
            </Button>
            <Button to="/trades" variant="outline" size="lg">
              What We Trade
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

      {/* What We Trade */}
      <section id="what-we-trade" className="py-24 md:py-32 px-4 border-y border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="What We Trade" className="justify-center" />
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Yarn, fabric, and home textiles — sourced to spec.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {WHAT_WE_TRADE.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Card className="h-full">
                  <Factory size={28} className="text-accent mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>
                  <Button to={item.path} variant="ghost" size="sm">
                    View {item.title} →
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-center text-text-muted text-sm max-w-xl mx-auto">
              Don&apos;t see your product? Send the spec anyway — sourcing the right textile is what we do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Texonomy */}
      <section id="why-texonomy" className="py-24 md:py-32 px-4">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-16 max-w-3xl">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Why Texonomy</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4 leading-tight">
              The right quality for the job — not over-spec&apos;d, not under.
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Texonomy is a new name backed by twenty years on the textile floor. Every quote carries that judgment:
              knowing what a spec actually needs, and what it doesn&apos;t.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_TEXONOMY.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Two Divisions */}
      <section id="divisions" className="py-24 md:py-32 px-4 bg-bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel text="The Two Divisions" className="justify-center" />
            <h2 className="font-display text-3xl md:text-5xl font-bold">Two divisions. One trade.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
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
                <span className="text-accent text-xs font-bold tracking-widest uppercase">Texonomy Trades</span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4">Our core business.</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  Sourcing and supplying yarn, fabric, and home textiles to mills, manufacturers, and exporters.
                </p>
                <Button to="/trades" size="lg">
                  Go to Trades <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>

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
                <span className="text-accent text-xs font-bold tracking-widest uppercase">Texonomy Thinks</span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4">The advisory side.</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  Training, consulting, and market intelligence for textile professionals. Newer than Trades,
                  built on the same floor experience.
                </p>
                <Button to="/thinks" variant="outline" size="lg">
                  Explore Thinks <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-4">
        <ScrollReveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-bg-elevated to-bg-secondary p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 woven-pattern opacity-40" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Tell us what you need.</h2>
              <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
                Send your spec — count, volume, destination — and we&apos;ll come back within an hour or two.
              </p>
              <Button to="/trades/rfq" size="lg" className="mb-8">
                Request a Quote
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary">
                <a href={`mailto:${SITE.emails[0]}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  {SITE.emails[0]}
                </a>
                <a href={SITE.whatsappUrl} className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone size={16} className="text-accent" />
                  {SITE.phone}
                </a>
                <span className="text-text-muted">{SITE.address}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <SiteFooter division="gateway" />
    </div>
  );
}
