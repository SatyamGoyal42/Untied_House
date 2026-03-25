import ProjectDetailTemplate from "../../components/ProjectDetailTemplate";

import heroImg from "@/assets/services/social-media/moodboard-1.png";
import creativeImg from "@/assets/services/social-media/moodboard-2.png";
import galleryImg1 from "@/assets/services/social-media/moodboard-1.png";
import galleryImg2 from "@/assets/services/social-media/moodboard-2.png";
import galleryImg3 from "@/assets/services/shared/project-1.png";
import galleryImg4 from "@/assets/services/shared/project-2.png";
import galleryImg5 from "@/assets/services/brand-identity/stationery-design.png";

export default function UrbanRhythmPage() {
  return (
    <ProjectDetailTemplate
      title="Urban Rhythm"
      heroImage={heroImg}
      heroImageAlt="Dynamic urban social media campaign aesthetic"
      tags={["Social Media", "•", "Strategy", "•", "2024"]}
      overviewText="A social-first brand presence for a contemporary urban lifestyle collective. Urban Rhythm needed a digital identity that captured the energy, pace, and raw beauty of metropolitan culture — translated into a cohesive social media ecosystem."
      problemText="Urban Rhythm's social presence was fragmented — inconsistent visuals, reactive posting, and zero grid strategy. Their audience engagement was declining despite a growing follower count, signaling a disconnect between content and community."
      objectiveText="To build a comprehensive social media system with grid architecture, content pillars, and a visual language that turns passive scrollers into engaged community members."
      creativeHeading="Controlled Chaos"
      creativeBody="We developed a visual system that balances the raw energy of street photography with the discipline of editorial grid planning. The feed alternates between high-contrast documentary imagery and carefully composed negative space cards, creating a visual rhythm that rewards the scroll. Tonal consistency was achieved through a custom color grading preset applied across all imagery, unifying diverse urban environments under a single atmospheric signature."
      creativeImage={creativeImg}
      creativeImageAlt="Social media mood board and grid planning"
      colorSwatches={["#1a1c1c", "#4C9DB0", "#e9e1c2", "#78716c"]}
      galleryImages={[
        { src: galleryImg1, alt: "Social media grid overview" },
        { src: galleryImg2, alt: "Content pillar examples" },
        { src: galleryImg3, alt: "Story and reel templates" },
        { src: galleryImg4, alt: "Community engagement highlights" },
        { src: galleryImg5, alt: "Brand integration across platforms" },
      ]}
      outcomes={[
        { number: "01", text: "180% increase in engagement rate within first quarter." },
        { number: "02", text: "Community grew from 2K to 15K organic followers in 6 months." },
        { number: "03", text: "Content save rate increased by 340%, indicating high-value perception." },
      ]}
      nextProject={{ name: "Modern Aesthetic", href: "/selected-work/modern-aesthetic" }}
    />
  );
}
