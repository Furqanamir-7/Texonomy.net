"use client";

import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { GlassCard } from "@/components/ui/card";
import { story, mission, vision, coreValues, timeline } from "@/lib/data/about";
import { stats } from "@/lib/data/company";
import { COMPANY } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-padding">
        <div className="container-custom">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>
          </FadeIn>
          <TextReveal className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-4 mb-8 max-w-4xl">
            {`Building Global Textile Partnerships Since ${COMPANY.founded}`}
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text/70 leading-relaxed max-w-3xl">{story}</p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <FadeIn key={stat.label}>
                <div className="rounded-[28px] bg-white p-8 card-shadow text-center">
                  <div className="text-4xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-text/50 mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <FadeIn>
            <GlassCard>
              <span className="text-primary text-sm font-semibold">Mission</span>
              <h2 className="text-2xl font-bold text-dark mt-3 mb-4">What Drives Us</h2>
              <p className="text-text/70 leading-relaxed">{mission}</p>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GlassCard>
              <span className="text-primary text-sm font-semibold">Vision</span>
              <h2 className="text-2xl font-bold text-dark mt-3 mb-4">Where We&apos;re Headed</h2>
              <p className="text-text/70 leading-relaxed">{vision}</p>
            </GlassCard>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <TextReveal className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            Core Values
          </TextReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="rounded-[28px] bg-white p-8 card-shadow h-full hover:card-shadow-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-sm mb-4">
                    {value.title[0]}
                  </div>
                  <h3 className="font-bold text-dark text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <TextReveal className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Journey
          </TextReveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.1}>
                <div className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-5 w-6 h-6 rounded-full gradient-bg border-4 border-dark" />
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
