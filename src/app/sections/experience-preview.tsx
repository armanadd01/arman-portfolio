import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export function ExperiencePreviewSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Experience
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          A quick preview of your strongest roles and measurable impact.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="card-luminal rounded-2xl bg-surface-low p-6">
            <p className="text-sm font-semibold text-foreground">
              Frontend Engineer
            </p>
            <p className="mt-2 text-sm text-muted">
              Shipped accessible UI + improved performance.
            </p>
          </div>
          <div className="card-luminal rounded-2xl bg-surface-low p-6">
            <p className="text-sm font-semibold text-foreground">
              Freelance
            </p>
            <p className="mt-2 text-sm text-muted">
              Delivered conversion-focused sites and dashboards.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <Link href="/experience">View full timeline</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
