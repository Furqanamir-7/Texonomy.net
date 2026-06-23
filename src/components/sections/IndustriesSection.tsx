"use client";

import { Shirt, Home, Hotel, Factory, Store, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { industries } from "@/lib/data/company";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shirt, Home, Hotel, Factory, Store, Globe,
};

export function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Industries
            </span>
          </FadeIn>
          <TextReveal className="text-3xl md:text-4xl font-bold text-dark mt-4">
            Industries We Serve
          </TextReveal>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] || Globe;
            return (
              <motion.div key={industry.name} variants={staggerItem}>
                <div className="group rounded-[28px] bg-white p-6 card-shadow text-center transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:gradient-bg transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-dark">{industry.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
