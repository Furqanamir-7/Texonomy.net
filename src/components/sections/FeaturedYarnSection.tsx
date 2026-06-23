"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, TextReveal, StaggerContainer, staggerItem } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/button";
import { yarnProducts } from "@/lib/data/yarn";

const featuredYarn = yarnProducts.slice(0, 4);

export function FeaturedYarnSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-[0.03]" />

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Flagship Product
              </span>
            </FadeIn>
            <TextReveal className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Premium Yarn Collection
            </TextReveal>
          </div>
          <FadeIn delay={0.2}>
            <Button variant="outline" asChild>
              <Link href="/yarn">
                View All Yarn Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {featuredYarn.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <Link href="/yarn" className="block group">
                <div className="relative rounded-[28px] bg-card p-8 card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150"
                    style={{ background: product.color }}
                  />
                  <div
                    className="w-14 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-24"
                    style={{ background: product.color }}
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.applications.slice(0, 3).map((app) => (
                      <span
                        key={app}
                        className="text-xs px-3 py-1 rounded-full bg-card-elevated text-muted"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
