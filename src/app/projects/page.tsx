import { ProjectsHero } from "@/app/sections/projects/ProjectsHero";
import { ProjectsGrid } from "@/app/sections/projects/ProjectsGrid";
import { ProjectsHighlights } from "@/app/sections/projects/ProjectsHighlights";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsHighlights />
    </main>
  );
}
