import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function TradesRfq() {
  const [submitted, setSubmitted] = useState(false);
  const [productType, setProductType] = useState("Yarn");

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Request for Quote</span>
            <h1 className="font-display text-4xl font-bold mt-4">Tell Us What You Need</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section containerClass="max-w-xl mx-auto">
        <Card glow>
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <Send size={32} className="text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold">RFQ Submitted!</h3>
              <p className="text-text-secondary mt-2">We&apos;ll respond within 24 hours.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {["Company Name", "Contact Name", "Email", "Phone", "Country", "Count / Specification", "Quantity (kg)", "Target Price (optional)"].map((label) => (
                <div key={label}>
                  <label className="block text-sm text-text-secondary mb-1">{label}</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border focus:border-accent/50 outline-none" />
                </div>
              ))}
              <div>
                <label className="block text-sm text-text-secondary mb-1">Product Type</label>
                <select value={productType} onChange={(e) => setProductType(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none">
                  <option>Yarn</option><option>Fabrics</option><option>Home Textile</option><option>Garments</option>
                </select>
              </div>
              {productType === "Yarn" && (
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Yarn Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none">
                    <option>Cotton</option><option>Polyester</option><option>Compact</option><option>Open-End</option><option>Blended</option><option>Melange</option>
                  </select>
                </div>
              )}
              <div>
                <label className="block text-sm text-text-secondary mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none resize-none" />
              </div>
              <Button size="lg" className="w-full" onClick={() => setSubmitted(true)}><Send size={18} /> Submit RFQ</Button>
            </div>
          )}
        </Card>
      </Section>
    </>
  );
}
