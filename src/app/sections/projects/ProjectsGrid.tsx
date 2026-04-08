"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Search } from "lucide-react";

import { projects } from "@/app/lib/projects";
import type { Project } from "@/app/types/project";
import { Reveal } from "@/app/components/motion/reveal";
import { FilterPill } from "@/app/components/ui/filter-pill";

type Category = "All" | "Frontend" | "Fullstack" | "WordPress";

type ProjectCardModel = Project & {
  category?: Exclude<Category, "All">;
  cover?: string;
};

const categories: Category[] = ["All", "Frontend", "Fullstack", "WordPress"];

function deriveCategoryFromTags(tags: string[]): Exclude<Category, "All"> {
  const normalized = tags.map((t) => t.toLowerCase());

  if (normalized.some((t) => t.includes("wordpress"))) return "WordPress";
  if (
    normalized.some((t) => t.includes("mern")) ||
    (normalized.some((t) => t.includes("node")) &&
      normalized.some((t) => t.includes("mongo")))
  ) {
    return "Fullstack";
  }

  return "Frontend";
}

function normalizeProjects(list: Project[]): ProjectCardModel[] {
  return list.map((p) => {
    return {
      ...p,
      cover: p.cover ?? "/project-1.svg",
      category: deriveCategoryFromTags(p.tags),
    } satisfies ProjectCardModel;
  });
}

function ProjectCard({ project }: { project: ProjectCardModel }) {
  const github = project.links.find((l) => l.label.toLowerCase().includes("github"));

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px"
    >
      <article className="card-luminal overflow-hidden rounded-2xl bg-surface-low">
        <div className="relative aspect-[16/10]">
          <Image
            src={project.cover ?? "/project-1.svg"}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/0 to-black/50 transition-opacity duration-300 group-hover:opacity-90" />

          <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="pointer-events-auto grid w-[220px] gap-3">
              <a
                href={`/projects/${project.slug}`}
                className="signature-gradient inline-flex h-10 items-center justify-center rounded-2xl px-4 text-xs font-semibold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:text-black"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </a>
              {github ? (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-2xl bg-black/20 px-4 text-xs font-semibold text-white/90 outline outline-1 outline-[rgba(255,255,255,0.10)] backdrop-blur transition-all hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/15 dark:hover:bg-white/25"
                  onClick={(e) => e.stopPropagation()}
                >
                  Github
                </a>
              ) : null}
            </div>
          </div>

          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-white/85 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur">
              {project.category ?? "Frontend"}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-5">
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

export function ProjectsGrid() {
  const all = useMemo(() => normalizeProjects(projects), []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return all.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        category === "All" || (p.category ?? "Frontend") === category;

      return matchesQuery && matchesCategory;
    });
  }, [all, query, category]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-[520px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by name, tech or description..."
              className="h-11 w-full rounded-2xl bg-black/10 pl-11 pr-4 text-sm text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur placeholder:text-foreground/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 dark:bg-white/10"
            />
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map((c) => (
              <FilterPill
                key={c}
                active={c === category}
                onClick={() => setCategory(c)}
              >
                {c}
              </FilterPill>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, idx) => (
          <Reveal key={p.slug} delay={0.05 + idx * 0.03}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black/10 px-8 text-sm font-semibold text-foreground/80 outline outline-1 outline-[rgba(255,255,255,0.08)] backdrop-blur transition-all hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/60 active:translate-y-px dark:bg-white/10 dark:hover:bg-white/15"
          >
            Explore Archive
            <span className="ml-2">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
