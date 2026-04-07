"use client";

import * as React from "react";

import { cn } from "@/app/lib/cn";

type SpotlightProps = {
  className?: string;
};

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),rgba(0,0,0,0))] blur-2xl" />
      <div className="absolute -bottom-48 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.22),rgba(0,0,0,0))] blur-2xl" />
    </div>
  );
}
