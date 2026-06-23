"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal, FadeIn } from "@/components/animations/TextReveal";
import { YarnSpoolScene } from "@/components/3d/dynamic";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl animate-blob-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl animate-blob-slow" />
      </div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12">
        <div>
          <FadeIn delay={2.4}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              B2B Textile Trading Since {COMPANY.founded}
            </span>
          </FadeIn>

          <TextReveal
            as="h1"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-[1.1] mb-6"
            delay={2.5}
          >
            {COMPANY.tagline}
          </TextReveal>

          <FadeIn delay={2.8}>
            <p className="text-lg text-text/70 leading-relaxed mb-8 max-w-lg">
              Supplying premium-quality yarn and textile products to manufacturers
              across the globe. Your trusted partner for consistent supply and
              competitive pricing.
            </p>
          </FadeIn>

          <FadeIn delay={3.0}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button size="lg" asChild>
                  <Link href="/yarn">
                    Explore Yarn
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn delay={3.2}>
            <div className="flex gap-8 mt-12 pt-8 border-t border-dark/5">
              {[
                { value: "45+", label: "Countries" },
                { value: "200+", label: "Partners" },
                { value: "50K+", label: "Tons/Year" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-dark">{stat.value}</div>
                  <div className="text-xs text-text/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={2.6} direction="left" className="relative h-[400px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
          <YarnSpoolScene className="w-full h-full" />
        </FadeIn>
      </div>
    </section>
  );
}
