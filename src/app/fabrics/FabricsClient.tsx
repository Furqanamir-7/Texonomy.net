"use client";

import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { fabricProducts } from "@/lib/data/products";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function FabricsPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-padding">
        <div className="container-custom">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Fabrics
            </span>
          </FadeIn>
          <TextReveal className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Premium Fabric Collection
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text/70 max-w-2xl">
              Knitted, woven, denim, greige, and dyed fabrics sourced from
              certified mills for apparel, home, and industrial applications.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricProducts.map((product) => (
              <motion.div key={product.name} variants={staggerItem}>
                <div className="group rounded-[28px] bg-white p-8 card-shadow h-full transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 overflow-hidden">
                  <div className="w-12 h-1 rounded-full gradient-bg mb-6 group-hover:w-20 transition-all" />
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text/70 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="text-xs px-3 py-1 rounded-full bg-background text-text/60"
                      >
                        {app}
                      </span>
                    ))}
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
