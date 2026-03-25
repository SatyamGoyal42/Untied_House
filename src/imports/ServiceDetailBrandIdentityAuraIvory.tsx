import imgContainer from "figma:asset/902cc340a8087dc16197c44b71e2879a5dc19403.png";
import imgBrandedStationaryAndPackagingMockup from "figma:asset/ddca7513febe2a6c35c04a030357a829d54dae70.png";
import imgTypographyDetailOnACard from "figma:asset/99a66506eb567ab98f48739d5fe7cfdb6f2f9647.png";
import imgBrandGuidelinesBookOpen from "figma:asset/12d08d03bf5a60107b07bc67a111dc29e38f874d.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[160px] not-italic relative shrink-0 text-[160px] text-black tracking-[-8px] w-full">
        <p className="mb-0">Brand</p>
        <p>Identity.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1207px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="content-stretch flex flex-col items-start p-[50px] relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Section1Hero() {
  return (
    <div className="bg-[#fbf2c4] content-stretch flex flex-col items-center overflow-clip py-[50px] relative shrink-0 w-full" data-name="Section 1: Hero">
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[48px] text-black w-full">
        <p className="mb-0">{`We don't build logos; we curate`}</p>
        <p className="mb-0">legacies. A brand is a quiet</p>
        <p className="mb-0">conversation between an object</p>
        <p>and its observer.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] pb-[0.625px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[117px] justify-center leading-[29.25px] relative shrink-0 text-[#3b3b3b] text-[18px] w-[563.97px]">
        <p className="mb-0">Our approach to identity is reductive yet resonant. We strip away the</p>
        <p className="mb-0">noise of trends to uncover the structural soul of your vision. Through</p>
        <p className="mb-0">a lens of architectural precision and editorial sensitivity, we craft</p>
        <p>visual systems that breathe, evolve, and endure.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[47.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Section2ServicePhilosophy() {
  return (
    <div className="bg-[#f6ebd1] relative shrink-0 w-full" data-name="Section 2: Service Philosophy">
      <div className="content-stretch flex flex-col items-start px-[100px] py-[50px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch pb-[302.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#443a2c] text-[10px] tracking-[4px] uppercase w-[149.03px]">
        <p className="leading-[15px]">Core Disciplines</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
          <p className="leading-[32px]">{`Logo & Logotype`}</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="mb-0">The singular anchor of your visual existence. Minimalist,</p>
          <p>scalable, and conceptually weighted.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14.875px] items-start justify-self-stretch pt-[33px] relative row-1 self-start shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(41,37,36,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Heading2 />
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
          <p className="leading-[32px]">Typography Systems</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="mb-0">The voice of your brand. We curate and customize</p>
          <p>typefaces that carry your narrative across every medium.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[14.875px] items-start justify-self-stretch pt-[33px] relative row-1 self-start shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(41,37,36,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Heading3 />
      <Container7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
          <p className="leading-[32px]">Visual Strategy</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="mb-0">A psychological blueprint. Defining the mood, motion, and</p>
          <p>emotional resonance of your presence.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[14.875px] items-start justify-self-stretch pt-[33px] relative row-2 self-start shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(41,37,36,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Heading4 />
      <Container8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[24px] w-full">
          <p className="leading-[32px]">Brand Guidelines</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[22.75px] relative shrink-0 text-[#3b3b3b] text-[14px] w-full">
          <p className="mb-0">The studio bible. Comprehensive standards for maintaining</p>
          <p>visual integrity across global touchpoints.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[14.875px] items-start justify-self-stretch pt-[33px] relative row-2 self-start shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(41,37,36,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Heading5 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[5/span_8] gap-x-[48px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__126.50px_126.50px] justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-y-[80px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_317px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Section3WhatWeOffer() {
  return (
    <div className="bg-[#fbf2c4] relative shrink-0 w-full" data-name="Section 3: What We Offer">
      <div className="content-stretch flex flex-col items-start px-[100px] py-[50px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-black w-full">
        <p className="leading-[40px]">Artifacts of Identity</p>
      </div>
    </div>
  );
}

function BrandedStationaryAndPackagingMockup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Branded stationary and packaging mockup">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBrandedStationaryAndPackagingMockup} />
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(251,242,196,0.9)] content-stretch flex items-start px-[24px] py-[7.5px] relative shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#1a1c1c] text-[10px] tracking-[1px] uppercase w-[122.09px]">
        <p className="leading-[15px]">Packaging Systems</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[25px] content-stretch flex flex-col items-start left-[32px]" data-name="Container">
      <OverlayOverlayBlur />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1e7bc] col-[1/span_8] content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Background">
      <BrandedStationaryAndPackagingMockup />
      <Container12 />
    </div>
  );
}

function TypographyDetailOnACard() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Typography detail on a card">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTypographyDetailOnACard} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1e7bc] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="Background">
      <TypographyDetailOnACard />
    </div>
  );
}

function BrandGuidelinesBookOpen() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Brand guidelines book open">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBrandGuidelinesBookOpen} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1e7bc] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px overflow-clip relative w-full" data-name="Background">
      <BrandGuidelinesBookOpen />
    </div>
  );
}

function Container13() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__800px_68px] h-[800px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[inherit] px-[32px] relative w-full">
        <Heading6 />
        <Container11 />
      </div>
    </div>
  );
}

function Section4ExampleDeliverablesBentoStyleGallery() {
  return (
    <div className="bg-[#f6ebd1] relative shrink-0 w-full" data-name="Section 4: Example Deliverables (Bento-style gallery)">
      <div className="content-stretch flex flex-col items-start px-[100px] py-[50px] relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Extra_Light_Italic',sans-serif] h-[144px] justify-center leading-[72px] not-italic relative shrink-0 text-[72px] text-center text-white w-[792.66px]">
        <p className="mb-0">Every great vision deserves</p>
        <p>a distinct silhouette.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[64px] py-[24px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[4.2px] uppercase w-[184.45px]">
        <p className="leading-[20px]">Start a project</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[32px] relative w-full">
          <Heading7 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Section5Cta() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Section 5: CTA">
      <div className="content-stretch flex flex-col items-start px-[100px] py-[50px] relative w-full">
        <Container14 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center relative shrink-0 w-full" data-name="Main">
      <Section1Hero />
      <Section2ServicePhilosophy />
      <Section3WhatWeOffer />
      <Section4ExampleDeliverablesBentoStyleGallery />
      <Section5Cta />
    </div>
  );
}

export default function ServiceDetailBrandIdentityAuraIvory() {
  return (
    <div className="bg-[#fbf2c4] content-stretch flex flex-col items-center relative size-full" data-name="Service Detail: Brand Identity (Aura Ivory)">
      <Main />
    </div>
  );
}