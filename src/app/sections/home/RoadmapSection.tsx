import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";
import { Card } from "@/app/components/ui/card";

const timeline = [
  {
    range: "2021 — PRESENT",
    title: "Senior Frontend Engineer",
    meta: "TechGiant Solutions • San Francisco",
    desc:
      "Leading the UI modernization of a legacy platform serving 5M+ monthly active users. Implemented a custom design system that reduced development time by 40%.",
  },
  {
    range: "2018 — 2021",
    title: "Full Stack Developer",
    meta: "Innovate Startup • Remote",
    desc:
      "Developed core features for a SaaS productivity tool. Orchestrated the migration from monolith to serverless architecture using AWS Lambda.",
  },
  {
    range: "2016 — 2018",
    title: "UI Developer",
    meta: "Creative Agency X • New York",
    desc:
      "Crafted award-winning marketing sites and interactive prototypes for global brands. Specialized in SVG animations and performance optimization.",
  },
] as const;

export function RoadmapSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary/60" />
              <p className="text-label-md text-primary/70">EXPERIENCE</p>
            </div>
            <h2 className="font-display mt-6 text-4xl font-semibold tracking-[-0.02em] text-foreground">
              Professional
              <br />
              Roadmap
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-foreground/70">
              A decade of solving complex problems and delivering high-impact
              software across various industries.
            </p>

            <Card className="mt-10 bg-surface-low p-6">
              <p className="text-sm font-semibold text-foreground">Current Focus</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/65">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Scaling micro-frontend architectures for enterprise clients.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Mentoring junior developers and improving team productivity.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  Exploring AI integration in modern development workflows.
                </li>
              </ul>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-12 w-px bg-surface-variant" />

            <div className="space-y-10">
              {timeline.map((t) => (
                <div key={t.title} className="relative pl-12">
                  <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-xs font-semibold text-primary/80">
                    {t.range}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-foreground">
                    {t.title}
                  </p>
                  <p className="mt-1 text-sm text-foreground/60">{t.meta}</p>
                  <p className="mt-3 text-sm leading-7 text-foreground/65">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pl-12">
              <Link
                href="/experience"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
              >
                View Full Career Timeline →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
