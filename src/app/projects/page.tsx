"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { projects } from "@/app/lib/projects";
import { Reveal } from "@/app/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const visible = useMemo(() => {
    if (filter === "featured") return projects.filter((p) => p.featured);
    return projects;
  }, [filter]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Projects
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          Full showcase with filtering. Each project has a dedicated details page
          at <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-900">/projects/[slug]</code>.
        </p>
      </Reveal>

      <div className="mt-10">
        <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value={filter}>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {visible.map((p) => (
                <Reveal key={p.slug}>
                  <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                        {p.title}
                      </h2>
                      {p.year ? (
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                          {p.year}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                      >
                        View details
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
