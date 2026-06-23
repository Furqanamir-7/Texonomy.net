"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { testimonials, clientLogos } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
          </FadeIn>
          <TextReveal className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Trusted by Industry Leaders
          </TextReveal>
        </div>

        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="rounded-[28px] bg-card p-8 md:p-12 card-shadow relative"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].logo}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[current].author}
                    </div>
                    <div className="text-sm text-muted">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-card card-shadow flex items-center justify-center hover:bg-primary/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-primary" : "bg-dark/10"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-card card-shadow flex items-center justify-center hover:bg-primary/5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Marquee logos */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <span
                key={i}
                className="mx-8 text-lg font-semibold text-foreground/15 uppercase tracking-wider"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
