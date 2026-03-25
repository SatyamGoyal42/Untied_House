import ServiceTemplate from "../components/ServiceTemplate";

import heroImg from "@/assets/services/social-media/moodboard-1.png";
import moodboard2 from "@/assets/services/social-media/moodboard-2.png";
import sharedImg1 from "@/assets/services/shared/project-1.png";
import sharedImg2 from "@/assets/services/shared/project-2.png";

export default function SocialMediaPage() {
  return (
    <ServiceTemplate
      titleLines={["Social", "Media."]}
      heroImage={heroImg}
      heroImageAlt="Social media mood and aesthetic composition"
      philosophyHeadingLines={[
        "We curate digital environments",
        "that act as virtual galleries.",
        "Presence is not about volume —",
        "it's about resonance.",
      ]}
      philosophyBody="Our social media practice treats every platform as a canvas. We develop atmospheric content strategies that maintain visual coherence while allowing room for spontaneity. Through rhythmic grid planning, tonal consistency, and purposeful storytelling, we turn feeds into immersive brand experiences."
      disciplinesLabel="Core Disciplines"
      disciplines={[
        {
          title: "Grid Architecture",
          description:
            "The feed as a curated gallery wall. We plan visual rhythms and tonal sequences that create a cohesive, scrollable narrative.",
        },
        {
          title: "Content Direction",
          description:
            "From concept to caption. We develop content pillars and creative briefs that align with your brand voice and visual identity.",
        },
        {
          title: "Community Cultivation",
          description:
            "Engagement as an art form. We foster meaningful connections through thoughtful interaction and audience-first communication.",
        },
        {
          title: "Performance & Analytics",
          description:
            "Data-informed, never data-driven. We read the metrics to refine the narrative without compromising the aesthetic vision.",
        },
      ]}
      artifactsHeading="Artifacts of Presence"
      artifacts={{
        primary: {
          src: moodboard2,
          alt: "Social media grid layout",
          label: "Grid Systems",
        },
        secondary: {
          src: sharedImg1,
          alt: "Content campaign visual",
        },
        tertiary: {
          src: sharedImg2,
          alt: "Brand storytelling on social platforms",
        },
      }}
      ctaLines={[
        "A feed should feel like",
        "a gallery, not a marketplace.",
      ]}
    />
  );
}
