import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

export function SkillsFinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="card-luminal rounded-3xl bg-surface-low px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Interested in my technical expertise?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
              I am always looking for challenging projects where I can apply my
              stack to solve complex problems.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-10 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
              >
                Let&apos;s Talk Shop
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-black/10 px-10 text-sm font-semibold text-foreground/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
