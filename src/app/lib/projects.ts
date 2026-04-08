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
    featured: true,
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
    featured: true,
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
  {
    id: "cut-out-image-inc",
    slug: "cut-out-image-inc",
    title: "Cut Out Image, Inc.",
    description:
      "Managed and optimized the company’s primary platform with WordPress theme and plugin development, improving site speed and SEO through targeted optimization.",
    tags: ["WordPress", "PHP", "MySQL", "SEO", "Performance"],
    year: "2021",
    cover: "/project-1.svg",
    role: "Sr. Web Developer",
    timeframe: "Oct 2021 - Present",
    client: "Cut Out Image, Inc.",
    overview:
      "Focused on WordPress theme and plugin development and improved performance and SEO ranking through front-end and MySQL optimization.",
    problem:
      "The platform needed ongoing optimization, maintainable customization, and performance improvements for better SEO and user experience.",
    solution:
      "Delivered theme and plugin enhancements with a performance-first approach and practical database optimization.",
    stackHighlights: {
      frontend: ["WordPress", "HTML", "CSS"],
      backend: ["PHP", "MySQL"],
      tools: ["Git", "SEO"],
    },
    gallery: [
      {
        src: "/project-1.svg",
        alt: "Cut Out Image, Inc.",
        caption: "Platform optimization and WordPress development",
      },
    ],
    links: [{ label: "Live", href: "https://www.cutoutimage.com" }],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
