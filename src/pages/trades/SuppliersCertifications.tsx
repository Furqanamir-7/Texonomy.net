import { useState } from "react";
import { Shield, Award, CheckCircle, FileText, Leaf, FlaskConical } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  CERTIFICATIONS_OVERVIEW,
  CERTIFICATION_TABS,
  FIBER_SOURCING_CERTIFICATIONS,
  FIBER_SOURCING_INTRO,
  PRODUCT_SAFETY_CERTIFICATIONS,
  PRODUCT_SAFETY_INTRO,
  PRODUCT_SAFETY_NOTE,
  type CertificationEntry,
  type CertificationTabId,
} from "@/data/trades/certifications";
import { cn } from "@/lib/utils";

const SUPPLIER_STANDARDS = [
  "Lab-tested yarn with documented count and strength specs",
  "On-site mill audits for capacity and quality systems",
  "Traceable lot numbers on every shipment",
  "Pre-shipment inspection and cone sampling",
];

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
  const [tab, setTab] = useState<CertificationTabId>("overview");

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

      <Section className="py-12 md:py-16">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {CERTIFICATION_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                tab === t.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-bg-elevated text-text-secondary hover:text-text-primary border border-border",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <ScrollReveal>
            <div className="max-w-3xl space-y-6">
              <Card hover={false}>
                <div className="flex items-start gap-3 mb-4">
                  <FileText size={22} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-display text-xl font-semibold mb-2">Purpose</h2>
                    <p className="text-text-secondary text-sm leading-relaxed">{CERTIFICATIONS_OVERVIEW.purpose}</p>
                  </div>
                </div>
              </Card>
              <Card hover={false}>
                <div className="flex items-start gap-3 mb-4">
                  <Shield size={22} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-display text-xl font-semibold mb-2">How Texonomy presents certifications</h2>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {CERTIFICATIONS_OVERVIEW.tradingRole}
                    </p>
                    <p className="text-text-primary text-sm font-medium border-l-2 border-accent pl-4">
                      {CERTIFICATIONS_OVERVIEW.transactionCertificates}
                    </p>
                    <p className="text-text-muted text-xs mt-3 italic leading-relaxed">
                      {CERTIFICATIONS_OVERVIEW.transactionNote}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        )}

        {tab === "fiber-sourcing" && (
          <div>
            <ScrollReveal>
              <div className="flex items-start gap-3 mb-8 max-w-3xl">
                <Leaf size={22} className="text-accent shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl font-semibold mb-2">Fiber &amp; Sourcing Certifications</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{FIBER_SOURCING_INTRO}</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {FIBER_SOURCING_CERTIFICATIONS.map((entry, i) => (
                <ScrollReveal key={entry.name} delay={i * 0.04}>
                  <CertificationCard entry={entry} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {tab === "product-safety" && (
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="flex items-start gap-3 mb-8">
                <FlaskConical size={22} className="text-accent shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl font-semibold mb-2">Product Safety &amp; Testing</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{PRODUCT_SAFETY_INTRO}</p>
                </div>
              </div>
            </ScrollReveal>
            {PRODUCT_SAFETY_CERTIFICATIONS.map((entry, i) => (
              <ScrollReveal key={entry.name} delay={i * 0.06}>
                <CertificationCard entry={entry} />
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <p className="text-text-muted text-xs sm:text-sm mt-6 italic leading-relaxed border-t border-border pt-6">
                {PRODUCT_SAFETY_NOTE}
              </p>
            </ScrollReveal>
          </div>
        )}

        <ScrollReveal>
          <p className="text-text-secondary text-sm sm:text-base max-w-3xl mt-12 pt-8 border-t border-border leading-relaxed">
            {CERTIFICATIONS_OVERVIEW.closing}
          </p>
        </ScrollReveal>

        <div className="mt-14">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">Supplier Standards</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {SUPPLIER_STANDARDS.map((s) => (
              <div key={s} className="flex items-start gap-3 text-sm text-text-secondary">
                <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                {s}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button to="/trades/rfq" size="lg" className="w-full sm:w-auto">
              <Shield size={18} /> Request Certified Supply
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
