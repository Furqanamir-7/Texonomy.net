import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { YarnScene3D } from "@/components/3d/YarnScene3D";
import {
  getCategoryByPath,
  getCategoryGroups,
  YARN_BASE_FIBRES,
  YARN_FIBRE_TAB_GROUPS,
} from "@/data/trades/trades.config";
import { useDevice } from "@/hooks/useDevice";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const category = getCategoryByPath("/trades/yarn")!;
const yarnGroups = getCategoryGroups(category).filter((g) => g.label === "Technologies");

function TechnologyCard({ label, description, slug }: { label: string; description: string; slug: string }) {
  return (
    <div id={slug} className="scroll-mt-24 h-full">
      <Card className="h-full border-t-2 border-t-accent/60 bg-bg-elevated">
        <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2">Spinning</p>
        <h3 className="font-display text-base font-semibold mb-2">{label}</h3>
        <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}

function FibreCard({ label, description, slug }: { label: string; description: string; slug: string }) {
  return (
    <div id={slug} className="scroll-mt-24 h-full">
      <Card className="h-full">
        <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase mb-2">Fibre</p>
        <h3 className="font-semibold text-sm mb-1.5">{label}</h3>
        <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
      </Card>
    </div>
  );
}

function FibreGroupBox({
  label,
  slug,
  items,
}: {
  label: string;
  slug: string;
  items: { label: string; slug: string; description: string }[];
}) {
  return (
    <div id={slug} className="scroll-mt-24 h-full flex flex-col">
      <Card className="h-full flex flex-col">
        <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-3">{label}</p>
        <ul className="space-y-4 flex-1">
          {items.map((item) => (
            <li key={item.slug} id={item.slug} className="scroll-mt-24">
              <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
          {yarnGroups.map((group) => (
            <div key={group.label}>
              <h2 className="font-display text-xl font-semibold mb-1">{group.label}</h2>
              <p className="text-text-muted text-sm mb-5">
                How the yarn is spun — open end, ring spun, or vortex.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {group.items.map((sub, i) => (
                  <ScrollReveal key={sub.slug} delay={i * 0.04}>
                    <TechnologyCard label={sub.label} description={sub.description} slug={sub.slug} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="font-display text-xl font-semibold mb-1">Fibres</h2>
            <p className="text-text-muted text-sm mb-5">
              What the yarn is made from — staple fibres, specialty counts, and performance synthetics.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {YARN_BASE_FIBRES.map((sub, i) => (
                <ScrollReveal key={sub.slug} delay={i * 0.04}>
                  <FibreCard label={sub.label} description={sub.description} slug={sub.slug} />
                </ScrollReveal>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 items-stretch">
              {YARN_FIBRE_TAB_GROUPS.map((tab, i) => (
                <ScrollReveal key={tab.slug} delay={i * 0.06}>
                  <FibreGroupBox label={tab.label} slug={tab.slug} items={tab.items} />
                </ScrollReveal>
              ))}
            </div>
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
