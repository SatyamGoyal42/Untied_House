import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WorkSection from "../components/WorkSection";
import CTASection from "../components/CTASection";
import Reveal from "../components/Reveal";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12 sm:gap-16 lg:gap-24 xl:gap-[100px] pt-8 sm:pt-12 lg:pt-24">
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <WorkSection />
      </Reveal>
      <Reveal>
        <CTASection />
      </Reveal>
    </main>
  );
}
