import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GlobeHeroPanel } from "@/components/trades/GlobeHeroPanel";
import { TRADES_CATEGORIES } from "@/data/trades/trades.config";
import { yarnProducts, tradesStats } from "@/data/trades/products";
import { Link } from "react-router-dom";

const CATEGORY_ICONS = { yarns: Package, fabrics: Factory, "home-textiles": Package, garments: Package };

export default function TradesHome() {
  const activeCategories = TRADES_CATEGORIES.filter((c) => !c.placeholder);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-primary to-bg-primary" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
            <SectionLabel text="Global Textile Trading" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Yarn.<br />Delivered Worldwide.
            </h1>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Supplying mills, manufacturers, and exporters with consistent-quality yarn across every major market.
              Explore our global supplier and customer network on the map.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/trades/yarn" size="lg">Explore Yarn <ArrowRight size={18} /></Button>
              <Button to="/trades/rfq" variant="outline" size="lg">Request a Quote</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <GlobeHeroPanel />
          </motion.div>
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

      <Section>
        <SectionHeader
          eyebrow="Trade Categories"
          title="Yarn, fabric, and home textiles — sourced to spec."
          description="Four trade categories. Click through to explore subcategories and request a quote."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRADES_CATEGORIES.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.id as keyof typeof CATEGORY_ICONS] ?? Package;
            return (
              <ScrollReveal key={cat.id} delay={i * 0.08}>
                <Link to={cat.placeholder ? "#" : cat.path}>
                  <Card className={`h-full ${cat.placeholder ? "opacity-60" : ""}`}>
                    <Icon size={28} className="text-accent mb-3" />
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {cat.label}
                      {cat.placeholder && (
                        <span className="ml-2 text-xs text-text-muted font-normal">(Coming soon)</span>
                      )}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">{cat.description}</p>
                    {!cat.placeholder && cat.subcategories.length > 0 && (
                      <p className="text-text-muted text-xs">
                        {cat.subcategories.slice(0, 4).map((s) => s.label).join(" · ")}
                        {cat.subcategories.length > 4 ? " · …" : ""}
                      </p>
                    )}
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

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

      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="Quick Links" title="Explore our trade network" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-accent/5 transition-colors text-center"
            >
              <div className="font-medium text-sm">{cat.label}</div>
              <div className="text-text-muted text-xs mt-1">{cat.subcategories.length} types</div>
            </Link>
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
