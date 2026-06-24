import { TrendingUp, Factory, Package, Search, Settings } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Market Exploration & Analysis",
    description: "Deep-dive market research, demand-supply mapping, and trade intelligence for yarn and textile markets worldwide.",
    process: ["Market sizing", "Competitive mapping", "Import-export analysis", "Price forecasting", "Go-to-market strategy"],
    audience: "Textile traders, yarn exporters, and business development teams.",
  },
  {
    icon: Factory,
    title: "Production Consulting",
    description: "Production planning, process optimization, and capacity planning for textile and yarn manufacturing.",
    process: ["Flow audit", "Capacity planning", "Process standardization", "Quality frameworks", "OEE improvement"],
    audience: "Spinning mills, weaving units, and integrated manufacturers.",
  },
  {
    icon: Package,
    title: "Raw Material Planning",
    description: "Sourcing strategy, forecasting, procurement planning, and cost optimization for fiber inputs.",
    process: ["Fiber market analysis", "Supplier evaluation", "Inventory optimization", "Hedging strategy", "Cost-per-unit analysis"],
    audience: "Procurement managers, plant heads, and CFOs.",
  },
];

export default function ThinksConsulting() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Consulting</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Strategic Advisory for Textile Leaders</h1>
            <p className="text-text-secondary text-lg max-w-2xl">Data-backed consultation across market intelligence, production optimization, and raw material strategy.</p>
          </ScrollReveal>
        </div>
      </section>
      {SERVICES.map((s, idx) => (
        <Section key={s.title} className={idx % 2 === 1 ? "bg-bg-secondary" : ""}>
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <s.icon size={32} className="text-accent mb-4" />
              <h2 className="font-display text-3xl font-bold mb-4">{s.title}</h2>
              <p className="text-text-secondary mb-6">{s.description}</p>
              <Card hover={false} className="bg-accent/5 border-accent/20">
                <Search size={16} className="text-accent mb-2" />
                <p className="text-sm text-text-secondary">{s.audience}</p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <Card glow>
                <h4 className="font-semibold mb-4 flex items-center gap-2"><Settings size={18} className="text-accent" /> Our Process</h4>
                <ul className="space-y-3">
                  {s.process.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Section>
      ))}
      <Section>
        <div className="text-center">
          <Button to="/thinks/contact" size="lg">Schedule Discovery Call</Button>
        </div>
      </Section>
    </>
  );
}
