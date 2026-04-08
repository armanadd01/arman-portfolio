import { Button } from "@/app/components/ui/button";
import { Reveal } from "@/app/components/motion/reveal";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Resume
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Replace this with a clean resume layout (printable) and link a PDF from
          <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-900">/public</code>.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex gap-3">
          <Button asChild>
            <a href="/resume.pdf" download>
              Download PDF
            </a>
          </Button>
          <Button variant="secondary" onClick={() => window.print()}>
            Print
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
