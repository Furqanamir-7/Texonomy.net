import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  size?: "sm" | "md";
};

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-lg border border-border bg-bg-elevated/80 text-text-secondary hover:text-accent hover:border-accent/40 transition-colors shrink-0",
        size === "sm" ? "h-9 w-9" : "h-10 w-10",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun size={size === "sm" ? 16 : 18} /> : <Moon size={size === "sm" ? 16 : 18} />}
    </button>
  );
}
