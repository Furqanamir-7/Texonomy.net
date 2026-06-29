import { Shield, Award, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const CERTS = [
  { name: "OEKO-TEX Standard 100", desc: "Harmful substance testing for yarn and fabric programs." },
  { name: "ISO 9001", desc: "Quality management systems across supplier mills." },
  { name: "GOTS", desc: "Organic cotton chain-of-custody for certified programs." },
  { name: "BCI", desc: "Better Cotton Initiative sourcing for sustainable cotton yarn." },
];

const SUPPLIER_STANDARDS = [
  "Lab-tested yarn with documented count and strength specs",
  "On-site mill audits for capacity and quality systems",
  "Traceable lot numbers on every shipment",
  "Pre-shipment inspection and cone sampling",
];

export default function SuppliersCertifications() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Suppliers</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Suppliers &amp; Certifications</h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              A vetted supplier network across Asia and the Middle East — with certification coverage for EU, US, and GCC export programs.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <h2 className="font-display text-2xl font-bold mb-8 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {CERTS.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 0.08}>
              <Card glow>
                <Award size={24} className="text-accent mb-3" />
                <h3 className="font-display text-lg font-semibold mb-2">{c.name}</h3>
                <p className="text-text-secondary text-sm">{c.desc}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <h2 className="font-display text-2xl font-bold mb-8 text-center">Supplier Standards</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {SUPPLIER_STANDARDS.map((s) => (
            <div key={s} className="flex items-start gap-3 text-sm text-text-secondary">
              <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
              {s}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button to="/trades/rfq" size="lg"><Shield size={18} /> Request Certified Supply</Button>
        </div>
      </Section>
    </>
  );
}
