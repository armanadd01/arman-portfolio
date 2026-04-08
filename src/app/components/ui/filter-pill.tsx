import * as React from "react";

import { cn } from "@/app/lib/cn";

type FilterPillProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function FilterPill({
  className,
  active = false,
  type = "button",
  style,
  ...props
}: FilterPillProps) {
  return (
    <button
      type={type}
      className={cn(
        "h-9 rounded-full px-5 text-xs font-semibold transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60",
        "disabled:pointer-events-none disabled:opacity-50",
        "active:translate-y-px",
        active
          ? "text-white shadow-[0_16px_40px_-28px_rgba(0,163,255,0.55)] hover:shadow-[0_18px_60px_-36px_rgba(0,163,255,0.45)] dark:text-black"
          : "bg-surface-low/80 text-foreground/70 outline outline-1 outline-[var(--card-stroke)] backdrop-blur hover:bg-surface-high hover:text-foreground",
        className,
      )}
      aria-pressed={active}
      style={
        active
          ? {
              backgroundImage:
                "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
              ...style,
            }
          : style
      }
      {...props}
    />
  );
}
