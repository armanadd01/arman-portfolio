import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/app/lib/projects";

import { ProjectDetailsHero } from "@/app/sections/project-details/ProjectDetailsHero";
import { ProjectOverview } from "@/app/sections/project-details/ProjectOverview";
import { ChallengeSolution } from "@/app/sections/project-details/ChallengeSolution";
import { VisualShowcase } from "@/app/sections/project-details/VisualShowcase";
import { ResponsiveDesign } from "@/app/sections/project-details/ResponsiveDesign";
import { ReflectionLearnings } from "@/app/sections/project-details/ReflectionLearnings";
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
        role={project.role ?? "Lead Frontend Architect & UI/UX Designer"}
        timeframe={project.timeframe ?? project.year ?? ""}
        client={project.client ?? "Client"}
        overview={
          project.overview ??
          "Aura Banking Suite was commissioned to bridge the gap between complex institutional banking tools and the simplicity of modern consumer fintech apps. The goal was to build a system that could handle high-frequency data while remaining accessible to non-technical users."
        }
        stackHighlights={
          project.stackHighlights ?? {
            frontend: [
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "D3.js",
            ],
            backend: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda"],
            tools: ["Figma", "Docker", "Sentry", "Vercel"],
          }
        }
      />

      <ChallengeSolution
        challengeTitle="The Challenge"
        challengeSubtitle="Understanding the friction points in digital wealth management."
        challengeBody={
          project.problem ??
          "Traditional banking interfaces are often cluttered, slow, and lack proactive insights. Users struggle to understand their spending patterns across multiple accounts, leading to financial stress and poor decision-making."
        }
        objectives={[
          "Simplify transaction complexity",
          "Enable instant financial forecasting",
          "Maintain bank-grade security visuals",
        ]}
        solutionTitle="The Solution"
        solutionSubtitle="Engineering an intuitive bridge between data and users."
        solutionBody={
          project.solution ??
          "We implemented a modular dashboard architecture that surfaces the most critical data first. Using React and D3.js, we created interactive visualizations that allow users to 'time-travel' through their financial history."
        }
      />

      <VisualShowcase
        images={[
          {
            src: gallery[0]?.src ?? "/project-2.svg",
            alt: gallery[0]?.alt ?? "Showcase",
            caption:
              gallery[0]?.caption ??
              "Showing 1 of 3: Panoramic dashboard view of Aura Banking Suite showing wealth distribution charts",
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

      <ReflectionLearnings
        image={gallery[2]?.src ?? "/project-3.svg"}
        items={[
          "Handling high-volume WebSocket data requires robust state management strategies beyond standard context.",
          "Designing for accessibility in financial apps involves complex color-contrast challenges for data-rich charts.",
          "User trust is built through UI transparency; explaining 'why' an AI recommendation was made is as important as the recommendation itself.",
        ]}
      />

      <ProjectDetailsCTA />
    </main>
  );
}
