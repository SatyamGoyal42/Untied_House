import svgPaths from "./svg-fsx3lqq6zk";
import imgImageTheUntiedHouseLogo from "figma:asset/597b2f52eb51518e8e3cec8dcee65430aac321e0.png";
import imgAb6AXuBfxVOe1Gi1GAifqQ0KkrUnJkSvh6YoBuPvoU05HaX6Qb4AmMIyI8MlVxxVijdyoETdnvQnpV6CnVc1U5YqTUh7LeaE2E2Wfs79NVf4Vwe0LiVlGeTWvvPOothlg5Tt5Gznng5Cm9SufhFjbj18KSsK3ZQGpLv6ScQGk4P91Ymzxr7JEl29E6SpMzHgag96Gt8BWqOgMo0QxNeE5SuoJvXu7O4PfPxdasaElZNht0MMReY3Ui27NZPt8YKg0TKk39Lhwpqzw from "figma:asset/53e041adf290573f894db1ac0e9c0cab0d636c37.png";
import imgAb6AXuB60MWi80Zo3MruFvV6V10Ohlk1GdFb4WSpOpi2VgH89Ii1Et22LyFg9NlK8X5SYFsW5XwynEsc080QmWwy0TB7JsBoT46YtBe0RTk3Usc9EHfzRlwTxX7UQ9MRoXEos1QmKPh7Bq4RlMbQA3IU5EPsxym71T049BVvOEsttjsmBkmBrzjCzIgBOaWpd5EpHkZcZpzzjj1Ol2PDqh3SrllQLdGmeHnKek92KhSlWlfC5Z9AyeM4OIAxb8KNzTjf4JPJi from "figma:asset/06a6774d1510c629b25c8f2678652fc7e82e506e.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1a] text-[128px] tracking-[-6.4px] whitespace-nowrap">
        <p className="leading-[128px]">Ideas, untied</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[171px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] left-0 text-[#4a4a46] text-[20px] top-[14px] whitespace-nowrap">
        <p className="leading-[28px]">Execution, precise</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[268px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[368px]" data-name="Heading 1">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[30px] relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="mb-0">Branding / Web Design / Print Design</p>
        <p>Illustrations / Social Media + More</p>
      </div>
    </div>
  );
}

