import * as React from "react";

import { cn } from "@/app/lib/cn";

export function SkillRing({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  const size = 56;
  const stroke = 4;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (clamped / 100) * c;

  return (
    <div className={cn("relative grid place-items-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="block"
        aria-hidden
      >
        <defs>
          <linearGradient id="skillRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(var(--secondary))" />
            <stop offset="55%" stopColor="rgb(var(--primary))" />
            <stop offset="100%" stopColor="rgb(var(--accent))" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="transparent"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="transparent"
          stroke="url(#skillRingGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            filter:
              "drop-shadow(0 0 10px rgba(76,215,246,0.18)) drop-shadow(0 0 14px rgba(221,183,255,0.12))",
          }}
        />
      </svg>

      <div className="absolute text-[11px] font-semibold text-foreground/80">
        {clamped}%
      </div>
    </div>
  );
}
