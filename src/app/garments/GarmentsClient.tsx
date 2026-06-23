"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { garmentProducts } from "@/lib/data/products";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function GarmentsPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-padding">
        <div className="container-custom">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Garments
            </span>
          </FadeIn>
          <TextReveal className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Apparel & Private Label
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted max-w-2xl">
              From basic tees to private label manufacturing — complete garment
              solutions for international brands and retailers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {garmentProducts.map((product) => (
              <motion.div key={product.name} variants={staggerItem}>
                <div className="group rounded-[28px] bg-card p-8 card-shadow h-full transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:gradient-bg transition-all duration-300">
                    <span className="text-xl font-bold text-primary group-hover:text-white transition-colors">
                      {product.name[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {product.description}
                  </p>
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
