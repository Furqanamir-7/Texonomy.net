"use client";

import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { TradeGlobeScene } from "@/components/3d/dynamic";
import { exportCountries, certifications, shippingSteps } from "@/lib/data/company";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Shield, Package, Truck } from "lucide-react";

export default function ExportMarketsPage() {
  return (
    <>
      <section className="pt-32 pb-16 section-padding bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Export Markets
              </span>
            </FadeIn>
            <TextReveal className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Global Export Network
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-white/60 leading-relaxed">
                We export premium yarn and textile products to 45+ countries with
                end-to-end logistics, documentation, and quality assurance.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="left" className="h-[400px]">
            <TradeGlobeScene className="w-full h-full" />
          </FadeIn>
        </div>
      </section>

      {/* Countries */}
      <section className="section-padding">
        <div className="container-custom">
          <TextReveal className="text-3xl font-bold text-dark mb-12">
            Export Destinations
          </TextReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {exportCountries.map((country, i) => (
              <FadeIn key={country.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-white p-4 card-shadow flex items-center gap-3 hover:card-shadow-hover hover:-translate-y-1 transition-all">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-dark">{country.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <TextReveal className="text-3xl font-bold text-dark mb-12">
            Shipping Process
          </TextReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {shippingSteps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="rounded-[28px] bg-white p-6 card-shadow text-center h-full">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-dark text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-primary font-medium">{step.duration}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Packaging */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-3 gap-8">
          <FadeIn>
            <div className="rounded-[28px] bg-white p-8 card-shadow h-full">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-text/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-[28px] bg-white p-8 card-shadow h-full">
              <Package className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-4">Packaging</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                Export-grade palletized cartons, vacuum-sealed cones, moisture-barrier
                wrapping, and custom labeling. All packaging meets international
                shipping standards.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-[28px] bg-white p-8 card-shadow h-full">
              <Truck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-dark mb-4">Logistics</h3>
              <p className="text-sm text-text/70 leading-relaxed">
                FOB, CIF, and DDP terms available. Partnership with major shipping
                lines ensures competitive freight rates and reliable transit times
                to all major ports worldwide.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
