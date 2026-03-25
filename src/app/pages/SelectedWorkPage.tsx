import { Link } from "react-router";
import Reveal from "../components/Reveal";

import imgBrandIdentity from "@/assets/services/brand-identity/stationery-design.png";
import imgWebDesign from "@/assets/services/web-design/desk-composition.png";
import imgSocialMedia from "@/assets/services/social-media/moodboard-1.png";
import imgPhotography from "@/assets/services/photography-content/film-aesthetic.png";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  tags: string[];
  aspect?: string;
  showArrow?: boolean;
  linkTo?: string;
}

function ProjectCard({
  title,
  subtitle,
  image,
  imageAlt,
  tags,
  aspect = "aspect-[4/5]",
  showArrow = false,
  linkTo,
}: ProjectCardProps) {
  const card = (
    <>
      <div className={`relative overflow-hidden ${aspect} bg-[#e8dfc0] mb-6 sm:mb-8`}>
        <img
          alt={imageAlt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
          src={image}
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#fbf2c4] text-[#1a1c1c] px-3 sm:px-4 py-1 text-[9px] sm:text-[10px] uppercase tracking-widest border border-[#d6d3d1]/40 font-body"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={`flex ${showArrow ? "justify-between" : ""} items-start`}>
        <div>
          <h3 className="font-heading text-[#4C9DB0] text-2xl sm:text-3xl mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="font-body uppercase tracking-widest text-[9px] sm:text-[10px] text-[#78716c]">
            {subtitle}
          </p>
        </div>
        {showArrow && (
          <svg
            className="w-5 h-5 text-[#1a1c1c] mt-1 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        )}
      </div>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="group block">
        {card}
      </Link>
    );
  }

  return <div className="group">{card}</div>;
}

export default function SelectedWorkPage() {
  return (
    <main className="bg-[#fbf2c4] w-full pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-[100px] pt-12 sm:pt-16 lg:pt-24 max-w-[1920px] mx-auto">
      {/* Hero Section */}
      <Reveal>
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-6">
            <div className="md:col-span-8">
              <h1 className="font-heading text-[#4C9DB0] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-6 sm:mb-8">
                Selected
                <br />
                Archives 2024
              </h1>
            </div>
            <div className="md:col-start-7 md:col-span-5 self-end">
              <p className="font-body text-[#44403c] text-base sm:text-lg leading-relaxed max-w-md">
                A curated collection of visual narratives, digital ecosystems,
                and brand identities crafted for those who value the
                intersection of art and function.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Project Grid */}
      <section>
        {/* Mobile: stacked */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:hidden">
          <Reveal>
            <ProjectCard
              title="Aura Lifestyle"
              subtitle="Defining the essence of modern living."
              image={imgBrandIdentity}
              imageAlt="Aura Lifestyle branding mockup"
              tags={["Branding", "Content"]}
              aspect="aspect-[4/5]"
              showArrow
              linkTo="/selected-work/aura-lifestyle"
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              title="The Minimalist Journal"
              subtitle="A digital space for silent reflection."
              image={imgWebDesign}
              imageAlt="Clean website interface design"
              tags={["Web Design"]}
              aspect="aspect-square"
              linkTo="/selected-work/minimalist-journal"
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              title="Urban Rhythm"
              subtitle="Capturing the pulse of the metropolis."
              image={imgSocialMedia}
              imageAlt="Dynamic social media campaign"
              tags={["Social Media", "Strategy"]}
              aspect="aspect-[3/4]"
              linkTo="/selected-work/urban-rhythm"
            />
          </Reveal>

          <Reveal>
            <ProjectCard
              title="Modern Aesthetic"
              subtitle="Visual stories told through light and shadow."
              image={imgPhotography}
              imageAlt="Editorial photography composition"
              tags={["Photography", "Content"]}
              aspect="aspect-video"
              showArrow
              linkTo="/selected-work/modern-aesthetic"
            />
          </Reveal>
        </div>

        {/* Desktop: Editorial grid */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Project 1 — large left */}
          <div className="col-span-7">
            <Reveal>
              <ProjectCard
                title="Aura Lifestyle"
                subtitle="Defining the essence of modern living."
                image={imgBrandIdentity}
                imageAlt="Aura Lifestyle branding mockup"
                tags={["Branding", "Content"]}
                aspect="aspect-[4/5]"
                showArrow
                linkTo="/selected-work/aura-lifestyle"
              />
            </Reveal>
          </div>

          {/* Project 2 — small right, vertically centered */}
          <div className="col-start-9 col-span-4 self-center">
            <Reveal delay={100}>
              <ProjectCard
                title="The Minimalist Journal"
                subtitle="A digital space for silent reflection."
                image={imgWebDesign}
                imageAlt="Clean website interface design"
                tags={["Web Design"]}
                aspect="aspect-square"
                linkTo="/selected-work/minimalist-journal"
              />
            </Reveal>
          </div>

          {/* Project 3 — left, pulled up */}
          <div className="col-span-5 mt-[-10rem]">
            <Reveal>
              <ProjectCard
                title="Urban Rhythm"
                subtitle="Capturing the pulse of the metropolis."
                image={imgSocialMedia}
                imageAlt="Dynamic social media campaign"
                tags={["Social Media", "Strategy"]}
                aspect="aspect-[3/4]"
                linkTo="/selected-work/urban-rhythm"
              />
            </Reveal>
          </div>

          {/* Project 4 — wide right */}
          <div className="col-start-7 col-span-6">
            <Reveal delay={100}>
              <ProjectCard
                title="Modern Aesthetic"
                subtitle="Visual stories told through light and shadow."
                image={imgPhotography}
                imageAlt="Editorial photography composition"
                tags={["Photography", "Content"]}
                aspect="aspect-video"
                showArrow
                linkTo="/selected-work/modern-aesthetic"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal>
        <section className="mt-32 sm:mt-48 lg:mt-64 border-t border-[#1a1c1c]/10 pt-16 sm:pt-24 lg:pt-32 text-center">
          <h2 className="font-heading text-[#4C9DB0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-12">
            Start your narrative
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-[#4C9DB0] text-[#fbf2c4] px-12 sm:px-16 py-5 sm:py-6 text-[11px] sm:text-[12px] uppercase tracking-[0.3em] font-body font-bold hover:bg-[#3a8899] transition-all duration-500"
          >
            Work with us
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