function ImageTheUntiedHouseLogo() {
  return (
    <div className="h-[268px] relative shrink-0 w-full" data-name="Image (The Untied House Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageTheUntiedHouseLogo} />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[351px]" data-name="Container">
      <ImageTheUntiedHouseLogo />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[360px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[268px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function Section1Hero() {
  return (
    <div className="h-[670px] relative shrink-0 w-full" data-name="Section 1: Hero">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[100px] py-[50px] relative size-full">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-normal items-baseline justify-between leading-[0] relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] h-[72px] justify-center relative shrink-0 text-[#1c1c1a] text-[72px] tracking-[-1.8px] w-[465.7px]">
        <p className="leading-[72px]">Artistic Services</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center relative shrink-0 text-[#4a4a46] text-[18px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">{`Know More `}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[48px]" data-name="Container">
      <div className="h-[28.269px] relative shrink-0 w-[26.423px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4231 28.2693">
          <path d={svgPaths.p2328aea8} fill="var(--fill-0, #443A2C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[136px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[30px] w-[158.98px]">
        <p className="leading-[36px]">Brand Vision</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[186.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#4a4a46] text-[14px] w-[152.38px]">
        <p className="mb-0">Architecting visual</p>
        <p className="mb-0">identities that resonate</p>
        <p>with cultural authority.</p>
      </div>
    </div>
  );
}

function Service() {
  return (
    <div className="col-1 h-[364px] justify-self-stretch relative row-1 shrink-0" data-name="Service 1">
      <div aria-hidden="true" className="absolute border-[#d9d0a6] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Heading2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[48px]" data-name="Container">
      <div className="h-[24px] relative shrink-0 w-[27px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
          <path d={svgPaths.p152de510} fill="var(--fill-0, #443A2C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[136px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[72px] justify-center leading-[36px] not-italic relative shrink-0 text-[#1c1c1a] text-[30px] w-[113.61px]">
        <p className="mb-0">Visual</p>
        <p>Direction</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[222.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#4a4a46] text-[14px] w-[143.03px]">
        <p className="mb-0">Articulating your story</p>
        <p className="mb-0">through cinematic</p>
        <p>photography and film.</p>
      </div>
    </div>
  );
}

function Service1() {
  return (
    <div className="col-2 h-[364px] justify-self-stretch relative row-1 shrink-0" data-name="Service 2">
      <div aria-hidden="true" className="absolute border-[#d9d0a6] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container8 />
        <Heading3 />
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[48px]" data-name="Container">
      <div className="h-[22.944px] relative shrink-0 w-[23.308px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3077 22.9436">
          <path d={svgPaths.p1c7e080} fill="var(--fill-0, #443A2C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[49px] top-[136px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[72px] justify-center leading-[36px] not-italic relative shrink-0 text-[#1c1c1a] text-[30px] w-[102.83px]">
        <p className="mb-0">Creative</p>
        <p>Strategy</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] pb-[0.875px] right-[49px] top-[223.13px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[91px] justify-center leading-[22.75px] relative shrink-0 text-[#4a4a46] text-[14px] w-[146.31px]">
        <p className="mb-0">Navigating the</p>
        <p className="mb-0">intersection of art,</p>
        <p className="mb-0">commerce, and human</p>
        <p>emotion.</p>
      </div>
    </div>
  );
}

function Service2() {
  return (
    <div className="col-3 h-[364px] justify-self-stretch relative row-1 shrink-0" data-name="Service 3">
      <div aria-hidden="true" className="absolute border-[#d9d0a6] border-b border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Heading4 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[48px]" data-name="Container">
      <div className="h-[21px] relative shrink-0 w-[27px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 21">
          <path d={svgPaths.p28d10d80} fill="var(--fill-0, #443A2C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[136px]" data-name="Heading 3">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[72px] justify-center leading-[36px] not-italic relative shrink-0 text-[#1c1c1a] text-[30px] w-[104.55px]">
        <p className="mb-0">Digital</p>
        <p>Artifacts</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] right-[48px] top-[222.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] relative shrink-0 text-[#4a4a46] text-[14px] w-[160.94px]">
        <p className="mb-0">Building digital</p>
        <p className="mb-0">experiences that feel like</p>
        <p>fine-art monographs.</p>
      </div>
    </div>
  );
}

function Service3() {
  return (
    <div className="col-4 h-[364px] justify-self-stretch relative row-1 shrink-0" data-name="Service 4">
      <div aria-hidden="true" className="absolute border-[#d9d0a6] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Heading5 />
        <Container13 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_364px] pt-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#d9d0a6] border-solid border-t inset-0 pointer-events-none" />
      <Service />
      <Service1 />
      <Service2 />
      <Service3 />
    </div>
  );
}

function Section3QuickLookServices() {
  return (
    <div className="h-[670px] relative shrink-0 w-full" data-name="Section 3: Quick Look (Services)">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[100px] py-[50px] relative size-full">
          <Paragraph />
          <HorizontalBorder />
        </div>
      </div>
    </div>
  );
}

function Ab6AXuBfxVOe1Gi1GAifqQ0KkrUnJkSvh6YoBuPvoU05HaX6Qb4AmMIyI8MlVxxVijdyoETdnvQnpV6CnVc1U5YqTUh7LeaE2E2Wfs79NVf4Vwe0LiVlGeTWvvPOothlg5Tt5Gznng5Cm9SufhFjbj18KSsK3ZQGpLv6ScQGk4P91Ymzxr7JEl29E6SpMzHgag96Gt8BWqOgMo0QxNeE5SuoJvXu7O4PfPxdasaElZNht0MMReY3Ui27NZPt8YKg0TKk39Lhwpqzw() {
  return (
    <div className="aspect-[4/5] relative shrink-0 w-full" data-name="AB6AXuBfx_vOe1Gi1gAifqQ0KKRUnJkSVH6yoBUPvoU05haX6QB4amMIyI8MlVxxVijdyoETdnvQnp-V6CnVC1U5YqTUh-7leaE2e2wfs79_nVF4VWE0liVLGeTWvvPOothlg5tt5GZNNG5Cm9sufhFJBJ18kSsK3zQGpLv6scQGk4p91ymzxr7JEl29e6spMzHgag96Gt8bWqOGMo0qxNeE5suoJvXu7o4PfPXDASAElZNht0mMReY3UI27_nZPt8yKg0TKk-39lhwpqzw">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgAb6AXuBfxVOe1Gi1GAifqQ0KkrUnJkSvh6YoBuPvoU05HaX6Qb4AmMIyI8MlVxxVijdyoETdnvQnpV6CnVc1U5YqTUh7LeaE2E2Wfs79NVf4Vwe0LiVlGeTWvvPOothlg5Tt5Gznng5Cm9SufhFjbj18KSsK3ZQGpLv6ScQGk4P91Ymzxr7JEl29E6SpMzHgag96Gt8BWqOgMo0QxNeE5SuoJvXu7O4PfPxdasaElZNht0MMReY3Ui27NZPt8YKg0TKk39Lhwpqzw} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#1c1c1a] content-stretch flex flex-col items-start left-[32px] px-[16px] py-[3.5px] top-[28px]" data-name="Background">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] relative shrink-0 text-[#fbf2c4] text-[10px] tracking-[1px] uppercase w-[42.77px]">
        <p className="leading-[15px]">SS — 25</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Ab6AXuBfxVOe1Gi1GAifqQ0KkrUnJkSvh6YoBuPvoU05HaX6Qb4AmMIyI8MlVxxVijdyoETdnvQnpV6CnVc1U5YqTUh7LeaE2E2Wfs79NVf4Vwe0LiVlGeTWvvPOothlg5Tt5Gznng5Cm9SufhFjbj18KSsK3ZQGpLv6ScQGk4P91Ymzxr7JEl29E6SpMzHgag96Gt8BWqOgMo0QxNeE5SuoJvXu7O4PfPxdasaElZNht0MMReY3Ui27NZPt8YKg0TKk39Lhwpqzw />
      <Background />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[36px] w-[246.27px]">
        <p className="leading-[40px]">Modern Alchemy</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4a4a46] text-[14px] tracking-[1.4px] uppercase w-[195px]">
        <p className="leading-[20px]">{`Brand Narrative & Film`}</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[246.27px]" data-name="Container">
      <Heading6 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <div className="relative shrink-0 size-[11.788px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7885 11.7885">
          <path d={svgPaths.p13fa1c00} fill="var(--fill-0, #1C1C1A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="col-[2/span_6] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Project 1">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Ab6AXuB60MWi80Zo3MruFvV6V10Ohlk1GdFb4WSpOpi2VgH89Ii1Et22LyFg9NlK8X5SYFsW5XwynEsc080QmWwy0TB7JsBoT46YtBe0RTk3Usc9EHfzRlwTxX7UQ9MRoXEos1QmKPh7Bq4RlMbQA3IU5EPsxym71T049BVvOEsttjsmBkmBrzjCzIgBOaWpd5EpHkZcZpzzjj1Ol2PDqh3SrllQLdGmeHnKek92KhSlWlfC5Z9AyeM4OIAxb8KNzTjf4JPJi() {
  return (
    <div className="aspect-[3/4] relative shrink-0 w-full" data-name="AB6AXuB60mWi8-0Zo3mru_FvV6v10ohlk1gdFB4WSpOpi2VG_H89Ii1ET22lyFG9-NlK8x5sYFsW5XwynESC080QmWwy-0tB7JsBoT46YtBe0rTk3usc9EHfzRlwTxX7uQ9mRoXEos1qmKPh7bq4rlMB-Q-A3iU5ePSXYM71T049BVvOEsttjsmBkmBrzjCZIg-bOaWPD5_EPHkZcZpzzjj1ol2pDQH3srllQLdGMEHnKEK92khSlWlfC5z9ayeM4oIAxb8kNZTjf4jP-JI">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.67%] max-w-none top-0 w-[133.33%]" src={imgAb6AXuB60MWi80Zo3MruFvV6V10Ohlk1GdFb4WSpOpi2VgH89Ii1Et22LyFg9NlK8X5SYFsW5XwynEsc080QmWwy0TB7JsBoT46YtBe0RTk3Usc9EHfzRlwTxX7UQ9MRoXEos1QmKPh7Bq4RlMbQA3IU5EPsxym71T049BVvOEsttjsmBkmBrzjCzIgBOaWpd5EpHkZcZpzzjj1Ol2PDqh3SrllQLdGmeHnKek92KhSlWlfC5Z9AyeM4OIAxb8KNzTjf4JPJi} />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1a] text-[36px] w-[177.56px]">
        <p className="leading-[40px]">Vesper Light</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#4a4a46] text-[14px] tracking-[1.4px] uppercase w-[117.11px]">
        <p className="leading-[20px]">Art Direction</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[177.56px]" data-name="Container">
      <Heading7 />
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <div className="relative shrink-0 size-[11.788px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7885 11.7885">
          <path d={svgPaths.p13fa1c00} fill="var(--fill-0, #1C1C1A)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[21.53px] relative shrink-0 w-full" data-name="Project 2">
      <Ab6AXuB60MWi80Zo3MruFvV6V10Ohlk1GdFb4WSpOpi2VgH89Ii1Et22LyFg9NlK8X5SYFsW5XwynEsc080QmWwy0TB7JsBoT46YtBe0RTk3Usc9EHfzRlwTxX7UQ9MRoXEos1QmKPh7Bq4RlMbQA3IU5EPsxym71T049BVvOEsttjsmBkmBrzjCzIgBOaWpd5EpHkZcZpzzjj1Ol2PDqh3SrllQLdGmeHnKek92KhSlWlfC5Z9AyeM4OIAxb8KNzTjf4JPJi />
      <Container18 />
    </div>
  );
}

function Project2Margin() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col items-start justify-self-stretch pt-[192px] relative row-1 self-start shrink-0" data-name="Project 2:margin">
      <Project1 />
    </div>
  );
}

function Section4SelectedWork() {
  return (
    <div className="gap-x-[96px] gap-y-[96px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_843.31px] pt-[64px] relative shrink-0 w-[1088px]" data-name="Section 4: Selected Work">
      <Project />
      <Project2Margin />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(251,242,196,0.6)] text-center tracking-[4px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">Project Inquiry</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Newsreader:Medium',sans-serif] font-medium justify-center leading-[96px] relative shrink-0 text-[#fbf2c4] text-[96px] text-center tracking-[-4.8px] whitespace-nowrap">
        <p className="mb-0">Ready to manifest</p>
        <p>your vision?</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start justify-center px-[65px] py-[25px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(251,242,196,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fbf2c4] text-[28px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Start a Collaboration</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col h-[443px] items-center justify-between max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Heading8 />
      <Link />
    </div>
  );
}

function Section5BoldCta() {
  return (
    <div className="bg-[#1c1c1a] h-[670px] relative shrink-0 w-full" data-name="Section 5: Bold CTA">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[100px] py-[50px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center pt-[96px] relative shrink-0 w-full" data-name="Main">
      <Section1Hero />
      <Section3QuickLookServices />
      <Section4SelectedWork />
      <Section5BoldCta />
    </div>
  );
}

export default function HomeAuraIvory() {
  return (
    <div className="bg-[#fbf2c4] content-stretch flex flex-col items-center relative size-full" data-name="Home (Aura Ivory)">
      <Main />
    </div>
  );
}