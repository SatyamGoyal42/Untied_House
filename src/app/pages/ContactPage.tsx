import { type FormEvent, useState } from "react";
import Reveal from "../components/Reveal";

const PROJECT_INTERESTS = [
  "Branding",
  "Content",
  "Digital",
  "Editorial",
  "Strategy",
];

const CONTACT_EMAIL = "untiedhouse@gmail.com";

export default function ContactPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const interests =
      selectedInterests.length > 0
        ? selectedInterests.join(", ")
        : "Not specified";

    const subject = `Project Inquiry from ${name || "Website Visitor"}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      `Project Interest: ${interests}`,
      "",
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const inputClasses =
    "w-full bg-transparent border-0 border-b border-[rgba(26,28,28,0.2)] focus:border-b-[#1c1c1c] focus:ring-0 py-3 sm:py-4 font-heading text-xl sm:text-2xl lg:text-3xl placeholder-[#a8a29e] text-primary transition-[border-color] duration-400 rounded-none";

  const labelClasses =
    "font-['Manrope:Regular',sans-serif] uppercase tracking-[0.3em] text-[10px] text-[#a8a29e] block mb-3 sm:mb-4 font-bold";

  return (
    <main className="pt-12 sm:pt-20 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto">
      {/* Hero Section */}
      <Reveal>
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter text-[#4C9DB0]">
                Start a <br />
                Conversation
              </h1>
            </div>
            <div className="lg:col-span-4 pt-2 sm:pt-4 lg:pt-16">
              <p className="font-['Manrope:Regular',sans-serif] text-base sm:text-lg lg:text-xl text-[#44403c] max-w-sm leading-relaxed font-light">
                Whether you're looking to redefine your visual identity or curate
                a new digital experience, our studio is ready to collaborate.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Contact Form Section */}
      <Reveal delay={150}>
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-12 sm:gap-16">
            <div className="space-y-12 sm:space-y-16">
              {/* Project Interest */}
              <div>
                <span className="font-['Manrope:Regular',sans-serif] uppercase tracking-[0.3em] text-[10px] text-[#a8a29e] mb-6 sm:mb-8 block font-bold">
                  Project Interest
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_INTERESTS.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 sm:px-5 py-2.5 sm:py-3 text-[10px] font-['Manrope:Regular',sans-serif] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-[#1c1917] text-[#fbf2c4]"
                            : "border border-[#d6d3d1] text-[#78716c] hover:border-[#1c1917] hover:text-[#1c1917]"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className="hidden lg:block relative group overflow-hidden">
                <div className="aspect-[4/5] bg-[#e7e5e4] relative grayscale hover:grayscale-0 transition-all duration-1000">
                  <img
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    alt="Modern minimalist studio interior"
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80&auto=format&fit=crop"
                  />
                  <div className="absolute inset-0 bg-[#1c1917]/5 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-12 sm:space-y-16 lg:space-y-20 lg:pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 lg:gap-y-20">
                <div className="relative group">
                  <label className={labelClasses}>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div className="relative group">
                  <label className={labelClasses}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="relative group">
                <label className={labelClasses}>Company / Organization</label>
                <input
                  type="text"
                  placeholder="Entity name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div className="relative group">
                <label className={labelClasses}>Message</label>
                <textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="pt-4 sm:pt-6 lg:pt-8 flex justify-end">
                <button
                  type="submit"
                  className="px-10 sm:px-14 lg:px-20 py-5 sm:py-6 lg:py-8 bg-[#1c1917] text-[#fbf2c4] font-['Manrope:Regular',sans-serif] uppercase tracking-[0.3em] text-[10px] sm:text-[11px] font-bold hover:bg-[#292524] transition-all duration-700 ease-in-out group flex items-center gap-4 sm:gap-6 cursor-pointer"
                >
                  Send Inquiry
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-3 transition-transform duration-500"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </Reveal>
    </main>
  );
}
