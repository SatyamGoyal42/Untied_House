import ProjectDetailTemplate from "../../components/ProjectDetailTemplate";

import heroImg from "@/assets/services/brand-identity/stationery-design.png";
import creativeImg from "@/assets/services/brand-identity/typography-detail.png";
import galleryImg1 from "@/assets/services/brand-identity/packaging-mockup.png";
import galleryImg2 from "@/assets/services/brand-identity/guidelines-book.png";
import galleryImg3 from "@/assets/services/brand-identity/hero.png";
import galleryImg4 from "@/assets/services/shared/project-1.png";
import galleryImg5 from "@/assets/services/shared/project-2.png";

export default function AuraLifestylePage() {
  return (
    <ProjectDetailTemplate
      title="Aura Lifestyle"
      heroImage={heroImg}
      heroImageAlt="Aura Lifestyle branding mockup with minimalist stationery"
      tags={["Branding", "•", "Identity", "•", "2024"]}
      overviewText="A holistic lifestyle brand built around the philosophy of intentional living. Aura required a visual identity that embodied calm sophistication — every touchpoint designed to evoke a sense of curated simplicity and modern elegance."
      problemText="Aura's previous identity felt generic and disconnected from their premium positioning. The brand lacked a cohesive visual language, making it difficult to differentiate in a saturated wellness market. They needed a system that felt elevated yet approachable."
      objectiveText="To develop a complete brand identity system — from logo and typography to packaging and stationery — that positions Aura as a definitive voice in the intentional living space."
      creativeHeading="Refined Restraint"
      creativeBody="We approached Aura's identity through the lens of architectural minimalism. The logotype was crafted using bespoke letterforms that balance geometric precision with organic warmth. The extended color palette draws from natural materials — warm stone, aged paper, and muted earth tones — creating a visual ecosystem that feels both luxurious and grounded. Every element was designed to work in concert, from the micro-typography on packaging to the macro-scale of environmental graphics."
      creativeImage={creativeImg}
      creativeImageAlt="Typography specimen and brand detail for Aura Lifestyle"
      colorSwatches={["#1a1c1c", "#e9e1c2", "#ffffff", "#4C9DB0"]}
      galleryImages={[
        { src: galleryImg1, alt: "Branded stationery and packaging system" },
        { src: galleryImg2, alt: "Brand guidelines book spread" },
        { src: galleryImg3, alt: "Environmental branding application" },
        { src: galleryImg4, alt: "Digital brand touchpoints" },
        { src: galleryImg5, alt: "Complete identity system overview" },
      ]}
      outcomes={[
        { number: "01", text: "Complete brand identity system delivered across 40+ touchpoints." },
        { number: "02", text: "35% increase in brand recognition within target demographic." },
        { number: "03", text: "Packaging redesign led to 28% uplift in retail shelf engagement." },
      ]}
      nextProject={{ name: "The Minimalist Journal", href: "/selected-work/minimalist-journal" }}
    />
  );
}
