"use client";

import { useState } from "react";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YarnSpoolScene, ThreadStrandsScene } from "@/components/3d/dynamic";
import { yarnProducts, yarnComparisonData, yarnComparisonFields } from "@/lib/data/yarn";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function YarnPage() {
  const [activeProduct, setActiveProduct] = useState(yarnProducts[0].id);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ThreadStrandsScene className="w-full h-full opacity-40" />
        </div>
        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Flagship Product
              </span>
            </FadeIn>
            <TextReveal className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mt-4 mb-6">
              Premium Yarn Supply
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-lg text-text/70 leading-relaxed mb-8">
                From cotton to polyester, compact to melange — we supply every yarn
                type your manufacturing needs, with rigorous quality control and
                competitive global pricing.
              </p>
              <Button asChild>
                <Link href="/contact">Request Samples</Link>
              </Button>
            </FadeIn>
          </div>
          <FadeIn direction="left" className="h-[400px] lg:h-[500px]">
            <YarnSpoolScene className="w-full h-full" />
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <TextReveal className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Yarn Categories
          </TextReveal>

          <Tabs value={activeProduct} onValueChange={setActiveProduct}>
            <TabsList className="flex-wrap h-auto gap-2 mb-8">
              {yarnProducts.map((p) => (
                <TabsTrigger key={p.id} value={p.id}>
                  {p.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {yarnProducts.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <FadeIn>
                  <div className="rounded-[28px] bg-white p-8 md:p-12 card-shadow">
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div>
                        <div
                          className="w-16 h-1 rounded-full mb-6"
                          style={{ background: product.color }}
                        />
                        <h3 className="text-3xl font-bold text-dark mb-4">{product.name}</h3>
                        <p className="text-text/70 leading-relaxed mb-8">{product.description}</p>

                        <h4 className="font-semibold text-dark mb-3">Applications</h4>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {product.applications.map((app) => (
                            <span
                              key={app}
                              className="px-3 py-1 rounded-full bg-background text-sm text-text/70"
                            >
                              {app}
                            </span>
                          ))}
                        </div>

                        <h4 className="font-semibold text-dark mb-3">Available Counts</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.counts.map((count) => (
                            <span
                              key={count}
                              className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary font-medium"
                            >
                              {count}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="rounded-2xl bg-background p-6">
                          <h4 className="font-semibold text-dark mb-2">Composition</h4>
                          <p className="text-sm text-text/70">{product.composition}</p>
                        </div>
                        <div className="rounded-2xl bg-background p-6">
                          <h4 className="font-semibold text-dark mb-2">Packaging</h4>
                          <p className="text-sm text-text/70">{product.packaging}</p>
                        </div>
                        <div className="rounded-2xl bg-background p-6">
                          <h4 className="font-semibold text-dark mb-3">Specifications</h4>
                          <div className="space-y-2">
                            {Object.entries(product.specifications).map(([key, val]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-text/50">{key}</span>
                                <span className="text-dark font-medium">{val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <TextReveal className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Yarn Comparison
          </TextReveal>
          <FadeIn>
            <div className="overflow-x-auto rounded-[28px] card-shadow">
              <table className="w-full bg-white">
                <thead>
                  <tr className="border-b border-dark/5">
                    <th className="text-left p-4 md:p-6 font-semibold text-dark">Product</th>
                    {yarnComparisonFields.map((field) => (
                      <th key={field} className="text-left p-4 md:p-6 font-semibold text-dark text-sm">
                        {field}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {yarnComparisonData.map((row, i) => (
                    <tr
                      key={row.product}
                      className={`border-b border-dark/5 transition-colors hover:bg-primary/5 ${
                        i % 2 === 0 ? "" : "bg-background/50"
                      }`}
                    >
                      <td className="p-4 md:p-6 font-medium text-dark">{row.product}</td>
                      {yarnComparisonFields.map((field) => (
                        <td key={field} className="p-4 md:p-6 text-sm text-text/70">
                          {row[field]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
