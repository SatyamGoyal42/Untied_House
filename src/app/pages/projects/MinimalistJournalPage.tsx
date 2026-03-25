import ProjectDetailTemplate from "../../components/ProjectDetailTemplate";

import heroImg from "@/assets/services/web-design/desk-composition.png";
import creativeImg from "@/assets/services/brand-identity/typography-detail.png";
import galleryImg1 from "@/assets/services/web-design/desk-composition.png";
import galleryImg2 from "@/assets/services/brand-identity/guidelines-book.png";
import galleryImg3 from "@/assets/services/brand-identity/stationery-design.png";
import galleryImg4 from "@/assets/services/social-media/moodboard-2.png";
import galleryImg5 from "@/assets/services/brand-identity/packaging-mockup.png";

export default function MinimalistJournalPage() {
  return (
    <ProjectDetailTemplate
      title="The Minimalist Journal"
      heroImage={heroImg}
      heroImageAlt="Modern minimalist workspace with laptop and journal"
      tags={["Editorial Design", "•", "Identity", "•", "2024"]}
      overviewText="A digital-first publication rethinking the boundaries between silence and communication. The Minimalist Journal is a curation of essential thought, designed to reduce cognitive load while maximizing intellectual impact."
      problemText="The client faced extreme digital noise within the editorial space. Their existing platform was cluttered with ad-revenue-focused UI, which actively fought against their core message of 'intentional living.' They required a radical shift toward functional emptiness."
      objectiveText="To construct a digital architecture that serves as a quiet background for complex long-form essays, utilizing high-end typography and negative space as primary design tools."
      creativeHeading="Intentional Asymmetry"
      creativeBody="Our approach leaned into the 'Digital Curator' persona. We abandoned the standard 12-column grid in favor of a bespoke, rhythm-based layout. By using large-scale Newsreader serifs against clinical Manrope sans-serifs, we created a visual tension that mimics high-end architecture monographs. The color palette was restricted to pure primary black and warm surface tones, allowing the occasional high-resolution photography to serve as the only focal point of warmth and texture."
      creativeImage={creativeImg}
      creativeImageAlt="Type specimen and paper texture detail"
      colorSwatches={["#1a1c1c", "#e9e1c2", "#ffffff", "#57534e"]}
      galleryImages={[
        { src: galleryImg1, alt: "Website mockup on desktop" },
        { src: galleryImg2, alt: "Editorial layout spread" },
        { src: galleryImg3, alt: "Mobile interface design" },
        { src: galleryImg4, alt: "Social media content tiles" },
        { src: galleryImg5, alt: "Branding elements overview" },
      ]}
      outcomes={[
        { number: "01", text: "40% increase in reading duration per session." },
        { number: "02", text: "Reduced bounce rate by 25% through simplified navigation." },
        { number: "03", text: "Awwwards Honorable Mention for Editorial UX." },
      ]}
      nextProject={{ name: "Urban Rhythm", href: "/selected-work/urban-rhythm" }}
    />
  );
}
