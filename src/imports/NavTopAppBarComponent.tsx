function Container1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[89.34px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#1c1917] text-[24px] top-[16px] whitespace-nowrap">
        <p className="leading-[32px]">THE UNTIED HOUSE</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#292524] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1917] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Home</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#57534e] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Services</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#57534e] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Selected Work</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#57534e] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#57534e] text-[18px] tracking-[-0.45px] whitespace-nowrap">
        <p className="leading-[28px]">Contact</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[48px] pr-[48.02px] py-[32px] relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function NavTopAppBarComponent() {
  return (
    <div className="backdrop-blur-[6px] bg-[#fbf2c4] content-stretch flex flex-col items-start relative size-full" data-name="Nav - TopAppBar Component">
      <Container />
    </div>
  );
}