import * as React from "react";

import { cn } from "@/app/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-32 w-full rounded-2xl bg-black/10 px-4 py-3 text-sm text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-colors placeholder:text-foreground/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 dark:bg-white/10",
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
Textarea.displayName = "Textarea";
