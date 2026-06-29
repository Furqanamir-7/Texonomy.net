import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { GlobeHeroPanel } from "@/components/trades/GlobeHeroPanel";
import { TRADES_CATEGORIES } from "@/data/trades/trades.config";
import { yarnProducts } from "@/data/trades/products";
import { Link } from "react-router-dom";

const CATEGORY_ICONS = { yarns: Package, fabrics: Factory, "home-textiles": Package, garments: Package };

export default function TradesHome() {
  return (
    <>
      <section className="relative min-h-0 md:min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-bg-primary to-bg-primary" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="min-w-0">
            <SectionLabel text="Global Textile Trading" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Premium Yarn.<br />Delivered Worldwide.
            </h1>
            <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Supplying mills, manufacturers, and exporters with consistent-quality yarn across every major market.
              Explore our global supplier and customer network on the map.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to="/trades/yarn" size="lg" className="w-full sm:w-auto">Explore Yarn <ArrowRight size={18} /></Button>
              <Button to="/trades/rfq" variant="outline" size="lg" className="w-full sm:w-auto">Request a Quote</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="min-w-0 w-full"
          >
            <GlobeHeroPanel />
          </motion.div>
        </div>
      </section>

      <Section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 via-accent/10 to-bg-primary">
        <SectionHeader
          eyebrow="Flagship Product"
          title="Yarn for every mill. Count for every need."
          className="text-center mx-auto max-w-3xl mb-8"
        />
        <div className="grid md:grid-cols-2 gap-5">
          {yarnProducts.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08}>
              <Card className="bg-bg-elevated">
                <h3 className="font-display text-xl font-semibold mb-1">{p.name}</h3>
                <p className="text-text-muted text-sm mb-2">{p.tagline}</p>
                <p className="text-text-secondary text-sm mb-3">{p.counts} · {p.composition}</p>
                <Link to="/trades/yarn" className="text-accent text-sm font-medium">View Details →</Link>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button to="/trades/yarn" variant="secondary">View All Yarn Products →</Button>
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <SectionHeader
          eyebrow="Trade Categories"
          title="Yarn, fabric, and home textiles — sourced to spec."
          description="Browse our trade categories and request a quote for your specification."
          className="text-center mx-auto max-w-3xl mb-8"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRADES_CATEGORIES.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.id as keyof typeof CATEGORY_ICONS] ?? Package;
            return (
              <ScrollReveal key={cat.id} delay={i * 0.06}>
                {cat.placeholder ? (
                  <Card className="h-full opacity-60">
                    <Icon size={28} className="text-accent mb-3" />
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {cat.label}
                      <span className="ml-2 text-xs text-text-muted font-normal">(Coming soon)</span>
                    </h3>
                    <p className="text-text-secondary text-sm">{cat.description}</p>
                  </Card>
                ) : (
                  <Link to={cat.path}>
                    <Card className="h-full hover:border-accent/30 transition-colors">
                      <Icon size={28} className="text-accent mb-3" />
                      <h3 className="font-display text-lg font-semibold mb-2">{cat.label}</h3>
                      <p className="text-text-secondary text-sm mb-3">{cat.description}</p>
                      {cat.subcategories.length > 0 && (
                        <p className="text-text-muted text-xs line-clamp-2">
                          {cat.subcategories.slice(0, 4).map((s) => s.label).join(" · ")}
                          {cat.subcategories.length > 4 ? " · …" : ""}
                        </p>
                      )}
                    </Card>
                  </Link>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section className="py-12 md:py-16">
        <ScrollReveal>
          <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-bg-elevated p-6 sm:p-10 md:p-12 text-center">
            <Globe size={40} className="text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Ready to source premium yarn?</h2>
            <p className="text-text-secondary text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
              Tell us your count, composition, and quantity. We respond within 24 hours.
            </p>
            <Button to="/trades/rfq" size="lg" className="w-full sm:w-auto">Send Inquiry →</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
