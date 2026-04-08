import { Briefcase, GraduationCap, Layers, Zap } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

const items = [
  {
    range: "2021 - PRESENT",
    title: "Sr. Web Developer",
    org: "Cut Out Image, Inc.",
    desc:
      "Working on React and Node.js applications alongside WordPress theme and plugin development. Focused on performance, SEO, and maintainable delivery.",
    chips: ["React", "Node.js", "MongoDB"],
    icon: Briefcase,
  },
  {
    range: "2021",
    title: "Web Developer",
    org: "Clipping World Bangladesh",
    desc:
      "Built responsive web interfaces with JavaScript and React and collaborated with teams to deliver features on schedule.",
    chips: ["JavaScript", "React", "REST APIs"],
    icon: Zap,
  },
  {
    range: "2020 - 2021",
    title: "Web & SEO Development",
    org: "Shohag Logistics and Security Service LTD",
    desc:
      "Worked on SEO and digital marketing and delivered WordPress sites/themes with a focus on speed and usability.",
    chips: ["WordPress", "SEO", "PHP"],
    icon: Layers,
  },
  {
    range: "2026",
    title: "Bachelor of Arts (BA) — English Literature",
    org: "Fareast International University (Enrolled)",
    desc:
      "Currently pursuing undergraduate studies while continuing professional software development.",
    chips: ["English Literature", "Communication"],
    icon: GraduationCap,
  },
] as const;

export function ProfessionalEvolution() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Professional Evolution
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
            A timeline of my growth and professional experience.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-surface-variant/70 md:block" />

        <div className="grid gap-10 lg:gap-24">
          {items.map((item, idx) => {
            const right = idx % 2 === 1;
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.05 * idx}>
                <div className="relative grid gap-6 lg:grid-cols-[1fr_96px_1fr] lg:items-start">
                  <div className={right ? "hidden lg:block" : ""} />

                  <div className="relative hidden lg:block">
                    <div
                      className="absolute left-1/2 top-7 -translate-x-1/2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10  text-primary outline outline-1 outline-[rgba(76,215,246,0.25)] backdrop-blur">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      right
                        ? "lg:col-start-3 lg:flex lg:justify-start"
                        : "lg:col-start-1 lg:flex lg:justify-end"
                    }
                  >
                    <div className="mb-3 flex items-center gap-3 lg:hidden">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 dark:bg-white/10  text-primary outline outline-1 outline-[rgba(76,215,246,0.25)] backdrop-blur">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-xs font-semibold tracking-wide text-primary/80">
                        {item.range}
                      </p>
                    </div>

                    <div className="card-luminal w-full rounded-2xl bg-surface-low px-8 py-8 lg:max-w-[520px]">
                      <div className="flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          <p className="hidden text-xs font-semibold tracking-wide text-primary/80 lg:block">
                            {item.range}
                          </p>
                          <p className="mt-3 font-display text-xl font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-secondary">
                            {item.org}
                          </p>
                        </div>

                        <div className="hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(76,215,246,0.25)]">
                          <span className="text-[10px] font-semibold text-primary">⌁</span>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-muted">
                        {item.desc}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.chips.map((c) => (
                          <span
                            key={c}
                            className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={!right ? "hidden lg:block" : ""} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
