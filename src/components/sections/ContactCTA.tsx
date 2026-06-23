"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <div className="relative rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 gradient-bg" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <MessageSquare className="w-12 h-12 text-white/30 mx-auto mb-6" />
              <TextReveal
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Ready to Source Premium Yarn?
              </TextReveal>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Get competitive quotes, request samples, and start your partnership
                with a global textile trading leader.
              </p>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-card text-primary border-white hover:bg-card/90 hover:text-primary"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
