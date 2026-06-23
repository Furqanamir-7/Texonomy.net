import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Globe, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { navLinks } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="bg-dark text-white/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white text-sm font-bold">AT</span>
              </div>
              <span className="font-bold text-white text-lg">
                Atlas<span className="text-primary">Textile</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              Premium yarn supply and global textile trading for manufacturers
              worldwide. Trusted since {COMPANY.founded}.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {["Yarn", "Fabrics", "Home Textile", "Garments"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/export-markets"
                  className="text-sm text-white/50 hover:text-primary transition-colors"
                >
                  Export Markets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-primary transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
