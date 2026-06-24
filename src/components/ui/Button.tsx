import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg-primary font-semibold hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40",
  secondary:
    "bg-bg-elevated text-text-primary border border-border hover:border-accent/50 hover:bg-bg-secondary",
  ghost: "text-text-secondary hover:text-accent hover:bg-accent/5",
  outline:
    "border border-accent/60 text-accent hover:bg-accent/10 hover:border-accent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const motionProps = (disabled?: boolean) => ({
  whileHover: disabled ? undefined : { scale: 1.03 },
  whileTap: disabled ? undefined : { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
});

const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition-colors duration-300 cursor-pointer relative z-10",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  );

  if (to && !disabled) {
    return (
      <MotionLink to={to} className={classes} {...motionProps(disabled)}>
        {children}
      </MotionLink>
    );
  }

  if (href && !disabled) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <MotionAnchor
        href={href}
        className={classes}
        {...motionProps(disabled)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </MotionAnchor>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps(disabled)}
    >
      {children}
    </motion.button>
  );
}
