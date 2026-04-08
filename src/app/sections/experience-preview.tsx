import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";

export function ExperiencePreviewSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Experience
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          A quick preview of your strongest roles and measurable impact.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              Frontend Engineer
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Shipped accessible UI + improved performance.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
              Freelance
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Delivered conversion-focused sites and dashboards.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <a href="/experience">View full timeline</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
