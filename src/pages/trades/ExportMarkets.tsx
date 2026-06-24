import { Globe } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MarqueeStrip } from "@/components/shared/MarqueeStrip";
import { exportCountries } from "@/data/trades/products";

const CERTS = ["OEKO-TEX", "ISO 9001", "GOTS", "BCI"];
const STEPS = ["Order Placed", "Production & QC", "Export Documentation", "Shipment", "Delivery"];

export default function TradesExportMarkets() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <ScrollReveal>
            <Globe size={48} className="text-accent mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Global Export Markets</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Supplying mills and manufacturers in over 68 countries from our base in South Asia.</p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <MarqueeStrip items={exportCountries} className="mb-12" />
        <SectionHeader title="Certifications" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {CERTS.map((c) => (
            <Card key={c} hover={false} className="text-center font-display font-semibold">{c}</Card>
          ))}
        </div>
        <SectionHeader title="Shipping Timeline" />
        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <span className="w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span className="font-medium">{s}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12"><Button to="/trades/rfq" size="lg">Start an Export Inquiry</Button></div>
      </Section>
    </>
  );
}
