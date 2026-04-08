import { Download } from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";

export function ResumeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-44 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-[11px] font-semibold tracking-widest text-primary/80 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur dark:bg-white/10">
                Curriculum Vitae
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl">
                Professional{" "}
                <span className="text-primary">Resume</span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-sm leading-7 text-muted">
                A detailed overview of my professional journey, technical
                expertise, and academic background.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <a
              href="/Md_Arman_Habib_Nahid_CV_Current.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-2xl px-8 text-sm font-semibold text-white shadow-[0_18px_50px_-28px_rgba(0,163,255,0.4)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
              }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
