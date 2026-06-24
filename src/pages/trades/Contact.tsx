import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactEmails } from "@/components/shared/ContactEmails";

export default function TradesContact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid lg:grid-cols-5 min-h-[80vh]">
      <div className="lg:col-span-2 bg-bg-secondary p-10 flex flex-col justify-center">
        <h1 className="font-display text-3xl font-bold mb-6">Get in Touch</h1>
        <ul className="space-y-4 text-text-secondary text-sm">
          <li className="flex gap-2"><MapPin size={16} className="text-accent shrink-0" />{SITE.address}</li>
          <li><ContactEmails iconSize={16} /></li>
          <li className="flex gap-2">
            <Phone size={16} className="text-accent shrink-0" />
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              WhatsApp: {SITE.whatsapp}
            </a>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-3 p-10">
        <Section containerClass="max-w-lg">
          <Card glow>
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <Send size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {["Name", "Company", "Country", "Email"].map((l) => (
                  <div key={l}><label className="block text-sm text-text-secondary mb-1">{l}</label><input className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none focus:border-accent/50" /></div>
                ))}
                <div>
                  <label className="block text-sm text-text-secondary mb-1">Product Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none">
                    <option>Yarn</option><option>Fabrics</option><option>Home Textile</option><option>Garments</option>
                  </select>
                </div>
                <div><label className="block text-sm text-text-secondary mb-1">Message</label><textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border outline-none resize-none" /></div>
                <Button size="lg" className="w-full" onClick={() => setSubmitted(true)}><Send size={18} /> Send Message</Button>
              </div>
            )}
          </Card>
        </Section>
      </div>
    </div>
  );
}
