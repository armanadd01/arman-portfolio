import { Reveal } from "@/app/components/motion/reveal";

export function SkillsHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-[-160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.16),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute -right-64 top-[-160px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(204,49,232,0.16),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-[11px] font-semibold tracking-widest text-primary outline outline-1 outline-[rgba(76,215,246,0.18)] backdrop-blur">
              TECHNICAL STACK
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl">
              Professional{" "}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
                }}
              >
                Capabilities
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted">
              A comprehensive breakdown of my technical domain expertise,
              featuring the modern tools and frameworks I use to build
              production-ready digital products.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-foreground/70">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Expert (90%+)
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                Advanced (75%+)
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-surface-variant" />
                Growing (50%+)
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
