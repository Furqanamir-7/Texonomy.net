import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { HeroBackdrop } from "@/components/shared/HeroImage";
import { Scene3D } from "@/components/3d/Scene3D";
import {
  thinksServices,
  trainingPrograms,
  consultingSteps,
} from "@/data/thinks/content";

const icons = { training: BookOpen, consulting: Brain };

export default function ThinksHome() {
  return (
    <>
      <HeroBackdrop
        src="/images/hero-thinks.jpg"
        alt="Strategic business planning and market analysis"
        effect={<Scene3D particleCount={120} className="opacity-40" />}
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <SectionLabel text="Strategic Intelligence for Textile Professionals" className="justify-center" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-1">
              Think Beyond <span className="text-gradient">Markets.</span>
            </h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1">
              Training, consulting, and market intelligence — for organizations shaping the future of the textile industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button to="/thinks/contact" size="lg" className="w-full sm:w-auto">Book a Consultation <ArrowRight size={18} /></Button>
              <Button to="/thinks/consulting" variant="outline" size="lg" className="w-full sm:w-auto">View Services</Button>
            </div>
          </motion.div>
        </div>
      </HeroBackdrop>

      <Section pattern>
        <SectionHeader eyebrow="What We Do" title="Two disciplines. One outcome: better decisions." />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {thinksServices.map((s, i) => {
            const Icon = icons[s.id as keyof typeof icons];
            return (
              <ScrollReveal key={s.id} delay={i * 0.08}>
                <Link to={s.path}>
                  <Card className="h-full border-t-2 border-t-accent/40">
                    <Icon size={28} className="text-accent mb-4" />
                    <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-text-secondary text-sm mb-4">{s.description}</p>
                    <span className="text-accent text-sm font-medium">Learn More →</span>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <SectionHeader eyebrow="Training" title="Built for practitioners. Delivered by industry experts." />
        <div className="space-y-6">
          {trainingPrograms.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <Card hover={false} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-text-muted text-sm">{p.duration} · {p.format}</p>
                  <p className="text-text-secondary text-sm mt-2">{p.description}</p>
                </div>
                <Button to="/thinks/training" variant="ghost" size="sm">View Program →</Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="How We Work" title="The Texonomy Methodology" />
        <div className="grid md:grid-cols-5 gap-4">
          {consultingSteps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.08}>
              <div className="p-5 rounded-xl border border-border bg-bg-elevated/40 text-center">
                <div className="font-display text-2xl font-bold text-accent/50 mb-2">{s.step}</div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-text-muted text-xs">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-bg-elevated p-12 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Work with Texonomy Thinks</h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Whether you need a one-time consultation or ongoing intelligence support — we start with a conversation.
            </p>
            <Button to="/thinks/contact" size="lg">Book a Free Consultation</Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
