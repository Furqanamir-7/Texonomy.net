import { Link } from "react-router-dom";
import { SITE } from "@/lib/constants";
import { Logo } from "@/components/shared/Logo";
import { ContactEmails } from "@/components/shared/ContactEmails";

export function ThinksFooter() {
  return (
    <footer className="border-t border-border bg-bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <Logo variant="footer" to="/" className="mx-auto mb-4" />
        <p className="text-text-muted text-sm mb-4">Texonomy Thinks — Strategic intelligence for textile professionals</p>
        <ContactEmails className="text-sm text-text-secondary flex flex-col items-center mb-4" iconSize={14} />
        <p className="text-text-muted text-xs mb-4">
          WhatsApp:{" "}
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {SITE.whatsapp}
          </a>
        </p>
        <div className="flex justify-center gap-6 text-sm text-text-secondary">
          <Link to="/" className="hover:text-accent transition-colors">Gateway</Link>
          <Link to="/trades" className="hover:text-accent transition-colors">Trades</Link>
          <Link to="/thinks/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <p className="text-text-muted text-xs mt-6">© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}
