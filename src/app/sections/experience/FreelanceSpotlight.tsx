import Link from "next/link";

import { ArrowUpRight, Layers } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

const cards = [
  {
    title: "Sultana Resort Niagara",
    client: "Canadian Client",
    desc:
      "Official website built with WordPress plus custom plugins for booking logic and pricing integration.",
    tags: ["#WordPress", "#PHP", "#CustomPlugins"],
  },
  {
    title: "Larky Parky",
    client: "Web App",
    desc:
      "High-performance React + Tailwind UI with Node.js APIs and strong Lighthouse scores.",
    tags: ["#React", "#Tailwind", "#NodeJS"],
  },
  {
    title: "Fresh Meat Fish",
    client: "E-commerce",
    desc: "MERN e-commerce platform with inventory, cart, and secure payment integration.",
    tags: ["#MERN", "#MongoDB", "#ECommerce"],
  },
] as const;

export function FreelanceSpotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Layers className="h-4 w-4 text-primary" />
              <p className="text-[11px] font-semibold tracking-widest text-primary/80">
                INDEPENDENT PROJECTS
              </p>
            </div>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Freelance Spotlight
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              Selected projects delivered across WordPress and MERN stack builds,
              focusing on responsive UI, performance, and real business results.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-primary/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
          >
            See all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, idx) => (
          <Reveal key={c.title} delay={0.05 + idx * 0.03}>
            <article className="card-luminal rounded-2xl bg-surface-low p-7 transition-transform focus-within:ring-2 focus-within:ring-[var(--primary)]/60 active:translate-y-px">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
                  <span className="text-sm font-semibold text-primary">›</span>
                </div>

                <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
                  <ArrowUpRight className="h-4 w-4 text-foreground/70" />
                </span>
              </div>

              <h3 className="font-display mt-7 text-lg font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-xs font-semibold tracking-widest text-secondary">
                {c.client}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{c.desc}</p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-foreground/55">
                {c.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
