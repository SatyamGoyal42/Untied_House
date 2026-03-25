import ServiceTemplate from "../components/ServiceTemplate";

import heroImg from "@/assets/services/brand-identity/hero.png";
import packagingImg from "@/assets/services/brand-identity/packaging-mockup.png";
import typographyImg from "@/assets/services/brand-identity/typography-detail.png";
import guidelinesImg from "@/assets/services/brand-identity/guidelines-book.png";

export default function BrandIdentityPage() {
  return (
    <ServiceTemplate
      titleLines={["Brand", "Identity."]}
      heroImage={heroImg}
      heroImageAlt="Brand identity minimalist composition"
      philosophyHeadingLines={[
        "We don't build logos; we curate",
        "legacies. A brand is a quiet",
        "conversation between an object",
        "and its observer.",
      ]}
      philosophyBody="Our approach to identity is reductive yet resonant. We strip away the noise of trends to uncover the structural soul of your vision. Through a lens of architectural precision and editorial sensitivity, we craft visual systems that breathe, evolve, and endure."
      disciplinesLabel="Core Disciplines"
      disciplines={[
        {
          title: "Logo & Logotype",
          description:
            "The singular anchor of your visual existence. Minimalist, scalable, and conceptually weighted.",
        },
        {
          title: "Typography Systems",
          description:
            "The voice of your brand. We curate and customize typefaces that carry your narrative across every medium.",
        },
        {
          title: "Visual Strategy",
          description:
            "A psychological blueprint. Defining the mood, motion, and emotional resonance of your presence.",
        },
        {
          title: "Brand Guidelines",
          description:
            "The studio bible. Comprehensive standards for maintaining visual integrity across global touchpoints.",
        },
      ]}
      artifactsHeading="Artifacts of Identity"
      artifacts={{
        primary: {
          src: packagingImg,
          alt: "Branded stationary and packaging mockup",
          label: "Packaging Systems",
        },
        secondary: {
          src: typographyImg,
          alt: "Typography detail on a card",
        },
        tertiary: {
          src: guidelinesImg,
          alt: "Brand guidelines book open",
        },
      }}
      ctaLines={[
        "Every great vision deserves",
        "a distinct silhouette.",
      ]}
    />
  );
}
