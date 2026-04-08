import { Reveal } from "@/app/components/motion/reveal";
import { Button } from "@/app/components/ui/button";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          About
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Share your story here: what you build, what you care about, and the
          outcomes you’ve delivered. Keep it skimmable with clear headings and
          metrics.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
            Career journey
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Add a timeline of roles, impact, and the skills you developed.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="/hire">Work with me</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/resume">Download CV</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
