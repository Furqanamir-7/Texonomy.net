import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { caseStudies } from "@/data/thinks/content";

export default function ThinksCaseStudies() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Case Studies</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Work That Moved the Needle</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.1}>
              <Card glow className="h-full">
                <span className="font-display text-5xl font-bold text-accent/30">{c.id}</span>
                <p className="text-text-muted text-xs mt-2 uppercase tracking-wider">{c.client}</p>
                <h2 className="font-display text-xl font-semibold mt-4 mb-3">{c.challenge}</h2>
                <p className="text-accent font-display text-2xl font-bold">{c.result}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
