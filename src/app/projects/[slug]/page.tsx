import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/app/lib/projects";

import { ProjectDetailsHero } from "@/app/sections/project-details/ProjectDetailsHero";
import { ProjectOverview } from "@/app/sections/project-details/ProjectOverview";
import { ChallengeSolution } from "@/app/sections/project-details/ChallengeSolution";
import { VisualShowcase } from "@/app/sections/project-details/VisualShowcase";
import { ResponsiveDesign } from "@/app/sections/project-details/ResponsiveDesign";
import { ProjectDetailsCTA } from "@/app/sections/project-details/ProjectDetailsCTA";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const cover = project.cover ?? "/project-1.svg";
  const titleParts = project.title.split(" ");
  const strong = titleParts.slice(0, 1).join(" ");
  const accent = titleParts.slice(1).join(" ") || titleParts[0];

  const gallery =
    project.gallery ??
    [
      {
        src: "/project-1.svg",
        alt: "Desktop view",
        caption: "Showing 1 of 3",
      },
      {
        src: "/project-2.svg",
        alt: "Tablet view",
        caption: "Showing 2 of 3",
      },
      {
        src: "/project-3.svg",
        alt: "Mobile view",
        caption: "Showing 3 of 3",
      },
    ];

  const stackHighlights =
    project.stackHighlights ??
    (() => {
      const tags = project.tags.map((t) => t.toLowerCase());

      const hasReact = tags.some((t) => t.includes("react"));
      const hasTailwind = tags.some((t) => t.includes("tailwind"));
      const hasWordPress = tags.some((t) => t.includes("wordpress"));
      const hasNode = tags.some((t) => t.includes("node"));
      const hasMongo = tags.some((t) => t.includes("mongo"));
      const hasPhp = tags.some((t) => t === "php" || t.includes("php"));
      const hasMern = tags.some((t) => t.includes("mern"));

      const frontend = [
        hasReact ? "React" : null,
        hasTailwind ? "Tailwind CSS" : null,
        hasWordPress ? "WordPress" : null,
      ].filter(Boolean) as string[];

      const backend = [
        hasNode ? "Node.js" : null,
        hasMongo ? "MongoDB" : null,
        hasPhp ? "PHP" : null,
        hasMern && !hasMongo ? "MongoDB" : null,
      ].filter(Boolean) as string[];

      return {
        frontend: frontend.length ? frontend : ["Web"],
        backend: backend.length ? backend : ["Backend"],
        tools: ["Git"],
      };
    })();

  return (
    <main>
      <ProjectDetailsHero
        cover={cover}
        tags={project.tags}
        title={{ strong, accent }}
        subtitle={project.description}
        primaryLink={project.links[0]}
        secondaryLink={project.links[1]}
      />

      <ProjectOverview
        role={project.role ?? "Web Developer"}
        timeframe={project.timeframe ?? project.year ?? ""}
        client={project.client ?? project.title}
        overview={project.overview ?? project.description}
        stackHighlights={stackHighlights}
      />

      <ChallengeSolution
        challengeTitle="The Challenge"
        challengeSubtitle="Project requirements and constraints."
        challengeBody={project.problem ?? project.description}
        objectives={project.tags.slice(0, 3)}
        solutionTitle="The Solution"
        solutionSubtitle="Implementation approach."
        solutionBody={project.solution ?? project.overview ?? project.description}
      />

      <VisualShowcase
        images={[
          {
            src: gallery[0]?.src ?? "/project-2.svg",
            alt: gallery[0]?.alt ?? "Showcase",
            caption: gallery[0]?.caption ?? "Showing 1 of 3",
          },
          {
            src: gallery[1]?.src ?? "/project-3.svg",
            alt: gallery[1]?.alt ?? "Showcase",
            caption: gallery[1]?.caption ?? "Showing 2 of 3",
          },
          {
            src: gallery[2]?.src ?? "/project-1.svg",
            alt: gallery[2]?.alt ?? "Showcase",
            caption: gallery[2]?.caption ?? "Showing 3 of 3",
          },
        ]}
      />

      <ResponsiveDesign
        desktop={gallery[0]?.src ?? "/project-1.svg"}
        tablet={gallery[1]?.src ?? "/project-2.svg"}
        mobile={gallery[2]?.src ?? "/project-3.svg"}
      />

      <ProjectDetailsCTA />
    </main>
  );
}
