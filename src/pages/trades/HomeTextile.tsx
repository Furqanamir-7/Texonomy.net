import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ITEMS = ["Bedsheets & Bedding", "Bath Towels", "Curtains & Drapes", "Comforters & Quilts"];

export default function TradesHomeTextile() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Home Textile</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Home Textile Collections</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.1}>
              <Card><h2 className="font-display text-lg font-semibold">{item}</h2><p className="text-text-secondary text-sm mt-2">Export-quality home textile products for retail and hospitality buyers.</p></Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10"><Button to="/trades/rfq" size="lg">Request Quote</Button></div>
      </Section>
    </>
  );
}
