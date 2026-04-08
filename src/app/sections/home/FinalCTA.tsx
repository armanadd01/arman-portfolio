import { Reveal } from "@/app/components/motion/reveal";

import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-surface-low px-6 py-16 sm:px-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,33,202,0.28),rgba(0,0,0,0)_55%)]" />
            <div className="absolute -bottom-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(204,49,232,0.18),rgba(0,0,0,0))] blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              Ready to Build the <span className="text-primary">Next Big Thing?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-foreground/70">
              Whether you have a fully-formed idea or just a spark, let&apos;s
              collaborate and create something extraordinary.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="signature-gradient inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-black"
              >
                Start a Conversation
              </Link>
              <Link
                href="/hire"
                className="inline-flex h-11 items-center justify-center rounded-full bg-black/35 px-6 text-sm font-semibold text-foreground/85 backdrop-blur"
              >
                View My Services
              </Link>
            </div>

            <div className="mt-14 flex items-center justify-center gap-8 text-foreground/30">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-foreground/20" />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
