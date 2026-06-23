"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { faqs } from "@/lib/data/faq";

export function FAQSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              FAQ
            </span>
          </FadeIn>
          <TextReveal className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Frequently Asked Questions
          </TextReveal>
        </div>

        <FadeIn>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-[28px] bg-card px-6 card-shadow border-none"
              >
                <AccordionTrigger className="text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
