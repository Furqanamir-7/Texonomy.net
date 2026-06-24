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

const baseImgSizes: Record<LogoVariant, string> = {
  nav: "h-9 w-auto object-contain object-left scale-[3] origin-left",
  hero: "h-16 md:h-20 w-auto max-w-[320px] object-contain scale-[3] origin-left",
  footer: "h-12 w-auto object-contain scale-[3] origin-center",
};

const wrapperSizes: Record<LogoVariant, string> = {
  nav: "h-14 overflow-hidden flex items-center max-w-[min(78vw,360px)]",
  hero: "overflow-hidden flex items-center max-w-sm",
  footer: "h-14 overflow-hidden flex items-center justify-center max-w-sm",
};

export function Logo({ variant = "nav", to = "/", division, className }: LogoProps) {
  const content = (
    <div className="flex items-center gap-2.5 h-full">
      <div className={cn(wrapperSizes[variant])}>
        <img
          src="/logo-header.png"
          alt={SITE.name}
          className={cn(baseImgSizes[variant], className)}
        />
      </div>
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
