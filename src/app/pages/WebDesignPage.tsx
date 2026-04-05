import ServiceTemplate from "../components/ServiceTemplate";

import heroImg from "@/assets/services/web-design/hero.png";
import a1 from "@/assets/services/web-design/a1.png";
import a2 from "@/assets/services/web-design/a2.png";
import a3 from "@/assets/services/web-design/a3.png";

export default function WebDesignPage() {
  return (
    <ServiceTemplate
      titleLines={["Web", "Design."]}
      heroImage={heroImg}
      heroImageAlt="Minimal desk composition with design elements"
      philosophyHeadingLines={[
        "We architect digital spaces that",
        "prioritize white space and",
        "typographic flow. The web should",
        "feel like a printed monograph.",
      ]}
      philosophyBody="Our web design philosophy is rooted in restraint. We believe a website should breathe — generous margins, deliberate type hierarchies, and interactions that feel inevitable rather than clever. Every pixel serves the narrative. Every scroll reveals intention."
      disciplinesLabel="Core Disciplines"
      disciplines={[
        {
          title: "UX Architecture",
          description:
            "The invisible structure. We design user flows that feel intuitive, guiding visitors through content with the precision of editorial layout.",
        },
        {
          title: "Visual Design",
          description:
            "Where typography meets interaction. We craft interfaces that honor your brand identity while pushing the boundaries of digital aesthetics.",
        },
        {
          title: "Responsive Systems",
          description:
            "One design, infinite canvases. We build fluid layouts that maintain their elegance from mobile to ultra-wide, without compromise.",
        },
        {
          title: "Development & Launch",
          description:
            "Code as craft. We translate design intent into performant, accessible front-end experiences using modern frameworks and best practices.",
        },
      ]}
      artifactsHeading="Artifacts of Experience"
      artifacts={{
        primary: {
          src: a1,
          alt: "Web design interface showcase",
          label: "Interface Design",
        },
        secondary: {
          src: a2,
          alt: "Typography system for web",
        },
        tertiary: {
          src: a3,
          alt: "Responsive design across devices",
        },
      }}
      ctaLines={[
        "A website should feel like",
        "a space, not a screen.",
      ]}
    />
  );
}
