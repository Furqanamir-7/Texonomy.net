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

const logoSrc: Record<LogoVariant, string> = {
  nav: "/logo-web.png",
  hero: "/logo-header.png",
  footer: "/logo-web.png",
};

const baseImgSizes: Record<LogoVariant, string> = {
  nav: "h-8 w-8 object-contain object-left scale-[2.25] origin-left",
  hero: "h-16 md:h-20 w-auto max-w-[320px] object-contain scale-[3] origin-left",
  footer: "h-10 w-10 object-contain scale-[3] origin-center",
};

const wrapperSizes: Record<LogoVariant, string> = {
  nav: "h-14 w-16 overflow-hidden flex items-center shrink-0",
  hero: "overflow-hidden flex items-center max-w-sm",
  footer: "h-14 w-28 overflow-hidden flex items-center justify-center shrink-0",
};

export function Logo({ variant = "nav", to = "/", division, className }: LogoProps) {
  const content = (
    <div className="flex items-center gap-2 h-full">
      <div className={cn(wrapperSizes[variant])}>
        <img
          src={logoSrc[variant]}
          alt={SITE.name}
          className={cn(baseImgSizes[variant], className)}
        />
      </div>
      {variant === "nav" && (
        <span className="font-display font-bold text-base sm:text-lg tracking-[0.12em] text-text-primary whitespace-nowrap">
          TE<span className="text-accent">X</span>ONOMY
        </span>
      )}
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
