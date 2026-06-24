import { GraduationCap, CheckCircle, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { trainingPrograms } from "@/data/thinks/content";

const PROGRAMS = [
  {
    title: "Sales Training for Textile Teams",
    duration: "2 days + 4-week coaching",
    modules: ["Yarn specifications", "B2B negotiation", "Client handling", "Market positioning"],
  },
  {
    title: "Corporate Training Programs",
    duration: "Flexible formats",
    modules: ["Industry fundamentals", "Lean manufacturing", "Export compliance", "Leadership development"],
  },
  ...trainingPrograms.map((p) => ({
    title: p.title,
    duration: p.duration,
    modules: [p.description],
  })),
];

export default function ThinksTraining() {
  return (
    <>
      <section className="py-20 md:py-28 woven-pattern">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Training</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Build Skills That Drive Revenue</h1>
            <p className="text-text-secondary text-lg max-w-2xl">Industry-specific programs designed by practitioners who&apos;ve sold yarn, managed mills, and closed export deals.</p>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="space-y-8">
          {PROGRAMS.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <Card glow>
                <div className="flex items-start gap-4 mb-4">
                  <GraduationCap size={28} className="text-accent shrink-0" />
                  <div>
                    <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                    <p className="text-accent text-sm flex items-center gap-1 mt-1"><Clock size={14} />{p.duration}</p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {p.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />{m}
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/thinks/contact" size="lg">Request a Training Proposal</Button>
        </div>
      </Section>
    </>
  );
}
