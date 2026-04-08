import * as React from "react";

import { cn } from "@/app/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "low" | "high" | "glass";
};

export function Card({ className, variant = "low", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card-luminal rounded-2xl p-6 transition-shadow duration-200",
        variant === "low" && "bg-surface-low",
        variant === "high" && "bg-surface-high",
        variant === "glass" && "glass",
        className,
      )}
      {...props}
    />
  );
}
