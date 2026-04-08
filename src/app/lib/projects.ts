import type { Project } from "@/app/types/project";

export const projects: Project[] = [
  {
    id: "sultana-resort-niagara",
    slug: "sultana-resort-niagara",
    title: "Sultana Resort Niagara",
    description:
      "Official resort website built with WordPress plus custom plugins for booking logic and pricing integrations.",
    tags: ["WordPress", "PHP", "Custom Plugins", "Security", "Responsive UI"],
    year: "2025",
    featured: true,
    cover: "/project-1.svg",
    role: "Web Developer",
    timeframe: "2025",
    client: "Sultana Resort Niagara",
    overview:
      "Developed the official website for a Canadian client, focusing on performance, security, and a smooth booking experience.",
    problem:
      "The business needed a reliable booking flow with pricing integration and an easy-to-manage CMS.",
    solution:
      "Implemented a WordPress build with custom plugins, optimized templates, and responsive layouts across devices.",
    stackHighlights: {
      frontend: ["WordPress", "HTML", "CSS"],
      backend: ["PHP", "MySQL"],
      tools: ["Git", "cPanel", "Security Hardening"],
    },
    gallery: [
      {
        src: "/project-1.svg",
        alt: "Sultana Resort Niagara",
        caption: "Resort website with booking flow",
      },
    ],
    links: [{ label: "Live", href: "https://sultanaresortniagara.ca/" }],
  },
  {
    id: "larky-parky",
    slug: "larky-parky",
    title: "Larky Parky",
    description:
      "High-performance web app built with React and Tailwind CSS, backed by Node.js APIs, optimized for Lighthouse and fast UX.",
    tags: ["React", "Tailwind CSS", "Node.js", "Performance"],
    year: "2025",
    cover: "/project-2.svg",
    role: "Web Developer",
    timeframe: "2025",
    client: "Larky Parky",
    overview:
      "Delivered a responsive UI/UX focused web experience with optimized rendering and efficient data fetching.",
    problem:
      "The product needed a fast, responsive interface while maintaining strong SEO and accessibility.",
    solution:
      "Built the frontend with React + Tailwind and implemented custom Node.js APIs to support the product features.",
    stackHighlights: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js"],
      tools: ["Git", "Lighthouse"],
    },
    gallery: [
      {
        src: "/project-2.svg",
        alt: "Larky Parky",
        caption: "Responsive UI/UX and performance optimizations",
      },
    ],
    links: [{ label: "Live", href: "https://larkyparky.com/" }],
  },
  {
    id: "fresh-meat-fish",
    slug: "fresh-meat-fish",
    title: "Fresh Meat Fish",
    description:
      "Full-featured e-commerce platform for food delivery built with MERN Stack, featuring inventory, cart, and secure payments.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "E-Commerce"],
    year: "2025",
    cover: "/project-3.svg",
    role: "Full Stack Developer",
    timeframe: "2025",
    client: "Fresh Meat Fish",
    overview:
      "Built a complete food delivery e-commerce experience with a strong focus on user experience and operational efficiency.",
    problem:
      "The business required inventory management, cart functionality, and secured checkout for online orders.",
    solution:
      "Implemented a MERN stack solution with dynamic inventory, user cart flows, and secure payment integration.",
    stackHighlights: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "REST APIs"],
    },
    gallery: [
      {
        src: "/project-3.svg",
        alt: "Fresh Meat Fish",
        caption: "E-commerce + delivery focused UX",
      },
    ],
    links: [{ label: "Live", href: "https://freshmeat.fish" }],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
