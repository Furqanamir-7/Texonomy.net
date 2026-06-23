"use client";

import { Shield, DollarSign, RefreshCw, Globe, Zap, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { whyChooseUs, stats, processSteps } from "@/lib/data/company";

const icons = [Shield, DollarSign, RefreshCw, Globe, Zap, Settings];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Why Atlas
            </span>
          </FadeIn>
          <TextReveal className="text-3xl md:text-4xl font-bold text-dark mt-4">
            Why Choose Us
          </TextReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <div className="rounded-[28px] bg-white p-8 card-shadow h-full transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Stats */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-[28px] bg-white p-8 card-shadow"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-text/50 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Process Timeline */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-dark text-center mb-12">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            {processSteps.map((step, i) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                  {step.step}
                </div>
                <h4 className="font-bold text-dark mb-2">{step.title}</h4>
                <p className="text-xs text-text/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
