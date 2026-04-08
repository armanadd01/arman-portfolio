import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";

export function AboutPreviewSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          About
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          A short, conversion-focused intro: your niche, what you build, and the
          outcomes you optimize for.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <a href="/about">Read full story</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
