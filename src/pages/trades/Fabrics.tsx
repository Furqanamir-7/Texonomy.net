import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ITEMS = [
  { title: "Knit Fabrics", desc: "Single jersey, rib, interlock, and fleece for apparel manufacturers." },
  { title: "Woven Fabrics", desc: "Poplin, twill, canvas, and suiting for shirting and workwear." },
  { title: "Denim", desc: "Ring-spun and open-end denim in multiple weights and washes." },
  { title: "Greige & Dyed", desc: "Greige for processing units and piece-dyed for ready-to-cut programs." },
];

export default function TradesFabrics() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Fabrics</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Fabrics for Every Application</h1>
            <p className="text-text-secondary text-lg max-w-2xl">Knit, woven, denim, and greige sourced to your specifications.</p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <Card><h2 className="font-display text-xl font-semibold mb-2">{item.title}</h2><p className="text-text-secondary text-sm">{item.desc}</p></Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10"><Button to="/trades/rfq" size="lg">Request Fabric Quote</Button></div>
      </Section>
    </>
  );
}
