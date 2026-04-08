"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/app/components/motion/reveal";
import { ScrollArea, ScrollAreaCorner, ScrollAreaViewport, ScrollBar } from "@/app/components/ui/scroll-area";

const items = [
  {
    role: "Frontend Engineer",
    company: "Company",
    time: "2025 — Present",
    points: [
      "Improved Core Web Vitals and shipped accessible UI primitives.",
      "Built scalable component architecture and design system patterns.",
    ],
  },
  {
    role: "Freelance",
    company: "Self-employed",
    time: "2023 — 2025",
    points: [
      "Delivered landing pages and dashboards with strong conversion focus.",
      "Collaborated closely with designers; rapid iteration cycles.",
    ],
  },
] as const;

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Experience
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Timeline-style layout with smooth scrolling using Radix Scroll Area.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-950">
          <ScrollArea className="h-[420px]">
            <ScrollAreaViewport className="p-4">
              <div className="space-y-4">
                {items.map((it) => (
                  <motion.article
                    key={it.time}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                          {it.role}
                        </h2>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          {it.company}
                        </p>
                      </div>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {it.time}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {it.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </div>
            </ScrollAreaViewport>
            <ScrollBar orientation="vertical" />
            <ScrollAreaCorner />
          </ScrollArea>
        </div>
      </Reveal>
    </div>
  );
}
