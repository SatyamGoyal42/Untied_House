import ProjectDetailTemplate from "../../components/ProjectDetailTemplate";

import heroImg from "@/assets/services/photography-content/film-aesthetic.png";
import creativeImg from "@/assets/services/brand-identity/hero.png";
import galleryImg1 from "@/assets/services/photography-content/film-aesthetic.png";
import galleryImg2 from "@/assets/services/brand-identity/packaging-mockup.png";
import galleryImg3 from "@/assets/services/brand-identity/typography-detail.png";
import galleryImg4 from "@/assets/services/shared/project-2.png";
import galleryImg5 from "@/assets/services/shared/project-1.png";

export default function ModernAestheticPage() {
  return (
    <ProjectDetailTemplate
      title="Modern Aesthetic"
      heroImage={heroImg}
      heroImageAlt="High-fashion photography in minimalist architectural space"
      tags={["Photography", "•", "Content", "•", "2024"]}
      overviewText="A visual storytelling project for a contemporary fashion and interiors publication. Modern Aesthetic required a photographic language that could bridge the gap between high fashion editorial and architectural documentation — creating imagery that feels both aspirational and authentic."
      problemText="The publication's existing photography felt disjointed — switching between overly styled commercial shots and unprocessed documentary images. There was no unifying visual thread connecting fashion, architecture, and lifestyle content across their platforms."
      objectiveText="To establish a cohesive photographic direction and content system that unifies diverse subject matter under a single atmospheric identity, from print to digital."
      creativeHeading="Light as Architecture"
      creativeBody="We developed a photographic philosophy centered on natural light as structural element. Every shoot was planned around golden hour or controlled window light, creating a consistent warmth that ties together fashion, space, and still life. Post-production was deliberately restrained — a subtle film grain overlay, lifted shadows, and a warm color shift that references analogue darkroom processes. The result is a body of work that feels timeless, refusing to anchor itself to any specific trend or season."
      creativeImage={creativeImg}
      creativeImageAlt="Behind the scenes of an editorial photography session"
      colorSwatches={["#1a1c1c", "#d4a574", "#e9e1c2", "#ffffff"]}
      galleryImages={[
        { src: galleryImg1, alt: "Hero editorial fashion photography" },
        { src: galleryImg2, alt: "Architectural interior detail" },
        { src: galleryImg3, alt: "Still life product composition" },
        { src: galleryImg4, alt: "On-location documentary capture" },
        { src: galleryImg5, alt: "Complete visual campaign spread" },
      ]}
      outcomes={[
        { number: "01", text: "Photography direction adopted across 3 international editions." },
        { number: "02", text: "50% increase in editorial print subscriptions post-rebrand." },
        { number: "03", text: "Content repurposed across 6 digital platforms with zero visual dilution." },
      ]}
      nextProject={{ name: "Aura Lifestyle", href: "/selected-work/aura-lifestyle" }}
    />
  );
}
