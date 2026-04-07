import { Reveal } from "@/app/components/motion/reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const skills = [
  { label: "Next.js", note: "App Router, metadata, server actions/routes" },
  { label: "TypeScript", note: "Strong typing, inference, generics" },
  { label: "Tailwind CSS", note: "Design systems, responsive layouts" },
  { label: "Radix UI", note: "Accessible primitives & focus management" },
  { label: "Framer Motion", note: "Micro-interactions & section reveals" },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TooltipProvider delayDuration={150}>
            {skills.map((s) => (
              <Tooltip key={s.label}>
                <TooltipTrigger asChild>
                  <div className="cursor-help rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                    <p className="font-medium text-zinc-950 dark:text-zinc-50">
                      {s.label}
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Hover for details
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>{s.note}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </Reveal>
    </section>
  );
}
