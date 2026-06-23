import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedYarnSection } from "@/components/sections/FeaturedYarnSection";
import { OtherProductsSection } from "@/components/sections/OtherProductsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedYarnSection />
      <OtherProductsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <GlobalPresenceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
