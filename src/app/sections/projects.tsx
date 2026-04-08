"use client";

import { useMemo, useState } from "react";

import { projects } from "@/app/lib/projects";
import type { Project } from "@/app/types/project";
import { Reveal } from "@/app/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl surface-container-low p-6 transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>
        {project.year ? (
          <span className="text-label-md text-[color:rgba(229,226,225,0.55)]">
            {project.year}
          </span>
        ) : null}
      </div>
      <p className="text-body-lg mt-3 text-[color:rgba(229,226,225,0.72)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[var(--surface-variant)] px-3 py-1 text-xs text-[color:rgba(229,226,225,0.72)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-[var(--primary)] underline-offset-4 hover:underline"
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const visible = useMemo(() => {
    if (filter === "featured") return projects.filter((p) => p.featured);
    return projects;
  }, [filter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          A data-driven projects grid rendered from a typed source. Swap the
          implementation to a CMS later without changing UI components.
        </p>
      </Reveal>

      <div className="mt-8">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map((project) => (
                <Reveal key={project.slug}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
