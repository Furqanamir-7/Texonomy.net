"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/TextReveal";
import { HeroGlobeScene } from "@/components/3d/dynamic";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
      {/* Orange ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 gradient-hero" />
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      {/* 3D Globe — full bleed background */}
      <div className="absolute inset-0 z-0">
        <HeroGlobeScene className="w-full h-full" />
      </div>

      {/* Content overlay */}
      <div className="container-custom relative z-10 pb-8 pt-28 md:pt-32 md:pb-16">
        {/* Massive headline — ECLIPSE-inspired */}
        <FadeIn delay={0.3}>
          <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 md:mb-6">
            Global B2B Textile Trading · Est. {COMPANY.founded}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black text-foreground leading-[0.95] tracking-tight mb-4 md:mb-6 max-w-5xl">
            ATLAS
            <span className="block gradient-text">TEXTILE</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-base md:text-xl text-muted leading-relaxed mb-8 max-w-xl">
            Premium yarn supply worldwide. Connecting manufacturers across{" "}
            <span className="text-foreground font-medium">45+ countries</span> with
            consistent quality and competitive pricing.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10 md:mb-14">
            <Button size="lg" asChild>
              <Link href="/yarn">
                Explore Yarn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.7}>
          <div className="flex flex-wrap gap-6 md:gap-12 pt-6 md:pt-8 border-t border-white/10">
            {[
              { value: "45+", label: "Export Countries" },
              { value: "200+", label: "Mill Partners" },
              { value: "50K+", label: "Tons / Year" },
              { value: "17+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </FadeIn>
    </section>
  );
}
