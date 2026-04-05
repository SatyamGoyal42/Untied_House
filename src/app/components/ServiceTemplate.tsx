import { useEffect, useRef } from "react";
import { Link } from "react-router";
import Reveal from "./Reveal";

export interface Discipline {
  title: string;
  description: string;
}

export interface ArtifactImage {
  src: string;
  alt: string;
  label?: string;
}

export interface ServiceTemplateProps {
  titleLines: string[];
  heroImage: string;
  heroImageAlt: string;
  philosophyHeadingLines: string[];
  philosophyBody: string;
  disciplinesLabel: string;
  disciplines: Discipline[];
  artifactsHeading: string;
  artifacts: {
    primary: ArtifactImage;
    secondary: ArtifactImage;
    tertiary: ArtifactImage;
  };
  ctaLines: string[];
}

function DisciplineCard({ title, description }: Discipline) {
  return (
    <div className="border-t border-[rgba(41,37,36,0.2)] pt-6 sm:pt-8 flex flex-col gap-3 sm:gap-4">
      <h3 className="font-heading font-extralight text-[#1a1c1c] text-xl sm:text-2xl leading-tight">
        {title}
      </h3>
      <p className="font-body font-normal text-[#3b3b3b] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ServiceTemplate({
  titleLines,
  heroImage,
  heroImageAlt,
  philosophyHeadingLines,
  philosophyBody,
  disciplinesLabel,
  disciplines,
  artifactsHeading,
  artifacts,
  ctaLines,
}: ServiceTemplateProps) {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const img = heroImgRef.current;
      const section = heroSectionRef.current;
      if (!img || !section) return;

      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) return;

      const progress = scrolled / section.offsetHeight;
      const translateY = scrolled * 0.35;
      const scale = 1 + progress * 0.08;

      img.style.transform = `translateY(${translateY}px) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#fbf2c4] w-full">
      <div className="flex flex-col gap-0">
        {/* Hero */}
        <Reveal>
          <section className="bg-[#fbf2c4] w-full">
            <div ref={heroSectionRef} className="relative w-full h-[600px] sm:h-[800px] lg:h-[1207px] overflow-hidden">
              <img
                ref={heroImgRef}
                alt={heroImageAlt}
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                style={{ transformOrigin: "center top" }}
                src={heroImage}
              />
              <div className="relative h-full px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-[50px] flex flex-col items-start justify-end">
                <div className="w-full">
                  <h1 className="font-heading font-extralight text-[#4C9DB0] text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[160px] leading-tight lg:leading-[160px] tracking-[-0.05em]">
                    {titleLines.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Philosophy */}
        <Reveal>
          <section className="bg-[#4C9DB0] w-full px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px]">
            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
              <h2 className="font-heading font-extralight text-[#fbf2c4] text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] leading-tight lg:leading-[48px]">
                {philosophyHeadingLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <div className="max-w-2xl">
                <p className="font-body font-normal text-[#fbf2c4]/80 text-base sm:text-lg leading-relaxed">
                  {philosophyBody}
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Disciplines */}
        <Reveal>
          <section className="bg-[#fbf2c4] w-full px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px]">
            <div className="lg:hidden flex flex-col gap-8 sm:gap-12">
              <p className="font-body font-normal text-[#443a2c] text-[10px] tracking-[4px] uppercase">
                {disciplinesLabel}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-12">
                {disciplines.map((d, i) => (
                  <DisciplineCard key={i} {...d} />
                ))}
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="col-span-4 flex flex-col justify-start">
                <p className="font-body font-normal text-[#443a2c] text-[10px] tracking-[4px] uppercase">
                  {disciplinesLabel}
                </p>
              </div>
              <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-16">
                {disciplines.map((d, i) => (
                  <DisciplineCard key={i} {...d} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Artifacts */}
        <Reveal>
          <section className="bg-[#4C9DB0] w-full px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px]">
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20">
              <h2 className="font-heading font-extralight text-[#fbf2c4] text-3xl sm:text-4xl lg:text-[36px] leading-tight">
                {artifactsHeading}
              </h2>

              {/* Mobile */}
              <div className="flex flex-col gap-4 lg:hidden">
                <div className="relative bg-[#3a8899] aspect-[4/3] overflow-hidden">
                  <img
                    src={artifacts.primary.src}
                    alt={artifacts.primary.alt}
                    className="w-full h-full object-cover"
                  />
                  {artifacts.primary.label && (
                    <div className="absolute bottom-4 left-4">
                      <div className="backdrop-blur-[4px] bg-[rgba(76,157,176,0.85)] px-6 py-2">
                        <p className="font-body font-bold text-[#fbf2c4] text-[10px] tracking-[1px] uppercase">
                          {artifacts.primary.label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-[#3a8899] aspect-square overflow-hidden">
                  <img
                    src={artifacts.secondary.src}
                    alt={artifacts.secondary.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#3a8899] aspect-square overflow-hidden">
                  <img
                    src={artifacts.tertiary.src}
                    alt={artifacts.tertiary.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:gap-8 lg:h-[800px]">
                <div className="col-span-8 relative bg-[#3a8899] overflow-hidden min-h-0">
                  <img
                    src={artifacts.primary.src}
                    alt={artifacts.primary.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {artifacts.primary.label && (
                    <div className="absolute bottom-8 left-8">
                      <div className="backdrop-blur-[4px] bg-[rgba(76,157,176,0.85)] px-6 py-2">
                        <p className="font-body font-bold text-[#fbf2c4] text-[10px] tracking-[1px] uppercase">
                          {artifacts.primary.label}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-span-4 flex flex-col gap-8 min-h-0">
                  <div className="relative flex-1 bg-[#3a8899] overflow-hidden min-h-0">
                    <img
                      src={artifacts.secondary.src}
                      alt={artifacts.secondary.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative flex-1 bg-[#3a8899] overflow-hidden min-h-0">
                    <img
                      src={artifacts.tertiary.src}
                      alt={artifacts.tertiary.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="bg-[#4C9DB0] w-full px-4 sm:px-8 lg:px-[100px] py-16 sm:py-20 lg:py-[50px]">
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 text-center max-w-5xl mx-auto">
              <h2 className="font-heading font-extralight text-[#fbf2c4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight lg:leading-[72px]">
                {ctaLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <Link
                to="/contact"
                className="bg-[#fbf2c4] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 hover:bg-[#f5ecb8] transition-colors"
              >
                <span className="font-body font-bold text-[#4C9DB0] text-xs sm:text-sm tracking-[4.2px] uppercase">
                  Start a project
                </span>
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
