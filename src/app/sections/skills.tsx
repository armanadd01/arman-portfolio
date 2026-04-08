import { Reveal } from "@/app/components/motion/reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

const skills = [
  { label: "React", note: "Hooks, reusable components, responsive UI" },
  { label: "Node.js", note: "REST APIs, Express, backend services" },
  { label: "MongoDB", note: "NoSQL data modeling with Mongoose" },
  { label: "WordPress", note: "Themes, plugins, performance + SEO" },
  { label: "Tailwind CSS", note: "Responsive UIs and design systems" },
  { label: "Git/GitHub", note: "Version control, collaboration, CI workflows" },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Skills
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TooltipProvider delayDuration={150}>
            {skills.map((s) => (
              <Tooltip key={s.label}>
                <TooltipTrigger asChild>
                  <div className="card-luminal cursor-help rounded-2xl bg-surface-low p-5">
                    <p className="font-semibold text-foreground">
                      {s.label}
                    </p>
                    <p className="mt-2 text-sm text-muted">
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
