import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router";
import Reveal from "../components/Reveal";
import imgMinimalistAbstractStationeryDesign from "@/assets/ffdca05d0b255c924a812a291942801ac24a3ef7.png";
import imgFilmPhotographyAesthetic from "@/assets/befe110adf46bbe8e52ba72cd40c9f441f6d5b56.png";
import imgSocialMoodboard1 from "@/assets/33da0c2ace0a31e59d2b26072e71bbdede11ef69.png";
import imgSocialMoodboard2 from "@/assets/82e72020d821db64eda82ac290f19ce07a0ef5a9.png";
import imgMinimalDeskComposition from "@/assets/14c123521f0585174c20aaa40f4fcc852c315e35.png";

export default function ServicesPage() {
  return (
    <main className="w-full py-8 sm:py-12 lg:py-[97px]">
      <div className="max-w-[1920px] mx-auto">
        {/* Header Section */}
        <Reveal>
          <section className="px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-[50px]">
            <div className="flex flex-col gap-6 lg:gap-6 items-center text-center max-w-5xl mx-auto">
              <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#443a2c] text-[10px] tracking-[4px] uppercase">
                Capabilities & Craft
              </p>
              <h1 className="font-heading text-[#4C9DB0] text-4xl sm:text-6xl lg:text-8xl xl:text-[96px] leading-tight lg:leading-[96px] tracking-[-0.025em]">
                We craft narratives for the
                <br />
                <span className="font-['Newsreader:Light',sans-serif] font-light not-italic">
                  modern aesthetic.
                </span>
              </h1>
            </div>
          </section>
        </Reveal>

        {/* Services Grid */}
        <Reveal>
        <section className="px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px]">
          {/* Mobile & Tablet: Stack vertically */}
          <div className="flex flex-col gap-16 sm:gap-20 lg:hidden">
            <ServiceCard
              number="01"
              title="Brand Identity"
              description="Defining visual languages through intentional typography and a curated color philosophy. We build lasting legacies for brands that value silence as much as statement."
              image={imgMinimalistAbstractStationeryDesign}
              imageAlt="Minimalist abstract stationery design"
              mixBlend={true}
              linkTo="/services/brand-identity"
            />

            <ServiceCard
              number="02"
              title="Photography & Content"
              description="Visual storytelling captured on film. We embrace the grain, the light leaks, and the imperfect moments that create a true human connection."
              image={imgFilmPhotographyAesthetic}
              imageAlt="Film photography aesthetic"
              numberPosition="right"
              linkTo="/services/photography-content"
            />

            {/* Social Media - Special Layout */}
            <Link to="/services/social-media" className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full group cursor-pointer hover:opacity-90 transition-opacity">
              <div className="grid grid-cols-2 gap-4 bg-[#efe4c1] overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={imgSocialMoodboard1}
                    alt="Social moodboard 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    src={imgSocialMoodboard2}
                    alt="Social moodboard 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="flex items-start gap-4 sm:gap-8">
                  <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#1a1c1c] text-[10px] tracking-[3px] uppercase whitespace-nowrap">
                    03
                  </span>
                  <h3 className="font-heading text-[#1a1c1c] text-3xl sm:text-4xl lg:text-[36px] leading-[1.1]">
                    Social Media
                  </h3>
                </div>
                <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#474747] text-sm leading-relaxed opacity-80 max-w-md">
                  Curating digital environments that act as virtual galleries. We
                  manage presence through atmospheric imagery and rhythmic grid
                  planning.
                </p>
              </div>
            </Link>

            <ServiceCard
              number="04"
              title="Web Design"
              description="Architecting digital spaces that prioritize white space and typographic flow. Our sites are built to feel like high-end printed monographs."
              image={imgMinimalDeskComposition}
              imageAlt="Minimal desk composition"
              align="right"
              numberPosition="right"
              mixBlend={true}
              linkTo="/services/web-design"
            />
          </div>

          {/* Desktop: Asymmetric Grid */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-[194px]">
            {/* Brand Identity - Large Left */}
            <div className="col-span-7">
              <ServiceCard
                number="01"
                title="Brand Identity"
                description="Defining visual languages through intentional typography and a curated color philosophy. We build lasting legacies for brands that value silence as much as statement."
                image={imgMinimalistAbstractStationeryDesign}
                imageAlt="Minimalist abstract stationery design"
                mixBlend={true}
                linkTo="/services/brand-identity"
              />
            </div>

            {/* Photography - Smaller Right, Offset */}
            <div className="col-span-4 col-start-9 pt-32">
              <ServiceCard
                number="02"
                title="Photography & Content"
                description="Visual storytelling captured on film. We embrace the grain, the light leaks, and the imperfect moments that create a true human connection."
                image={imgFilmPhotographyAesthetic}
                imageAlt="Film photography aesthetic"
                numberPosition="right"
                linkTo="/services/photography-content"
              />
            </div>

            {/* Social Media - Centered Wide */}
            <div className="col-span-8 col-start-2">
              <Link to="/services/social-media" className="flex flex-col gap-12 w-full group cursor-pointer hover:opacity-90 transition-opacity">
                <div className="grid grid-cols-2 gap-4 bg-[#efe4c1]">
                  <div className="aspect-square">
                    <img
                      src={imgSocialMoodboard1}
                      alt="Social moodboard 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square">
                    <img
                      src={imgSocialMoodboard2}
                      alt="Social moodboard 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-8">
                  <div className="flex items-start gap-4">
                    <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#1a1c1c] text-[10px] tracking-[3px] uppercase">
                      03
                    </span>
                    <h3 className="font-heading text-[#1a1c1c] text-[36px] leading-[40px]">
                      Social Media
                    </h3>
                  </div>
                  <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#474747] text-sm leading-relaxed opacity-80 max-w-md">
                    Curating digital environments that act as virtual galleries. We
                    manage presence through atmospheric imagery and rhythmic grid
                    planning.
                  </p>
                </div>
              </Link>
            </div>

            {/* Web Design - Right Aligned */}
            <div className="col-span-5 col-start-7">
              <ServiceCard
                number="04"
                title="Web Design"
                description="Architecting digital spaces that prioritize white space and typographic flow. Our sites are built to feel like high-end printed monographs."
                image={imgMinimalDeskComposition}
                imageAlt="Minimal desk composition"
                align="right"
                numberPosition="right"
                mixBlend={true}
                linkTo="/services/web-design"
              />
            </div>
          </div>
        </section>
        </Reveal>

        {/* CTA Section */}
        <Reveal>
        <section className="bg-[#4C9DB0] w-full min-h-[500px] lg:min-h-[670px] px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px] flex items-center justify-center">
          <div className="max-w-[896px] w-full flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 text-center">
            <h2 className="font-heading text-[#fbf2c4] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[84px] tracking-[-0.025em]">
              Every project starts with a conversation
              <br />
              about light, shadow, and
              <br />
              intent.
            </h2>

            <Link
              to="/contact"
              className="inline-block bg-[#fbf2c4] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 hover:bg-[#f5ecb8] transition-colors group"
            >
              <span className="font-['Manrope:Regular',sans-serif] font-bold text-[#4C9DB0] text-base sm:text-lg lg:text-2xl xl:text-[28px] tracking-widest uppercase group-hover:tracking-[0.15em] transition-all">
                Book a Consultation
              </span>
            </Link>
          </div>
        </section>
        </Reveal>
      </div>
    </main>
  );
}