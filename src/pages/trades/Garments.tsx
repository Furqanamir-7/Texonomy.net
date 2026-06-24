import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const ITEMS = ["T-Shirts & Basics", "Polo & Corporate Wear", "Sportswear & Activewear", "Uniforms & Workwear"];

export default function TradesGarments() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Garments</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Garment Sourcing & Supply</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.1}>
              <Card><h2 className="font-display text-lg font-semibold">{item}</h2><p className="text-text-secondary text-sm mt-2">Cut-and-sew programs with consistent quality and reliable delivery schedules.</p></Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10"><Button to="/trades/rfq" size="lg">Request Quote</Button></div>
      </Section>
    </>
  );
}
