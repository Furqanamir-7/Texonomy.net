import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  pattern?: boolean;
  containerClass?: string;
}

export function Section({
  children,
  className,
  id,
  pattern = false,
  containerClass,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-20 md:py-28 lg:py-32",
        pattern && "woven-pattern",
        className,
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn(align === "center" && "text-center mx-auto max-w-3xl mb-10 sm:mb-16", className)}>
      {eyebrow && (
        <span className="inline-block text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 sm:mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </ScrollReveal>
  );
}
