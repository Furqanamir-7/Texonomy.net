import { Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ContactEmails } from "@/components/shared/ContactEmails";
import { cn } from "@/lib/utils";

interface ContactDetailsProps {
  className?: string;
  iconSize?: number;
  showAddress?: boolean;
  align?: "left" | "center";
}

export function ContactDetails({
  className,
  iconSize = 14,
  showAddress = false,
  align = "left",
}: ContactDetailsProps) {
  const rowClass = cn(
    "flex gap-2",
    align === "center" && "justify-center",
  );

  return (
    <div className={cn("space-y-2", className)}>
      {showAddress && (
        <div className={rowClass}>
          <MapPin size={iconSize} className="text-accent shrink-0" />
          <span>{SITE.address}</span>
        </div>
      )}
      <ContactEmails iconSize={iconSize} className={align === "center" ? "items-center" : undefined} />
      <div className={rowClass}>
        <Phone size={iconSize} className="text-accent shrink-0" />
        <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">
          {SITE.phone}
        </a>
      </div>
      <div className={rowClass}>
        <Phone size={iconSize} className="text-accent shrink-0" />
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          WhatsApp: {SITE.whatsapp}
        </a>
      </div>
    </div>
  );
}
