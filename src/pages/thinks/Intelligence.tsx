import { BarChart2, LineChart, Bell } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { insights } from "@/data/thinks/content";

const TIERS = [
  { name: "Basic", price: "Contact", features: ["Monthly market brief", "Price alerts", "Email support"] },
  { name: "Professional", price: "Contact", features: ["Weekly reports", "Demand forecasts", "Analyst access", "Custom dashboards"] },
  { name: "Enterprise", price: "Contact", features: ["Real-time data feeds", "Dedicated analyst", "Custom research", "API access"] },
];

export default function ThinksIntelligence() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Market Intelligence</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Intelligence That Moves Markets</h1>
            <p className="text-text-secondary text-lg max-w-2xl">Subscription-based access to real-time price data, supply trend reports, and demand forecasts.</p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <SectionHeader title="Subscription Tiers" />
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <Card className={i === 1 ? "border-accent/40 glow-accent" : ""}>
                <h3 className="font-display text-xl font-bold mb-1">{t.name}</h3>
                <p className="text-accent text-2xl font-bold mb-4">{t.price}</p>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="text-sm text-text-secondary flex items-center gap-2">
                      <LineChart size={14} className="text-accent" />{f}
                    </li>
                  ))}
                </ul>
                <Button to="/thinks/contact" variant={i === 1 ? "primary" : "outline"} className="w-full">Get Started</Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="Sample Reports" title="Recent intelligence briefings" />
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((a, i) => (
            <ScrollReveal key={a.slug} delay={i * 0.1}>
              <Card>
                <BarChart2 size={20} className="text-accent mb-3" />
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-text-secondary text-sm">{a.excerpt}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
      <Section>
        <Card className="text-center p-10">
          <Bell size={32} className="text-accent mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-4">Stay ahead of the market</h2>
          <Button to="/thinks/contact">Subscribe to Intelligence</Button>
        </Card>
      </Section>
    </>
  );
}
