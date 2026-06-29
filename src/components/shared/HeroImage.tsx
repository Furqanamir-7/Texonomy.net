import { cn } from "@/lib/utils";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: "dark" | "gradient";
}

export function HeroImage({ src, alt, className, overlay = "gradient" }: HeroImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border", className)}>
      <img src={src} alt={alt} className="hero-photo absolute inset-0 w-full h-full object-cover" loading="eager" />
      {overlay === "gradient" && <div className="hero-scrim absolute inset-0" />}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-bg-primary/50" />
      )}
    </div>
  );
}

interface HeroBackdropProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
  effect?: React.ReactNode;
}

export function HeroBackdrop({ src, alt, children, className, effect }: HeroBackdropProps) {
  return (
    <section className={cn("relative min-h-[72vh] sm:min-h-[85vh] flex items-center overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="hero-photo absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="eager"
      />
      <div className="hero-scrim absolute inset-0 pointer-events-none" />
      {effect && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {effect}
        </div>
      )}
      <div className="hero-content relative z-10 w-full">{children}</div>
    </section>
  );
}
