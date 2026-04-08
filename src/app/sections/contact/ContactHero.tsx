import { Reveal } from "@/app/components/motion/reveal";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute left-1/2 top-44 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        </div>

        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center rounded-full bg-black/10 px-4 py-2 text-[11px] font-semibold tracking-widest text-primary/80 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur dark:bg-white/10">
              Contact Me
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-6xl">
              Let&apos;s craft your next{" "}
              <span className="text-primary">digital</span>
              <br />
              <span className="text-secondary">masterpiece</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
              Have a project in mind or just want to say hi? I&apos;m always open
              to discussing new opportunities, creative ideas, or visions to be
              part of your next big move.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
