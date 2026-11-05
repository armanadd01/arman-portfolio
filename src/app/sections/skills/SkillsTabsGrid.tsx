"use client";

import Link from "next/link";

import {
  Code2,
  Database,
  GitBranch,
  Layers,
  LayoutGrid,
  Shield,
  TestTube2,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/app/components/motion/reveal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

import { SkillRing } from "@/app/sections/skills/SkillRing";

type SkillItem = {
  title: string;
  years: string;
  value: number;
  summary: string;
  level: string;
  icon: React.ComponentType<{ className?: string }>;
};

const frontend: SkillItem[] = [
  {
    title: "Next.js",
    years: "3+ Years",
    value: 91,
    summary: "High-performance storefronts and landing pages with modern routing and rendering patterns.",
    level: "Advanced",
    icon: Code2,
  },
  {
    title: "React",
    years: "6 Years",
    value: 95,
    summary: "Expert in component architecture, hooks, data flow, and conversion-focused interfaces.",
    level: "Master",
    icon: Layers,
  },
  {
    title: "TypeScript",
    years: "3+ Years",
    value: 89,
    summary: "Type-safe UI and scalable app logic for dependable product delivery.",
    level: "Advanced",
    icon: LayoutGrid,
  },
  {
    title: "Tailwind CSS",
    years: "4+ Years",
    value: 90,
    summary: "Utility-first design systems for premium storefront and landing-page experiences.",
    level: "Master",
    icon: LayoutGrid,
  },
  {
    title: "WordPress",
    years: "4+ Years",
    value: 86,
    summary: "Theme/plugin development, CMS customization, and performance-focused business sites.",
    level: "Proficient",
    icon: Wrench,
  },
  {
    title: "Responsive UI",
    years: "6 Years",
    value: 90,
    summary: "Mobile-first design and high-converting experiences across multi-market client brands.",
    level: "Proficient",
    icon: GitBranch,
  },
];

const backend: SkillItem[] = [
  {
    title: "Node.js",
    years: "5 Years",
    value: 89,
    summary: "APIs, business logic, and scalable services for premium web platforms.",
    level: "Proficient",
    icon: Database,
  },
  {
    title: "Express",
    years: "3+ Years",
    value: 82,
    summary: "Backend service development, routing, and data integrations for product workflows.",
    level: "Advanced",
    icon: Database,
  },
  {
    title: "REST APIs",
    years: "5 Years",
    value: 88,
    summary: "Integration, data exchange, and platform connectivity for booking and marketplace flows.",
    level: "Advanced",
    icon: TestTube2,
  },
  {
    title: "MongoDB",
    years: "3+ Years",
    value: 81,
    summary: "Practical NoSQL modeling and data operations for modern web applications.",
    level: "Proficient",
    icon: Shield,
  },
  {
    title: "MySQL",
    years: "3+ Years",
    value: 78,
    summary: "Database-backed site logic, querying, and optimization for business systems.",
    level: "Proficient",
    icon: Database,
  },
];

const devops: SkillItem[] = [
  {
    title: "Git & GitHub",
    years: "6 Years",
    value: 90,
    summary: "Branching, release workflows, version control, and team collaboration best practices.",
    level: "Proficient",
    icon: GitBranch,
  },
  {
    title: "SEO & Performance",
    years: "5 Years",
    value: 88,
    summary: "Site speed tuning, structured content, and growth-focused optimization for online conversion.",
    level: "Advanced",
    icon: TestTube2,
  },
  {
    title: "CMS & Deployment",
    years: "4+ Years",
    value: 84,
    summary: "WordPress customization, deployment workflows, and production-ready website delivery.",
    level: "Proficient",
    icon: Wrench,
  },
];

function SkillCard({ item }: { item: SkillItem }) {
  const Icon = item.icon;

  return (
    <div className="card-luminal group rounded-2xl bg-surface-low p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/10 dark:bg-white/10  outline outline-1 outline-[rgba(255,255,255,0.06)]">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-xs text-foreground/60">⏱ {item.years}</p>
            </div>
          </div>
        </div>

        <SkillRing value={item.value} />
      </div>

      <p className="mt-6 text-sm leading-6 text-muted">{item.summary}</p>

      <div className="mt-6 h-px bg-surface-variant/70" />

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-black/10 dark:bg-white/10  px-3 py-1 text-[11px] font-semibold text-foreground/70 outline outline-1 outline-[rgba(255,255,255,0.06)]">
          {item.level}
        </span>
        <Link
          href="/projects"
          className="text-[11px] font-semibold text-primary/90 hover:text-primary"
        >
          Project ↗
        </Link>
      </div>
    </div>
  );
}

function SkillsGrid({ items }: { items: SkillItem[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Reveal key={item.title} delay={0.05}>
          <SkillCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}

export function SkillsTabsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <Tabs defaultValue="frontend">
        <Reveal>
          <div className="flex justify-center">
            <TabsList className="h-12 rounded-2xl bg-black/10 dark:bg-white/10  p-1 outline outline-1 outline-[rgba(255,255,255,0.06)] backdrop-blur">
              <TabsTrigger
                value="frontend"
                className="tabs-trigger-luminal h-10 gap-2 rounded-xl px-5 text-xs font-semibold text-foreground/70"
              >
                <Code2 className="h-4 w-4" />
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="tabs-trigger-luminal h-10 gap-2 rounded-xl px-5 text-xs font-semibold text-foreground/70"
              >
                <Database className="h-4 w-4" />
                Backend
              </TabsTrigger>
              <TabsTrigger
                value="devops"
                className="tabs-trigger-luminal h-10 gap-2 rounded-xl px-5 text-xs font-semibold text-foreground/70"
              >
                <Wrench className="h-4 w-4" />
                Tools & DevOps
              </TabsTrigger>
            </TabsList>
          </div>
        </Reveal>

        <TabsContent value="frontend" className="mt-14">
          <Reveal>
            <div className="mt-2 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                  Frontend <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted">
                  My core frontend stack and proficiency metrics accumulated
                  through professional development and personal research.
                </p>
              </div>

              <div className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-xs font-semibold text-primary outline outline-1 outline-[rgba(76,215,246,0.18)] backdrop-blur">
                {frontend.length} Technologies
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-surface-variant/60" />
          </Reveal>

          <SkillsGrid items={frontend} />
        </TabsContent>

        <TabsContent value="backend" className="mt-14">
          <Reveal>
            <div className="mt-2 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                  Backend <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted">
                  The server-side foundations I use to deliver secure,
                  scalable, and maintainable systems.
                </p>
              </div>

              <div className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-xs font-semibold text-primary outline outline-1 outline-[rgba(76,215,246,0.18)] backdrop-blur">
                {backend.length} Technologies
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-surface-variant/60" />
          </Reveal>

          <SkillsGrid items={backend} />
        </TabsContent>

        <TabsContent value="devops" className="mt-14">
          <Reveal>
            <div className="mt-2 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
                  Tools & <span className="text-primary">DevOps</span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted">
                  The workflows and tooling that keep delivery fast, reliable,
                  and high quality.
                </p>
              </div>

              <div className="inline-flex items-center rounded-full bg-black/10 dark:bg-white/10  px-4 py-2 text-xs font-semibold text-primary outline outline-1 outline-[rgba(76,215,246,0.18)] backdrop-blur">
                {devops.length} Technologies
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-surface-variant/60" />
          </Reveal>

          <SkillsGrid items={devops} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
