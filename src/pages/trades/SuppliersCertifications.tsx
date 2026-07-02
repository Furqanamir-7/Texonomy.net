import { Shield, Award, CheckCircle, Leaf, FlaskConical, FileCheck, ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import {
  CERTIFICATIONS_OVERVIEW,
  FIBER_SOURCING_CERTIFICATIONS,
  FIBER_SOURCING_INTRO,
  PRODUCT_SAFETY_CERTIFICATIONS,
  PRODUCT_SAFETY_INTRO,
  PRODUCT_SAFETY_NOTE,
  type CertificationEntry,
} from "@/data/trades/certifications";

const SUPPLIER_STANDARDS = [
  "Lab-tested yarn with documented count and strength specs",
  "On-site mill audits for capacity and quality systems",
  "Traceable lot numbers on every shipment",
  "Pre-shipment inspection and cone sampling",
];

const OVERVIEW_CATEGORIES = [
  {
    icon: Leaf,
    title: "Fiber & Sourcing",
    description: "What the fiber is made of and how it was grown or recycled — tracked via chain-of-custody, not lab testing.",
  },
  {
    icon: FlaskConical,
    title: "Product Safety",
    description: "Finished yarn or fabric laboratory-tested and cleared for harmful substances — a different claim from sourcing.",
  },
] as const;

function CertificationCard({ entry }: { entry: CertificationEntry }) {
  return (
    <Card className="h-full">
      <Award size={22} className="text-accent mb-3" />
      <h3 className="font-display text-base font-semibold mb-2">{entry.name}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{entry.description}</p>
    </Card>
  );
}

export default function SuppliersCertifications() {
  return (
    <>
      <section className="py-14 sm:py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Suppliers</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
              Suppliers &amp; Certifications
            </h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
              A vetted supplier network across Asia and the Middle East — with certification coverage for EU, US, and GCC export programs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section id="overview" className="py-14 md:py-20 scroll-mt-24">
        <ScrollReveal>
          <SectionLabel text="Overview" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 max-w-3xl">
            Certifications for yarn, fabric, and home textile trade
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
            {CERTIFICATIONS_OVERVIEW.purpose}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-10">
          <ScrollReveal className="lg:col-span-3">
            <Card hover={false} className="h-full border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-3">Texonomy&apos;s role</h3>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {CERTIFICATIONS_OVERVIEW.tradingRole}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.08}>
            <div className="h-full rounded-xl border border-accent/25 bg-accent/5 p-6 flex flex-col justify-center">
              <FileCheck size={22} className="text-accent mb-3" />
              <p className="font-display text-base font-semibold text-text-primary leading-snug">
                {CERTIFICATIONS_OVERVIEW.transactionCertificates}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="text-text-muted text-xs font-bold tracking-widest uppercase mb-4">
            Two categories on this page
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {OVERVIEW_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated p-5"
              >
                <cat.icon size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{cat.title}</h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="flex items-center gap-2 text-text-muted text-xs mt-6">
            <ArrowDown size={14} className="shrink-0" />
            Scroll for the full certification reference below
          </p>
        </ScrollReveal>
      </Section>

      <Section id="fiber-sourcing" className="py-14 md:py-20 bg-bg-secondary scroll-mt-24">
        <ScrollReveal>
          <SectionLabel text="Category 1" />
          <div className="flex items-start gap-3 mb-8 max-w-3xl">
            <Leaf size={24} className="text-accent shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Fiber &amp; Sourcing</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{FIBER_SOURCING_INTRO}</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FIBER_SOURCING_CERTIFICATIONS.map((entry, i) => (
            <ScrollReveal key={entry.name} delay={i * 0.04}>
              <CertificationCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section id="product-safety" className="py-14 md:py-20 scroll-mt-24">
        <ScrollReveal>
          <SectionLabel text="Category 2" />
          <div className="flex items-start gap-3 mb-8 max-w-3xl">
            <FlaskConical size={24} className="text-accent shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Product Safety &amp; Testing</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{PRODUCT_SAFETY_INTRO}</p>
            </div>
          </div>
        </ScrollReveal>
        <div className="max-w-2xl">
          {PRODUCT_SAFETY_CERTIFICATIONS.map((entry, i) => (
            <ScrollReveal key={entry.name} delay={i * 0.06}>
              <CertificationCard entry={entry} />
            </ScrollReveal>
          ))}
          <ScrollReveal>
            <p className="text-text-muted text-xs sm:text-sm mt-6 leading-relaxed border-l-2 border-border pl-4">
              {PRODUCT_SAFETY_NOTE}
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="py-14 md:py-20 bg-bg-secondary">
        <ScrollReveal>
          <p className="text-text-secondary text-sm sm:text-base max-w-3xl leading-relaxed mb-14">
            {CERTIFICATIONS_OVERVIEW.closing}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6">Supplier Standards</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10">
            {SUPPLIER_STANDARDS.map((s) => (
              <div key={s} className="flex items-start gap-3 text-sm text-text-secondary">
                <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                {s}
              </div>
            ))}
          </div>
          <Button to="/trades/rfq" size="lg" className="w-full sm:w-auto">
            <Shield size={18} /> Request Certified Supply
          </Button>
        </ScrollReveal>
      </Section>
    </>
  );
}
