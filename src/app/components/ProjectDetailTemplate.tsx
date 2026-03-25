import { Link } from "react-router";
import Reveal from "./Reveal";

export interface OutcomeItem {
  number: string;
  text: string;
}

export interface ProjectDetailProps {
  title: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  overviewText: string;
  problemText: string;
  objectiveText: string;
  creativeHeading: string;
  creativeBody: string;
  creativeImage: string;
  creativeImageAlt: string;
  colorSwatches: string[];
  galleryImages: { src: string; alt: string }[];
  outcomes: OutcomeItem[];
  nextProject?: { name: string; href: string };
}

export default function ProjectDetailTemplate({
  title,
  heroImage,
  heroImageAlt,
  tags,
  overviewText,
  problemText,
  objectiveText,
  creativeHeading,
  creativeBody,
  creativeImage,
  creativeImageAlt,
  colorSwatches,
  galleryImages,
  outcomes,
  nextProject,
}: ProjectDetailProps) {
  return (
    <main className="bg-[#fbf2c4] w-full">
      {/* Hero */}
      <section className="w-full h-[60vh] sm:h-[70vh] lg:h-[921px] relative bg-[#e8dfc0] overflow-hidden">
        <img
          alt={heroImageAlt}
          className="w-full h-full object-cover"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/40 to-transparent" />
        <div className="absolute bottom-10 sm:bottom-16 lg:bottom-20 left-4 sm:left-8 lg:left-24 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-body uppercase tracking-[0.3em] text-[10px] sm:text-[12px] text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-[#fbf2c4] text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tight leading-[0.9]">
            {title}
          </h1>
        </div>
      </section>

      {/* Overview & Objective */}
      <Reveal>
        <section className="py-16 sm:py-24 lg:py-[8.5rem] px-4 sm:px-8 max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            <div className="md:col-span-5">
              <span className="font-body uppercase tracking-widest text-[10px] text-[#1a1c1c] mb-6 sm:mb-8 block">
                Project Overview
              </span>
              <p className="font-heading text-2xl sm:text-3xl md:text-4xl leading-snug text-[#1a1c1c]">
                {overviewText}
              </p>
            </div>
            <div className="md:col-start-8 md:col-span-4 self-center space-y-8 sm:space-y-12">
              <div>
                <span className="font-body uppercase tracking-widest text-[10px] text-[#78716c] mb-3 sm:mb-4 block">
                  The Problem
                </span>
                <p className="font-body text-[#57534e] leading-relaxed">
                  {problemText}
                </p>
              </div>
              <div>
                <span className="font-body uppercase tracking-widest text-[10px] text-[#78716c] mb-3 sm:mb-4 block">
                  The Objective
                </span>
                <p className="font-body text-[#57534e] leading-relaxed">
                  {objectiveText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Creative Approach */}
      <Reveal>
        <section className="bg-[#4C9DB0] py-16 sm:py-24 lg:py-[8.5rem] px-4 sm:px-8">
          <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <img
                alt={creativeImageAlt}
                className="w-full aspect-square object-cover grayscale"
                src={creativeImage}
              />
            </div>
            <div className="order-1 md:order-2 md:px-12">
              <span className="font-body uppercase tracking-widest text-[10px] text-[#fbf2c4]/70 mb-6 sm:mb-8 block">
                Creative Direction
              </span>
              <h2 className="font-heading text-[#fbf2c4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 sm:mb-8">
                {creativeHeading}
              </h2>
              <p className="font-body text-base sm:text-lg leading-loose text-[#fbf2c4]/80 mb-8 sm:mb-12">
                {creativeBody}
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                {colorSwatches.map((color) => (
                  <div
                    key={color}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Final Visuals */}
      <Reveal>
        <section className="py-16 sm:py-24 lg:py-[8.5rem] px-4 sm:px-8 max-w-[1920px] mx-auto">
          <div className="mb-10 sm:mb-16">
            <span className="font-body uppercase tracking-widest text-[10px] text-[#1a1c1c] block mb-2">
              Portfolio
            </span>
            <h2 className="font-heading text-[#4C9DB0] text-3xl sm:text-4xl">
              Final Artifacts
            </h2>
          </div>

          {/* Mobile: stacked */}
          <div className="flex flex-col gap-4 md:hidden">
            {galleryImages.map((img, i) => (
              <div key={i} className="bg-[#e8dfc0] overflow-hidden aspect-[4/3]">
                <img
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={img.src}
                />
              </div>
            ))}
          </div>

          {/* Desktop: bento grid */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-6 md:h-[1200px]">
            {galleryImages[0] && (
              <div className="col-span-8 row-span-2 bg-[#e8dfc0] overflow-hidden">
                <img
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={galleryImages[0].src}
                />
              </div>
            )}
            {galleryImages[1] && (
              <div className="col-span-4 bg-[#e8dfc0] overflow-hidden">
                <img
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={galleryImages[1].src}
                />
              </div>
            )}
            {galleryImages[2] && (
              <div className="col-span-4 bg-[#e8dfc0] overflow-hidden">
                <img
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={galleryImages[2].src}
                />
              </div>
            )}
            {galleryImages[3] && (
              <div className="col-span-4 bg-[#e8dfc0] overflow-hidden">
                <img
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={galleryImages[3].src}
                />
              </div>
            )}
            {galleryImages[4] && (
              <div className="col-span-8 bg-[#e8dfc0] overflow-hidden">
                <img
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src={galleryImages[4].src}
                />
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* Key Outcomes */}
      <Reveal>
        <section className="py-16 sm:py-24 lg:py-[8.5rem] px-4 sm:px-8">
          <div className="max-w-[1920px] mx-auto border-t border-[#d6d3d1]/40 pt-12 sm:pt-16 lg:pt-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
              <div className="md:col-span-4">
                <h2 className="font-heading text-[#4C9DB0] text-4xl sm:text-5xl tracking-tight">
                  The Impact
                </h2>
              </div>
              <div className="md:col-span-8">
                <ul className="space-y-8 sm:space-y-12">
                  {outcomes.map((item) => (
                    <li
                      key={item.number}
                      className="flex items-start gap-6 sm:gap-8 border-b border-[#d6d3d1]/40 pb-6 sm:pb-8 group"
                    >
                      <span className="font-body uppercase tracking-widest text-[10px] text-[#1a1c1c] shrink-0 pt-2">
                        {item.number}
                      </span>
                      <p className="font-heading text-xl sm:text-2xl lg:text-3xl group-hover:italic transition-all text-[#1a1c1c] flex-1">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="py-16 sm:py-24 lg:py-[8.5rem] px-4 sm:px-8 text-center bg-[#4C9DB0]">
          <span className="font-body uppercase tracking-[0.4em] text-[10px] text-[#fbf2c4]/60 block mb-8 sm:mb-12">
            Ready to begin your journey?
          </span>
          <h2 className="font-heading text-[#fbf2c4] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-10 sm:mb-16">
            Work with Us
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <Link
              to="/contact"
              className="bg-[#fbf2c4] text-[#4C9DB0] px-12 sm:px-16 py-5 sm:py-6 font-body uppercase tracking-[0.2em] text-[12px] font-bold hover:bg-[#f5ecb8] transition-colors w-full sm:w-auto text-center"
            >
              Contact Studio
            </Link>
            {nextProject && (
              <Link
                to={nextProject.href}
                className="font-body uppercase tracking-[0.2em] text-[12px] text-[#fbf2c4] border-b border-[#fbf2c4] pb-1 hover:text-[#fbf2c4]/70 transition-colors"
              >
                Next Project: {nextProject.name}
              </Link>
            )}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
