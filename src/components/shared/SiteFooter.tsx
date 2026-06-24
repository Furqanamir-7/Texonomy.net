import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";
import { ContactEmails } from "@/components/shared/ContactEmails";
import { cn } from "@/lib/utils";

type Division = "gateway" | "thinks" | "trades";

interface SiteFooterProps {
  division?: Division;
  className?: string;
}

export function SiteFooter({ division = "gateway", className }: SiteFooterProps) {
  if (division === "gateway") {
    return (
      <footer className={cn("py-12 px-4 border-t border-border bg-bg-primary", className)}>
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Logo variant="footer" to="/" className="mb-4" />
              <p className="text-text-muted text-sm leading-relaxed">{SITE.description}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Divisions</h4>
              <div className="flex flex-col gap-2 text-sm text-text-secondary">
                <Link to="/trades" className="hover:text-accent transition-colors">Texonomy Trades</Link>
                <Link to="/thinks" className="hover:text-accent transition-colors">Texonomy Thinks</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Contact</h4>
              <ContactBlock />
            </div>
          </div>
          <FooterBottom />
        </div>
      </footer>
    );
  }

  const tagline =
    division === "thinks"
      ? "Texonomy Thinks — Strategic intelligence for textile professionals"
      : "Texonomy Trades — B2B textile sourcing & supply";

  const contactPath = division === "thinks" ? "/thinks/contact" : "/trades/contact";
  const otherDivision = division === "thinks" ? "/trades" : "/thinks";
  const otherLabel = division === "thinks" ? "Trades" : "Thinks";

  return (
    <footer className={cn("border-t border-border bg-bg-secondary py-12", className)}>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <Logo variant="footer" to="/" className="mx-auto mb-4" />
        <p className="text-text-muted text-sm mb-4">{tagline}</p>
        <ContactBlock className="text-sm text-text-secondary flex flex-col items-center mb-4" />
        <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
          <Link to="/" className="hover:text-accent transition-colors">Gateway</Link>
          <Link to={otherDivision} className="hover:text-accent transition-colors">{otherLabel}</Link>
          <Link to={contactPath} className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <p className="text-text-muted text-xs mt-6">© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}

function ContactBlock({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <ContactEmails iconSize={14} />
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 hover:text-accent transition-colors text-sm"
      >
        <Phone size={14} className="text-accent shrink-0" />
        WhatsApp: {SITE.whatsapp}
      </a>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-xs">
      <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      <p>{SITE.motto}</p>
    </div>
  );
}
