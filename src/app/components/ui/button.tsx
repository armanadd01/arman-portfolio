import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/app/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(
          "inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 focus-visible:ring-offset-0",
          "disabled:pointer-events-none disabled:opacity-50",
          "active:translate-y-px",
          variant === "primary" &&
            "signature-gradient text-white dark:text-black hover:shadow-[0_0_0_2px_rgba(76,215,246,0.20),0_18px_60px_-46px_var(--card-glow)] active:shadow-[0_0_0_2px_rgba(76,215,246,0.12)]",
          variant === "secondary" &&
            "glass text-[var(--foreground)] outline outline-1 outline-[var(--card-stroke)] hover:outline-[rgba(76,215,246,0.25)] hover:shadow-[0_18px_60px_-46px_var(--card-glow)] active:shadow-none",
          variant === "ghost" &&
            "bg-transparent text-[var(--primary)] hover:bg-[var(--surface-container-low)] active:bg-[var(--surface-container-high)]",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
