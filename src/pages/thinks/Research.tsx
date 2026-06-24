import { FileText, Microscope } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const STUDIES = [
  { title: "South Asian Spinning Capacity Survey 2025", finding: "18% of surveyed mills plan capacity additions within 24 months." },
  { title: "Polyester Supply Chain Risk Index", finding: "PTA price volatility identified as top procurement risk for 62% of respondents." },
  { title: "Textile Export Compliance Benchmark", finding: "Documentation errors account for 23% of shipment delays in GCC markets." },
];

export default function ThinksResearch() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Research</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Commissioned Industry Research</h1>
            <p className="text-text-secondary text-lg max-w-2xl">Primary surveys, expert interviews, and trade data analysis for stakeholders and investors.</p>
          </ScrollReveal>
        </div>
      </section>
      <Section className="bg-bg-secondary">
        <SectionHeader title="Our Methodology" description="Primary surveys · Expert interviews · Trade data analysis · Sector benchmarking" />
        <div className="grid md:grid-cols-3 gap-4">
          {["Primary Surveys", "Expert Interviews", "Trade Data"].map((m) => (
            <Card key={m} hover={false} className="text-center">
              <Microscope size={28} className="text-accent mx-auto mb-3" />
              <h3 className="font-semibold">{m}</h3>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader title="Past Research" />
        <div className="space-y-6">
          {STUDIES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <Card>
                <FileText size={20} className="text-accent mb-3" />
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-text-secondary text-sm">{s.finding}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/thinks/contact" size="lg">Commission a Study</Button>
        </div>
      </Section>
    </>
  );
}
