import { AboutHero } from "@/app/sections/about/AboutHero";
import { JourneySection } from "@/app/sections/about/JourneySection";
import { TechStackGlance } from "@/app/sections/about/TechStackGlance";
import { ProfessionalEvolution } from "@/app/sections/about/ProfessionalEvolution";
import { WorkspaceGallery } from "@/app/sections/about/WorkspaceGallery";
import { AboutFinalCTA } from "@/app/sections/about/AboutFinalCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <JourneySection />
      <TechStackGlance />
      <ProfessionalEvolution />
      <WorkspaceGallery />
      <AboutFinalCTA />
    </main>
  );
}
