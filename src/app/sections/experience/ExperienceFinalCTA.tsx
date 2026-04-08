import Link from "next/link";

import { Star } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

export function ExperienceFinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <Reveal>
        <div className="card-luminal rounded-3xl bg-surface-low px-6 py-16 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
              <Star className="h-5 w-5 text-primary" />
            </div>

            <h2 className="font-display mt-8 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
              Ready to build something
              <br />
              exceptional together?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
              I am currently open to new senior roles, architectural consulting,
              and high-impact contract opportunities.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-primary px-12 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] dark:text-black"
              >
                Get In Touch
              </Link>
              <Link
                href="/hire"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10  px-12 text-sm font-semibold text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur"
              >
                Hire Me Now
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
