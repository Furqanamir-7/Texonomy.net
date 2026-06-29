import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { YarnScene3D } from "@/components/3d/YarnScene3D";
import { getCategoryByPath } from "@/data/trades/trades.config";
import { useDevice } from "@/hooks/useDevice";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const category = getCategoryByPath("/trades/yarn")!;

export default function TradesYarn() {
  const { isMobile, prefersReducedMotion } = useDevice();
  useScrollToHash();

  return (
    <>
      <section className="relative pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <ScrollReveal>
            <SectionLabel text="Flagship Product" />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Every Count. Every Composition. Sourced Right.
            </h1>
            <p className="text-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              From Ne 6 cotton to compact polyester blends — we hold stock and source to spec for mills worldwide.
            </p>
            <Button to="/trades/rfq" size="lg">Request a Quote →</Button>
          </ScrollReveal>
          <div className="h-56 md:h-64 lg:h-72 rounded-2xl border border-border overflow-hidden bg-bg-elevated">
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

      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold mb-4">Yarn types</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {category.subcategories.map((sub, i) => (
              <ScrollReveal key={sub.slug} delay={i * 0.04}>
                <div id={sub.slug} className="scroll-mt-24 h-full">
                  <Card className="h-full">
                    <h3 className="font-semibold text-sm mb-1.5">{sub.label}</h3>
                    <p className="text-text-secondary text-xs leading-relaxed">{sub.description}</p>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16 bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10">
          <h2 className="font-display text-xl font-semibold mb-6 text-center">Sourcing Process</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {["Requirement", "Sourcing & Lab Test", "Quality Check", "Packaging", "Export Docs", "Delivery"].map(
              (s, i) => (
                <ScrollReveal key={s} delay={i * 0.05}>
                  <div className="text-center p-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center mx-auto mb-2">
                      {i + 1}
                    </div>
                    <p className="text-xs text-text-secondary">{s}</p>
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
