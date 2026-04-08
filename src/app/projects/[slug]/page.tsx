import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/app/lib/projects";
import { Reveal } from "@/app/components/motion/reveal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              Overview
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Add a detailed breakdown: problem, approach, architecture decisions,
              and measurable outcomes.
            </p>
          </div>

          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Tech stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-2">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>
    </div>
  );
}
