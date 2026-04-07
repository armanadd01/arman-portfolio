import type { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A high-performance portfolio built with Next.js App Router, accessible Radix UI primitives, and smooth Framer Motion interactions.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Radix UI", "Framer Motion"],
    year: "2026",
    featured: true,
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "GitHub", href: "https://github.com/yourname/yourrepo" },
    ],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description:
      "A modular dashboard UI with strong typing, composable components, and performance-focused rendering patterns.",
    tags: ["React", "TypeScript", "Radix UI"],
    year: "2025",
    links: [{ label: "Case Study", href: "#" }],
  },
];
