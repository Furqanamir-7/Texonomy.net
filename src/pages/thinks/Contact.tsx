import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Send, Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactDetails } from "@/components/shared/ContactDetails";

export default function ThinksContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Contact</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4">Let&apos;s Start the Conversation</h1>
          </ScrollReveal>
        </div>
      </section>
      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <ScrollReveal className="lg:col-span-3">
            <Card glow>
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <Send size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                </motion.div>
              ) : (
                <div className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <h3 className="font-display text-xl font-semibold mb-4">Send an Inquiry</h3>
                  {["Full Name", "Company", "Email", "Phone"].map((label) => (
                    <div key={label}>
                      <label className="block text-sm text-text-secondary mb-1">{label}</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border focus:border-accent/50 outline-none" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Inquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border focus:border-accent/50 outline-none">
                      <option>Training</option><option>Consulting</option><option>Intelligence</option><option>Research</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border focus:border-accent/50 outline-none resize-none" />
                  </div>
                  <Button size="lg" onClick={() => setSubmitted(true)}><Send size={18} /> Send Message</Button>
                </div>
              )}
            </Card>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-2" delay={0.15}>
            <Card hover={false}>
              <h3 className="font-semibold mb-4">Office</h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <ContactDetails iconSize={16} showAddress align="left" />
                <li className="flex gap-2"><Clock size={16} className="text-accent shrink-0" />Mon – Sat, 9 AM – 6 PM PKT</li>
              </ul>
            </Card>
            <Card hover={false} className="mt-4 bg-accent/5 border-accent/20">
              <Calendar size={24} className="text-accent mb-2" />
              <p className="text-sm text-text-secondary mb-3">Book a free 30-minute discovery call.</p>
              <Button href="https://calendly.com" variant="outline" className="w-full">Schedule Call</Button>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
