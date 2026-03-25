import imgImageTheUntiedHouseLogo from "@/assets/597b2f52eb51518e8e3cec8dcee65430aac321e0.png";
import { useEffect, useState } from "react";

const UNTIED_STYLES = [
  { fontWeight: 700, fontStyle: "normal" },
  { fontWeight: 400, fontStyle: "italic" },
  { fontWeight: 700, fontStyle: "italic" },
  { fontWeight: 300, fontStyle: "normal" },
  { fontWeight: 400, fontStyle: "normal" },
  { fontWeight: 300, fontStyle: "italic" },
] as const;

export default function HeroSection() {
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStyleIndex((i) => (i + 1) % UNTIED_STYLES.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const currentStyle = UNTIED_STYLES[styleIndex];

  return (
    <section className="h-[calc(100dvh-80px)] w-full px-4 sm:px-8 lg:px-[100px] py-4 sm:py-8 lg:py-10">
      <div className="flex flex-col justify-between h-full">
        {/* Heading */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-[#4C9DB0] text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[128px] leading-tight lg:leading-[128px] tracking-[-0.05em] mb-4 lg:mb-2">
            Ideas,{" "}
            <span
              style={{
                fontWeight: currentStyle.fontWeight,
                fontStyle: currentStyle.fontStyle,
                color: "#4C9DB0",
                transition: "font-weight 0.5s ease, font-style 0.3s ease",
                display: "inline-block",
              }}
            >
              untied
            </span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="shrink-0 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 pb-4">
          {/* Services List */}
          <div className="text-center lg:text-left">
            <p className="font-['Newsreader:Regular',sans-serif] font-normal text-base sm:text-lg lg:text-xl leading-relaxed text-black">
              Branding / Web Design / Print Design
              <br />
              Illustrations / Social Media + More
            </p>
          </div>

          {/* Logo */}
          <div className="shrink-0 max-w-[140px] sm:max-w-[180px] lg:max-w-[280px]">
            <img
              alt="The Untied House Logo"
              className="w-full h-auto object-contain"
              src={imgImageTheUntiedHouseLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
