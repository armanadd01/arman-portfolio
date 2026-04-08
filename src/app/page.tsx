import { HomeHero } from "@/app/sections/home/HomeHero";
import { AboutStrip } from "@/app/sections/home/AboutStrip";
import { ArsenalGrid } from "@/app/sections/home/ArsenalGrid";
import { CaseStudiesRow } from "@/app/sections/home/CaseStudiesRow";
import { RoadmapSection } from "@/app/sections/home/RoadmapSection";
import { TestimonialsRow } from "@/app/sections/home/TestimonialsRow";
import { FinalCTA } from "@/app/sections/home/FinalCTA";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <AboutStrip />
      <ArsenalGrid />
      <CaseStudiesRow />
      <RoadmapSection />
      <TestimonialsRow />
      <FinalCTA />
    </div>
  );
}
