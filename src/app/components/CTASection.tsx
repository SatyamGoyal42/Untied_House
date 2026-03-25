import { Link } from "react-router";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-[#4C9DB0] w-full min-h-[500px] lg:min-h-[670px] px-4 sm:px-8 lg:px-[100px] py-12 sm:py-16 lg:py-[50px] flex items-center justify-center"
    >
      <div className="max-w-[896px] w-full flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 text-center">
        <p className="font-['Manrope:Regular',sans-serif] font-normal text-[rgba(251,242,196,0.6)] text-sm sm:text-base lg:text-xl tracking-[0.2em] uppercase">
          Project Inquiry
        </p>

        <h2 className="font-heading text-[#fbf2c4] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-[-0.05em]">
          Ready to manifest
          <br />
          your vision?
        </h2>

        <Link
          to="/contact"
          className="inline-block bg-[#fbf2c4] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 hover:bg-[#f5ecb8] transition-colors group"
        >
          <span className="font-['Manrope:Regular',sans-serif] font-bold text-[#4C9DB0] text-base sm:text-lg lg:text-2xl xl:text-[28px] tracking-widest uppercase group-hover:tracking-[0.15em] transition-all">
            Start a Collaboration
          </span>
        </Link>
      </div>
    </section>
  );
}
