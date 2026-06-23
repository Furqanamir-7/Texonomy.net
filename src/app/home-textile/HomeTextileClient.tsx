"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { homeTextileProducts } from "@/lib/data/products";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomeTextilePage() {
  return (
    <>
      <section className="pt-32 pb-16 section-padding relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-custom relative">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Home Textile
            </span>
          </FadeIn>
          <TextReveal className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Luxury Home Textiles
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted max-w-2xl">
              Premium bedsheets, towels, curtains, and kitchen textiles crafted
              for hospitality, retail, and export markets worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeTextileProducts.map((product, i) => (
              <motion.div key={product.name} variants={staggerItem}>
                <div className="group rounded-[28px] bg-card overflow-hidden card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2">
                  <div
                    className="h-48 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center"
                    style={{ opacity: 0.5 + i * 0.1 }}
                  >
                    <span className="text-6xl font-bold text-primary/20">
                      {product.name[0]}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
