import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { useScrollToHash } from "@/hooks/useScrollToHash";

type CategoryPageLayoutProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function CategoryPageLayout({
  eyebrow,
  title,
  description,
  children,
  className,
}: CategoryPageLayoutProps) {
  useScrollToHash();

  return (
    <section className={cn("pt-8 pb-14 md:pt-10 md:pb-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal>
          <span className="text-accent text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-3">{title}</h1>
          {description && (
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              {description}
            </p>
          )}
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
