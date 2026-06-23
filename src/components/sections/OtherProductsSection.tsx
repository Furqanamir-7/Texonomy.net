"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { otherProducts } from "@/lib/data/products";

export function OtherProductsSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-custom">
        <FadeIn>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Beyond Yarn
          </span>
        </FadeIn>
        <TextReveal className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-12">
          Complete Textile Solutions
        </TextReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {otherProducts.map((product) => (
            <motion.div key={product.title} variants={staggerItem}>
              <Link href={product.href} className="block group">
                <div
                  className={`relative rounded-[28px] bg-card p-8 card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 hover:scale-[1.02] overflow-hidden h-full`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50`}
                  />
                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-card-elevated/80 text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
