import { ClipboardCheck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const AUDIT_STEPS = [
  { step: "01", title: "Documentation Review", desc: "Company registration, export licenses, and prior shipment records." },
  { step: "02", title: "Mill Visit / Virtual Audit", desc: "Capacity assessment, machinery list, and quality control processes." },
  { step: "03", title: "Sample & Lab Testing", desc: "Count verification, strength tests, and shade/consistency checks." },
  { step: "04", title: "Trial Shipment", desc: "Small-lot order with full QC before onboarding as an approved supplier." },
  { step: "05", title: "Ongoing Monitoring", desc: "Periodic re-audit and shipment scorecards for approved vendors." },
];

export default function SellersAudit() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Compliance</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Sellers&apos; Audit</h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Every supplier in the Texonomy network goes through a structured audit — so buyers get documented quality, not promises.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="space-y-6 max-w-3xl mx-auto">
          {AUDIT_STEPS.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.08}>
              <Card glow className="flex gap-5">
                <div className="font-display text-2xl font-bold text-accent/50 shrink-0">{s.step}</div>
                <div>
                  <h2 className="font-display text-lg font-semibold mb-1">{s.title}</h2>
                  <p className="text-text-secondary text-sm">{s.desc}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/trades/contact" size="lg">
            <ClipboardCheck size={18} /> Submit a Vendor for Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
