import { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { YarnScene3D } from "@/components/3d/YarnScene3D";
import { yarnProducts } from "@/data/trades/products";
import { useDevice } from "@/hooks/useDevice";

export default function TradesYarn() {
  const [tab, setTab] = useState(yarnProducts[0].id);
  const { isMobile, prefersReducedMotion } = useDevice();
  const active = yarnProducts.find((p) => p.id === tab)!;

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <SectionLabel text="Flagship Product" />
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Every Count. Every Composition. Sourced Right.</h1>
            <p className="text-text-secondary text-lg mb-6">From Ne 6 cotton to compact polyester blends — we hold stock and source to spec for mills worldwide.</p>
            <Button to="/trades/rfq" size="lg">Request a Quote →</Button>
          </ScrollReveal>
          <div className="h-72 rounded-2xl border border-border overflow-hidden bg-bg-elevated">
            {!prefersReducedMotion && (
              <Suspense fallback={null}>
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={isMobile ? 1 : 2} gl={{ alpha: true }}>
                  <ambientLight intensity={0.4} />
                  <pointLight position={[5, 5, 5]} color="#00b4d8" />
                  <YarnScene3D />
                </Canvas>
              </Suspense>
            )}
          </div>
        </div>
      </section>
      <Section>
        <div className="flex flex-wrap gap-2 mb-10">
          {yarnProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => setTab(p.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === p.id ? "bg-accent text-bg-primary" : "bg-bg-elevated text-text-secondary hover:text-text-primary border border-border"
              }`}
            >
              {p.name.replace(" Yarn", "")}
            </button>
          ))}
        </div>
        <Card glow>
          <h2 className="font-display text-2xl font-bold mb-2">{active.name}</h2>
          <p className="text-accent text-sm mb-4">{active.tagline}</p>
          <p className="text-text-secondary mb-6">{active.description}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Counts", value: active.counts },
              { label: "Composition", value: active.composition },
              { label: "Packaging", value: active.packaging },
              { label: "MOQ", value: active.moq },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-lg bg-bg-primary border border-border">
                <div className="text-text-muted text-xs mb-1">{s.label}</div>
                <div className="text-sm font-medium">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {active.applications.map((a) => (
              <span key={a} className="px-3 py-1 rounded-full text-xs bg-accent/10 text-accent">{a}</span>
            ))}
          </div>
        </Card>
      </Section>
      <Section className="bg-bg-secondary">
        <SectionHeader title="Sourcing Process" />
        <div className="grid md:grid-cols-6 gap-4">
          {["Requirement", "Sourcing & Lab Test", "Quality Check", "Packaging", "Export Docs", "Delivery"].map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.08}>
              <div className="text-center p-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center mx-auto mb-2">{i + 1}</div>
                <p className="text-xs text-text-secondary">{s}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
