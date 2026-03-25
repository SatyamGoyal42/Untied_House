import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <Reveal>
        <section className="flex items-center justify-center pt-16 sm:pt-20 md:pt-28 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-4">
          <div className="text-center max-w-4xl">
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#4C9DB0] leading-none">
              Who We Are
            </h1>
          </div>
        </section>
      </Reveal>

      {/* Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-start-2 md:col-span-10 lg:col-start-4 lg:col-span-6 space-y-16 sm:space-y-20 lg:space-y-24">
            <Reveal>
              <div className="text-center">
                <span className="font-['Manrope:Regular',sans-serif] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] text-[#78716c]">
                  our team operates from Delhi NCR
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-center">
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary leading-[1.15] tracking-tight">
                  We are a digital marketing and creative studio dedicated to
                  making brands visible in the digital landscape. Through
                  strategic design and thoughtful execution, we help businesses
                  tell their story and connect with their audience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-8 sm:pt-10 lg:pt-12 border-t border-[#d6d3d1]/30 text-center max-w-2xl mx-auto">
                <p className="font-['Manrope:Regular',sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl text-[#57534e] leading-relaxed font-light">
                  Minimal editorial design meets strategic thinking. We believe
                  in the power of whitespace, thoughtful typography, and clean
                  visual language to create memorable brand experiences.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
