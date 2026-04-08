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
};
