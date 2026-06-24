import { Calendar, ArrowUpRight, BarChart2, FileText, BookOpen } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { insights } from "@/data/thinks/content";

const iconMap = { "Market Report": BarChart2, "Trade Policy": FileText, Operations: BookOpen };

export default function ThinksInsights() {
  return (
    <>
      <section className="py-20 md:py-28 woven-pattern">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Insights</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Textile Intelligence Hub</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((a, i) => {
            const Icon = iconMap[a.category as keyof typeof iconMap] ?? BookOpen;
            return (
              <ScrollReveal key={a.slug} delay={i * 0.08}>
                <Card className="h-full group cursor-pointer">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    <Icon size={12} />{a.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-3 mb-2 group-hover:text-accent transition-colors">{a.title}</h3>
                  <p className="text-text-secondary text-sm flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border text-xs text-text-muted">
                    <span className="flex items-center gap-1"><Calendar size={12} />{a.date}</span>
                    <ArrowUpRight size={16} className="group-hover:text-accent" />
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
