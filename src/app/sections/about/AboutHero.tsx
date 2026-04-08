import { Reveal } from "@/app/components/motion/reveal";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-[-140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.18),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute -right-64 top-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(204,49,232,0.18),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
              The Human Behind the Code
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
                }}
              >
                Turning complex problems into
              </span>
              <br />
              <span
                className="inline-block bg-clip-text text-transparent pb-4"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgb(var(--secondary)), rgb(var(--primary)), rgb(var(--accent)))",
                }}
              >
                elegant digital realities.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted">
              I&apos;m a Full-Stack Engineer and UI Architect focused on building
              high-performance applications with a focus on user-centric design
              and scalable architecture.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
