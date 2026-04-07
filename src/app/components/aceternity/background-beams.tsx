"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/app/lib/cn";

type BackgroundBeamsProps = {
  className?: string;
};

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-300/40 to-transparent dark:via-zinc-700/40"
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent dark:via-zinc-700/30"
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
