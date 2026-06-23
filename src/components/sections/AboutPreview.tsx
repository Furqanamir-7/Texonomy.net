"use client";

import { Globe, Award, Truck, Users } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { GlassCard } from "@/components/ui/card";

const highlights = [
  { icon: Award, title: "17+ Years", description: "Industry experience" },
  { icon: Globe, title: "Global Sourcing", description: "45+ export countries" },
  { icon: Truck, title: "Fast Exports", description: "Worldwide logistics" },
  { icon: Users, title: "200+ Partners", description: "Trusted mills" },
];

export function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
            </FadeIn>
            <TextReveal
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-6"
            >
              Your Trusted Global Textile Partner
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-text/70 leading-relaxed mb-6">
                Atlas Textile Trading connects world-class yarn manufacturers with
                international buyers who demand consistency, quality, and reliability.
                With 17+ years of experience, we&apos;ve built a supply network spanning
                45+ countries.
              </p>
              <p className="text-text/70 leading-relaxed">
                Yarn is our flagship product — representing 80% of our trade volume —
                backed by rigorous quality control and competitive global pricing.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <GlassCard className="text-center !p-6">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{item.title}</h3>
                  <p className="text-xs text-text/50 mt-1">{item.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
