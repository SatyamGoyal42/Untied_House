import { Link } from "react-router";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  align?: "left" | "right";
  numberPosition?: "left" | "right";
  mixBlend?: boolean;
  linkTo?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  image,
  imageAlt,
  align = "left",
  numberPosition = "left",
  mixBlend = false,
  linkTo,
}: ServiceCardProps) {
  const content = (
    <>
      {/* Image Container */}
      <div className="relative bg-[#efe4c1] overflow-hidden w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[487px]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {mixBlend && (
            <div className="absolute inset-0 bg-white mix-blend-saturation pointer-events-none" />
          )}
        </div>

        {/* Number Badge */}
        <div
          className={`absolute top-6 sm:top-8 ${
            numberPosition === "right" ? "right-6 sm:right-8" : "left-6 sm:left-8"
          } ${mixBlend ? "mix-blend-difference" : ""}`}
        >
          <span
            className={`font-['Manrope:Regular',sans-serif] font-normal text-[10px] tracking-[3px] uppercase ${
              mixBlend ? "text-white" : "text-[#1a1c1c]"
            }`}
          >
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col gap-4 sm:gap-6 px-4 sm:px-0 ${
          align === "right" ? "items-end text-right" : "items-start"
        }`}
      >
        <h3 className="font-heading text-[#1a1c1c] text-3xl sm:text-4xl lg:text-[36px] leading-[1.1]">
          {title}
        </h3>
        <p
          className={`font-['Manrope:Regular',sans-serif] font-normal text-[#474747] text-sm leading-relaxed opacity-80 max-w-md ${
            align === "right" ? "text-right" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full group cursor-pointer hover:opacity-90 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
      {content}
    </div>
  );
}