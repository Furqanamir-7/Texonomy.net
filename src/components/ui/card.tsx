import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  dark?: boolean;
}

export function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] p-6 md:p-8 transition-all duration-500 glass card-shadow",
        hover && "hover:card-shadow-hover hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  color?: string;
  items?: string[];
  className?: string;
  featured?: boolean;
}

export function ProductCard({
  title,
  description,
  color = "#F36A3D",
  items,
  className,
  featured = false,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-[28px] bg-card border border-white/5 p-6 md:p-8 card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-2 overflow-hidden",
        featured && "md:col-span-2",
        className
      )}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-150"
        style={{ background: color }}
      />
      <div
        className="w-12 h-1 rounded-full mb-5 transition-all duration-300 group-hover:w-20"
        style={{ background: color }}
      />
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed mb-4">{description}</p>
      {items && (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs font-medium px-3 py-1 rounded-full bg-card-elevated text-muted border border-white/5"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] bg-card border border-white/5 p-6 card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 group",
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
