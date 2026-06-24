import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      <div className="w-4 h-0.5 bg-accent" />
      <span className="text-xs font-bold uppercase tracking-widest text-accent">
        {text}
      </span>
    </div>
  );
}
