"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/app/lib/cn";

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
  value?: number;
};

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => {
  const clamped = Math.min(100, Math.max(0, value));
  const [animatedValue, setAnimatedValue] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      ?.matches;
    if (prefersReduced) {
      setAnimatedValue(clamped);
      return;
    }

    setAnimatedValue(0);
    const id = window.requestAnimationFrame(() => setAnimatedValue(clamped));
    return () => window.cancelAnimationFrame(id);
  }, [clamped]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-surface-variant outline outline-1 outline-[var(--card-stroke)]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 transition-transform duration-700 ease-out will-change-transform",
        )}
        aria-hidden
        style={{
          transform: `translateX(-${100 - animatedValue}%)`,
          backgroundImage:
            "linear-gradient(90deg, rgb(var(--progress-from)), rgb(var(--progress-mid)), rgb(var(--progress-to)))",
          filter:
            "drop-shadow(0 0 12px rgb(var(--progress-from) / 0.22)) drop-shadow(0 0 18px rgb(var(--progress-to) / 0.14))",
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = "Progress";
