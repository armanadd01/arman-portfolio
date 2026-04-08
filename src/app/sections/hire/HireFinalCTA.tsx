import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";

export function HireFinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <Reveal>
        <div className="card-luminal overflow-hidden rounded-3xl signature-gradient px-6 py-16 sm:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl dark:text-black/85">
              Ready to create your next digital
              <br />
              masterpiece?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/85 dark:text-black/85">
              I am currently accepting new projects starting next month. Secure
              your slot now and let&apos;s turn your vision into reality.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#quick-inquiry"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black/80 px-10 text-sm font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/about"
                className="rounded-md text-sm font-semibold text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 dark:text-black/85 dark:hover:text-black"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
