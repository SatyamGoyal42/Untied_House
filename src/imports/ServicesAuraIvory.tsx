import imgMinimalistAbstractStationeryDesign from "figma:asset/ffdca05d0b255c924a812a291942801ac24a3ef7.png";
import imgFilmPhotographyAesthetic from "figma:asset/befe110adf46bbe8e52ba72cd40c9f441f6d5b56.png";
import imgSocialMoodboard1 from "figma:asset/33da0c2ace0a31e59d2b26072e71bbdede11ef69.png";
import imgSocialMoodboard2 from "figma:asset/82e72020d821db64eda82ac290f19ce07a0ef5a9.png";
import imgMinimalDeskComposition from "figma:asset/14c123521f0585174c20aaa40f4fcc852c315e35.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#443a2c] text-[10px] tracking-[4px] uppercase w-full">
        <p className="leading-[15px]">{`Capabilities & Craft`}</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[25px] relative text-[#1a1c1c] text-[96px] tracking-[-2.4px] w-full whitespace-nowrap">
          <div className="flex flex-col font-['Newsreader:Italic',sans-serif] font-normal italic justify-center leading-[96px] relative shrink-0">
            <p className="mb-0">We craft narratives for</p>
            <p>the</p>
          </div>
          <div className="flex flex-col font-['Newsreader:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0">
            <p className="leading-[96px]">modern aesthetic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header - Hero Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center px-[100px] py-[50px] relative w-full">
          <Container />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function MinimalistAbstractStationeryDesign() {
  return (
    <div className="h-[487.66px] relative shrink-0 w-full" data-name="Minimalist abstract stationery design">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[145.46%] left-0 max-w-none top-[-22.73%] w-full" src={imgMinimalistAbstractStationeryDesign} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] mix-blend-difference top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[3px] w-[16.02px]">
        <p className="leading-[15px]">01</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#efe4c1] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <MinimalistAbstractStationeryDesign />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] w-full">
        <p className="leading-[40px]">Brand Identity</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#474747] text-[14px] tracking-[0.35px] w-full">
        <p className="mb-0">Defining visual languages through intentional typography and a</p>
        <p className="mb-0">curated color philosophy. We build lasting legacies for brands that</p>
        <p>value silence as much as statement.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[22.75px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <Heading1 />
      <Container3 />
    </div>
  );
}

function Section01BrandIdentityLargeLeft() {
  return (
    <div className="col-[1/span_7] content-stretch flex flex-col gap-[48px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Section - 01 Brand Identity (Large Left)">
      <Background />
      <Container2 />
    </div>
  );
}

function FilmPhotographyAesthetic() {
  return (
    <div className="h-[540.45px] relative shrink-0 w-full" data-name="Film photography aesthetic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgFilmPhotographyAesthetic} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[31.66px] top-[32px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[10px] tracking-[3px] w-[17.81px]">
        <p className="leading-[15px]">02</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#efe4c1] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <FilmPhotographyAesthetic />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] w-full">
        <p className="leading-[40px]">{`Photography & Content`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#474747] text-[14px] tracking-[0.35px] w-full">
        <p className="mb-0">Visual storytelling captured on film. We embrace the grain,</p>
        <p className="mb-0">the light leaks, and the imperfect moments that create a</p>
        <p>true human connection.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[22.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container6 />
    </div>
  );
}

function Section02PhotographySmallerRightOffset() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-end relative shrink-0 w-[360px]" data-name="Section - 02 Photography (Smaller Right, Offset)">
      <Background1 />
      <Container5 />
    </div>
  );
}

function Section02PhotographySmallerRightOffsetMargin() {
  return (
    <div className="col-[9/span_4] justify-self-start relative row-1 self-stretch shrink-0" data-name="Section - 02 Photography (Smaller Right, Offset):margin">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pt-[128px] relative">
          <Section02PhotographySmallerRightOffset />
        </div>
      </div>
    </div>
  );
}

function SocialMoodboard() {
  return (
    <div className="h-[397.33px] relative shrink-0 w-full" data-name="Social moodboard 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSocialMoodboard1} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#efe4c1] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Background">
      <SocialMoodboard />
    </div>
  );
}

function SocialMoodboard1() {
  return (
    <div className="h-[397.34px] relative shrink-0 w-full" data-name="Social moodboard 2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSocialMoodboard2} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#efe4c1] col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Background">
      <SocialMoodboard1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_397.34px] h-[397.344px] relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[10px] tracking-[3px] w-[17.64px]">
        <p className="leading-[15px]">03</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] w-[188.56px]">
        <p className="leading-[40px]">Social Media</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 top-0 w-[188.56px]" data-name="Container">
      <Container10 />
      <Heading3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[362.67px] max-w-[448px] opacity-80 pr-[1.39px] top-[-1.25px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#474747] text-[14px] tracking-[0.35px] w-[446.61px]">
        <p className="mb-0">Curating digital environments that act as virtual galleries. We</p>
        <p className="mb-0">manage presence through atmospheric imagery and rhythmic grid</p>
        <p>planning.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Section03SocialMediaCenteredIshWide() {
  return (
    <div className="col-[2/span_8] content-stretch flex flex-col gap-[48.01px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Section - 03 Social Media (Centered-ish, Wide)">
      <Container7 />
      <Container8 />
    </div>
  );
}

function MinimalDeskComposition() {
  return (
    <div className="h-[316.66px] relative shrink-0 w-full" data-name="Minimal desk composition">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgMinimalDeskComposition} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#efe4c1] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Background">
      <MinimalDeskComposition />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[10px] text-right tracking-[3px] w-[18px]">
        <p className="leading-[15px]">04</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[36px] text-right w-[169.55px]">
        <p className="leading-[40px]">Web Design</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-end opacity-80 pt-[6.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#474747] text-[14px] text-right tracking-[0.35px] w-[378.88px]">
        <p className="mb-0">Architecting digital spaces that prioritize white space</p>
        <p className="mb-0">and typographic flow. Our sites are built to feel like high-</p>
        <p>end printed monographs.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[384px] relative shrink-0 w-[384px]" data-name="Container">
      <Container13 />
      <Heading4 />
      <Container14 />
    </div>
  );
}

function Section04WebDesignRightAlignedVertical() {
  return (
    <div className="col-[7/span_5] content-stretch flex flex-col gap-[47.99px] items-end justify-self-stretch relative row-3 self-start shrink-0" data-name="Section - 04 Web Design (Right-aligned, Vertical)">
      <Background4 />
      <Container12 />
    </div>
  );
}

function ServicesGridAsymmetrical() {
  return (
    <div className="relative shrink-0 w-full" data-name="Services Grid: Asymmetrical">
      <div className="gap-y-[194px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___848.70px_516.34px_527.91px] px-[100px] py-[50px] relative w-full">
        <Section01BrandIdentityLargeLeft />
        <Section02PhotographySmallerRightOffsetMargin />
        <Section03SocialMediaCenteredIshWide />
        <Section04WebDesignRightAlignedVertical />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium_Italic',sans-serif] font-medium italic justify-center leading-[84px] relative shrink-0 text-[#fbf2c4] text-[56px] text-center whitespace-nowrap whitespace-pre">
        <p className="mb-0">Every project starts with a conversation</p>
        <p className="mb-0">{` about light, shadow, and`}</p>
        <p>intent.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center px-[65px] py-[25px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(251,242,196,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbf2c4] text-[28px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Book a Consultation</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[443px] items-center justify-between max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Link />
    </div>
  );
}

function Section5BoldCta() {
  return (
    <div className="bg-[#1c1c1a] h-[670px] relative shrink-0 w-full" data-name="Section 5: Bold CTA">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[100px] py-[50px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[227px] items-center justify-center max-w-[1920px] py-[97px] relative shrink-0 w-full" data-name="Main">
      <HeaderHeroSection />
      <ServicesGridAsymmetrical />
      <Section5BoldCta />
    </div>
  );
}

export default function ServicesAuraIvory() {
  return (
    <div className="bg-[#fbf2c4] content-stretch flex flex-col items-start pb-[6.05px] relative size-full" data-name="Services (Aura Ivory)">
      <Main />
    </div>
  );
}