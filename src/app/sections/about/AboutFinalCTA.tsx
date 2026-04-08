import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

export function AboutFinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Ready to start something amazing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
            I&apos;m currently available for freelance opportunities or full-time
            senior roles. Let&apos;s discuss how I can help bring your vision to life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/hire"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-10 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
            >
              Hire Me Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-surface-low px-10 text-sm font-semibold text-foreground/85 outline outline-1 outline-[var(--card-stroke)] transition-all hover:bg-surface-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
