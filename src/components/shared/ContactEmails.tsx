import { Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactEmailsProps {
  className?: string;
  iconSize?: number;
}

export function ContactEmails({ className, iconSize = 14 }: ContactEmailsProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {SITE.emails.map((email) => (
        <a
          key={email}
          href={`mailto:${email}`}
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <Mail size={iconSize} className="text-accent shrink-0" />
          {email}
        </a>
      ))}
    </div>
  );
}
