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
          "inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "signature-gradient text-black hover:shadow-[0_0_0_2px_rgba(76,215,246,0.2)]",
          variant === "secondary" &&
            "glass glow-cyan text-[var(--foreground)] outline outline-1 outline-[var(--outline-variant)] hover:outline-[rgba(76,215,246,0.25)]",
          variant === "ghost" &&
            "bg-transparent text-[var(--primary)] hover:bg-[var(--surface-container-low)]",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
