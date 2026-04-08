"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { projects } from "@/app/lib/projects";
import type { Project } from "@/app/types/project";
import { Reveal } from "@/app/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-luminal group rounded-2xl bg-surface-low p-6 transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        {project.year ? (
          <span className="text-label-md text-foreground/55">
            {project.year}
          </span>
        ) : null}
      </div>
      <p className="text-body-lg mt-3 text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)] dark:bg-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-sm font-semibold text-primary/85 hover:text-primary"
          >
            {l.label}
          </Link>
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
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
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
