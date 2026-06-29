import { Handshake, Globe, Factory } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ALLIANCES = [
  {
    icon: Factory,
    title: "Spinning Mill Partnerships",
    desc: "Long-term yarn supply agreements with mills in Pakistan, Vietnam, Indonesia, and China — priority capacity and count-matched programs.",
  },
  {
    icon: Globe,
    title: "Regional Trading Desks",
    desc: "On-ground sourcing teams in South Asia and the GCC for faster quotes, mill visits, and shipment coordination.",
  },
  {
    icon: Handshake,
    title: "Buyer-Seller Matching",
    desc: "Connecting export houses and brands with the right mill for their count, composition, and volume — not just the cheapest quote.",
  },
];

export default function TradingAlliances() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Partnerships</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Trading Alliances</h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Strategic mill partnerships and regional trading desks that give Texonomy buyers access, speed, and accountability.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Section className="bg-bg-secondary">
        <div className="grid md:grid-cols-3 gap-8">
          {ALLIANCES.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <Card className="h-full">
                <a.icon size={28} className="text-accent mb-4" />
                <h2 className="font-display text-xl font-semibold mb-3">{a.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/trades/contact" size="lg">Discuss a Partnership</Button>
        </div>
      </Section>
    </>
  );
}
