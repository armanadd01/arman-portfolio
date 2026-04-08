import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export function AboutPreviewSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          About
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          A short, conversion-focused intro: your niche, what you build, and the
          outcomes you optimize for.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <Link href="/about">Read full story</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
