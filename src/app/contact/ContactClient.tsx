"use client";

import { useState } from "react";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "yarn",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-24 min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
        {/* Left - Info */}
        <div className="gradient-bg text-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative">
            <FadeIn>
              <span className="text-white/60 text-sm font-semibold uppercase tracking-wider">
                Contact
              </span>
            </FadeIn>
            <TextReveal
              as="h1"
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
            >
              Let&apos;s Start a Partnership
            </TextReveal>
            <FadeIn delay={0.2}>
              <p className="text-white/70 leading-relaxed mb-12 max-w-md">
                Whether you need yarn samples, bulk quotes, or custom specifications —
                our team responds within 24 hours.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: COMPANY.email },
                { icon: Phone, label: "Phone", value: COMPANY.phone },
                { icon: MapPin, label: "Office", value: COMPANY.address },
                { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM EST" },
              ].map((item) => (
                <FadeIn key={item.label} delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{item.label}</div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-background">
          <FadeIn>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-dark mb-3">Inquiry Received!</h2>
                <p className="text-text/60">
                  Thank you for your interest. Our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                <h2 className="text-2xl font-bold text-dark mb-2">Business Inquiry</h2>
                <p className="text-sm text-text/50 mb-8">
                  Fill out the form and we&apos;ll get back to you promptly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark mb-1.5 block">Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark mb-1.5 block">Company *</label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-dark mb-1.5 block">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-dark mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark mb-1.5 block">Product Interest</label>
                  <select
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                  >
                    <option value="yarn">Yarn</option>
                    <option value="fabrics">Fabrics</option>
                    <option value="home-textile">Home Textile</option>
                    <option value="garments">Garments</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark mb-1.5 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-dark/5 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm resize-none"
                    placeholder="Tell us about your requirements, quantities, and specifications..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </FadeIn>

          {/* Map placeholder */}
          <FadeIn delay={0.3}>
            <div className="mt-8 rounded-[28px] bg-dark/5 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary/30 mx-auto mb-2" />
                <p className="text-sm text-text/40">Map — {COMPANY.address}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
