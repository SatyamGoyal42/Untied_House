import svgPaths from "../../imports/svg-fsx3lqq6zk";
import { Link } from "react-router";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative border-b border-r border-[#d9d0a6] p-6 sm:p-8 lg:p-12 h-full min-h-[300px] sm:min-h-[320px] lg:min-h-[364px] flex flex-col">
      {/* Icon */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 30 30"
        >
          <path d={icon} fill="#443A2C" />
        </svg>
      </div>

      {/* Title */}
      <h3 className="font-heading text-[#1c1c1a] text-2xl sm:text-3xl leading-tight mb-4 sm:mb-6">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Manrope:Regular',sans-serif] font-normal text-[#4a4a46] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: svgPaths.p2328aea8,
      title: "Brand Vision",
      description: "Architecting visual identities that resonate with cultural authority.",
    },
    {
      icon: svgPaths.p152de510,
      title: (
        <>
          Visual
          <br />
          Direction
        </>
      ),
      description: "Articulating your story through cinematic photography and film.",
    },
    {
      icon: svgPaths.p1c7e080,
      title: (
        <>
          Creative
          <br />
          Strategy
        </>
      ),
      description: "Navigating the intersection of art, commerce, and human emotion.",
    },
    {
      icon: svgPaths.p28d10d80,
      title: (
        <>
          Digital
          <br />
          Artifacts
        </>
      ),
      description: "Building digital experiences that feel like fine-art monographs.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-[500px] lg:min-h-[670px] w-full px-4 sm:px-8 lg:px-[100px] py-8 sm:py-12 lg:py-[50px]"
    >
      <div className="flex flex-col justify-between h-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-8 lg:mb-12 gap-4">
          <h2 className="font-heading text-[#1c1c1a] text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] tracking-[-0.025em] leading-tight">
            Artistic Services
          </h2>
          <Link
            to="/services"
            className="font-['Manrope:Regular',sans-serif] font-normal text-[#4a4a46] text-sm sm:text-base lg:text-lg tracking-widest uppercase hover:text-[#1c1c1a] transition-colors"
          >
            Know More
          </Link>
        </div>

        {/* Services Grid */}
        <div className="border-t border-[#d9d0a6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title as string}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}