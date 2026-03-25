import imgProject1 from "@/assets/53e041adf290573f894db1ac0e9c0cab0d636c37.png";
import imgProject2 from "@/assets/06a6774d1510c629b25c8f2678652fc7e82e506e.png";
import svgPaths from "../../imports/svg-fsx3lqq6zk";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  badge?: string;
  className?: string;
}

function ProjectCard({ image, title, category, badge, className = "" }: ProjectCardProps) {
  return (
    <div className={`flex flex-col gap-6 sm:gap-8 ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden group cursor-pointer">
        <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {badge && (
          <div className="absolute top-6 left-6 sm:top-7 sm:left-8 bg-[#1c1c1a] px-3 sm:px-4 py-1.5 sm:py-2">
            <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#fbf2c4] text-[10px] tracking-wider uppercase">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-[#1c1c1a] text-2xl sm:text-3xl lg:text-4xl leading-tight mb-2">
            {title}
          </h3>
          <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#4a4a46] text-xs sm:text-sm tracking-widest uppercase">
            {category}
          </p>
        </div>
        <div className="flex-shrink-0 w-3 h-3 mt-2">
          <svg className="w-full h-full" fill="none" viewBox="0 0 12 12">
            <path d={svgPaths.p13fa1c00} fill="#1C1C1A" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="w-full px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24">
          {/* Project 1 - Takes more space on desktop */}
          <div className="lg:col-span-6">
            <ProjectCard
              image={imgProject1}
              title="Modern Alchemy"
              category="Brand Narrative & Film"
              badge="SS — 25"
            />
          </div>

          {/* Project 2 - Offset on desktop */}
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-24 xl:pt-48">
            <ProjectCard
              image={imgProject2}
              title="Vesper Light"
              category="Art Direction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
