import ServiceTemplate from "../components/ServiceTemplate";

import heroImg from "@/assets/services/photography-content/film-aesthetic.png";
import socialImg1 from "@/assets/services/social-media/moodboard-1.png";
import socialImg2 from "@/assets/services/social-media/moodboard-2.png";
import sharedImg from "@/assets/services/shared/project-1.png";

export default function PhotographyContentPage() {
  return (
    <ServiceTemplate
      titleLines={["Photography", "& Content."]}
      heroImage={heroImg}
      heroImageAlt="Film photography aesthetic composition"
      philosophyHeadingLines={[
        "We don't just capture moments;",
        "we preserve atmospheres. Every",
        "frame is a deliberate act of",
        "visual memory.",
      ]}
      philosophyBody="Our photography practice lives at the intersection of editorial precision and raw authenticity. We work with natural light, analogue textures, and a quiet patience that lets the subject speak. The result is imagery that feels timeless — never staged, always intentional."
      disciplinesLabel="Core Disciplines"
      disciplines={[
        {
          title: "Editorial Photography",
          description:
            "Long-form visual narratives for brands and publications. We bring an art-directed eye to every shoot, balancing composition with spontaneity.",
        },
        {
          title: "Product & Still Life",
          description:
            "Objects deserve presence. We photograph products as if they were sculptures — considered lighting, minimal staging, maximum impact.",
        },
        {
          title: "Content Strategy",
          description:
            "Beyond the single frame. We develop visual content systems that maintain consistency across campaigns, seasons, and platforms.",
        },
        {
          title: "Post-Production",
          description:
            "The darkroom is where mood is born. Our grading and retouching process preserves grain and warmth while ensuring every image meets the brief.",
        },
      ]}
      artifactsHeading="Artifacts of Vision"
      artifacts={{
        primary: {
          src: socialImg1,
          alt: "Atmospheric editorial photography",
          label: "Editorial Series",
        },
        secondary: {
          src: socialImg2,
          alt: "Product photography detail",
        },
        tertiary: {
          src: sharedImg,
          alt: "Content campaign overview",
        },
      }}
      ctaLines={[
        "Every frame should feel",
        "like it matters.",
      ]}
    />
  );
}
