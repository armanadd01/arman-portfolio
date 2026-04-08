"use client";

import { Reveal } from "@/app/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const frontend = ["Next.js", "React", "TypeScript", "Tailwind", "Radix UI"]; 
const backend = ["Node.js", "REST APIs", "Auth", "Databases"]; 
const tools = ["Git", "Vercel", "CI", "Figma", "Testing"]; 

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
      {label}
    </span>
  );
}

export default function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Categorized skills with an interactive Radix Tabs UI. Replace these
          arrays with CMS-driven data later without changing the components.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <Tabs defaultValue="frontend">
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className="mt-6 flex flex-wrap gap-2">
                {frontend.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend">
              <div className="mt-6 flex flex-wrap gap-2">
                {backend.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Reveal>
    </div>
  );
}
