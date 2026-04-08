import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

export function ExperienceHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-44 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-[11px] font-semibold tracking-widest text-primary/80 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur">
              CAREER JOURNEY
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl">
              My Professional{" "}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
                }}
              >
                Timeline
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted">
              A track record of building scalable solutions, leading
              high-performance teams, and pushing the boundaries of web
              engineering for 7+ years.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/resume"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-black/10 px-8 text-sm font-semibold text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
              >
                View Full Resume
              </Link>
              <Link
                href="/hire"
                className="inline-flex h-11 items-center justify-center rounded-2xl px-8 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
                }}
              >
                Hire Me Now
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
