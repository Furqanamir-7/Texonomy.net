import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

type LogoVariant = "nav" | "hero" | "footer";
type Division = "trades" | "thinks";

interface LogoProps {
  variant?: LogoVariant;
  to?: string;
  division?: Division;
  className?: string;
}

const imgSizes: Record<LogoVariant, string> = {
  nav: "h-9 md:h-10 w-auto max-w-[min(52vw,220px)] md:max-w-[280px] object-contain object-left",
  hero: "h-16 md:h-20 w-auto max-w-[320px] object-contain",
  footer: "h-12 md:h-14 w-auto max-w-[260px] object-contain",
};

export function Logo({ variant = "nav", to = "/", division, className }: LogoProps) {
  const content = (
    <div className="flex items-center gap-2.5">
      <img
        src="/logo-header.png"
        alt={SITE.name}
        className={cn(imgSizes[variant], className)}
      />
      {division && variant === "nav" && (
        <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md text-[10px] font-bold tracking-widest uppercase bg-accent/10 text-accent border border-accent/20">
          {division}
        </span>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="shrink-0 hover:opacity-90 transition-opacity" title="Back to homepage">
        {content}
      </Link>
    );
  }

  return <div className="shrink-0">{content}</div>;
}
