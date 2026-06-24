import { motion } from "framer-motion";
import { ArrowRight, Quote, Factory, Globe, Package, Shirt } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { HeroImage } from "@/components/shared/HeroImage";
import { MarqueeStrip } from "@/components/shared/MarqueeStrip";
import {
  yarnProducts,
  tradesStats,
  tradesTestimonials,
  exportCountries,
  industries,
} from "@/data/trades/products";
import { Link } from "react-router-dom";

export default function TradesHome() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-primary to-bg-primary" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
            <SectionLabel text="Global Textile Trading" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Yarn.<br />Delivered Worldwide.
            </h1>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Supplying mills, manufacturers, and exporters with consistent-quality yarn across every major market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/trades/yarn" size="lg">Explore Yarn <ArrowRight size={18} /></Button>
              <Button to="/trades/contact" variant="outline" size="lg">Contact Us</Button>
            </div>
          </motion.div>
          <HeroImage
            src="/images/hero-trades.jpg"
            alt="Premium cotton yarn for global mills"
            className="h-80 lg:h-96 shadow-2xl shadow-accent/10"
            overlay="gradient"
          />
        </div>
      </section>

      <section className="py-12 border-y border-border bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {tradesStats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
              <div className="text-text-muted text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Section className="bg-gradient-to-br from-accent/20 via-accent/10 to-bg-primary">
        <SectionHeader eyebrow="Flagship Product" title="Yarn for every mill. Count for every need." />
        <div className="grid md:grid-cols-2 gap-6">
          {yarnProducts.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.1}>
              <Card className="bg-bg-elevated">
                <h3 className="font-display text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-text-muted text-sm mb-3">{p.tagline}</p>
                <p className="text-text-secondary text-sm mb-3">{p.counts} · {p.composition}</p>
                <Link to="/trades/yarn" className="text-accent text-sm font-medium">View Details →</Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/trades/yarn" variant="secondary">View All Yarn Products →</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Products" title="Beyond yarn" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Factory, title: "Fabrics", desc: "Knit, woven, denim, and greige.", path: "/trades/fabrics" },
            { icon: Package, title: "Home Textile", desc: "Bedsheets, towels, curtains.", path: "/trades/home-textile" },
            { icon: Shirt, title: "Garments", desc: "T-shirts, polo, sportswear.", path: "/trades/garments" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <Link to={item.path}>
                <Card>
                  <item.icon size={28} className="text-accent mb-3" />
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.desc}</p>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="Industries" title="Serving every segment" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind} delay={i * 0.05}>
              <div className="p-4 rounded-xl border border-border text-center text-sm font-medium hover:border-accent/30 hover:bg-accent/5 transition-colors">
                {ind}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-primary border-y border-border">
        <SectionHeader eyebrow="Global Reach" title="Trading across continents." align="center" />
        <MarqueeStrip items={exportCountries} className="py-4" />
        <div className="text-center mt-8">
          <Button to="/trades/export-markets" variant="outline">View Export Markets</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Client Voices" title="Trusted by mills worldwide" />
        <div className="grid md:grid-cols-3 gap-6">
          {tradesTestimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.1}>
              <Card>
                <Quote size={24} className="text-accent/40 mb-3" />
                <p className="text-text-secondary text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-text-muted text-xs">{t.company} · {t.country}</div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-bg-elevated p-12 text-center">
            <Globe size={40} className="text-accent mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Ready to source premium yarn?</h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Tell us your count, composition, and quantity. We respond within 24 hours.
            </p>
            <Button to="/trades/rfq" size="lg">Send Inquiry →</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
