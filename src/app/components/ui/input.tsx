import * as React from "react";

import { cn } from "@/app/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-11 w-full rounded-2xl bg-black/10 px-4 text-sm text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-colors placeholder:text-foreground/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 dark:bg-white/10",
          invalid &&
            "outline-red-500/60 shadow-[0_0_0_2px_rgba(239,68,68,0.12)] focus-visible:ring-red-500/35",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
