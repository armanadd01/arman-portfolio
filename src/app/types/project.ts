export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year?: string;
  links: ProjectLink[];
  featured?: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  cover?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  role?: string;
  timeframe?: string;
  client?: string;
  stackHighlights?: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
};
