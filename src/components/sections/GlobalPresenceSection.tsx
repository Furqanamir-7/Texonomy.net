"use client";

import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { TradeGlobeScene } from "@/components/3d/dynamic";
import { exportCountries } from "@/lib/data/company";

export function GlobalPresenceSection() {
  return (
    <section className="section-padding bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Global Reach
              </span>
            </FadeIn>
            <TextReveal className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Exporting to 45+ Countries Worldwide
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-white/60 leading-relaxed mb-8">
                Our global logistics network ensures reliable delivery to textile
                manufacturers across every continent. From North America to Southeast
                Asia, we connect mills with buyers.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {exportCountries.slice(0, 9).map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-sm text-white/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {country.name}
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/20 text-sm text-primary font-medium">
                  +36 more countries
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" className="h-[400px] lg:h-[500px]">
            <TradeGlobeScene className="w-full h-full" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
