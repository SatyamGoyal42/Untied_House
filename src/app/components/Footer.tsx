import { Link } from "react-router";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/theuntiedhouse?igsh=cDMzbXowYnBpdWpn&utm_source=qr",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-untied-house/",
  },
  {
    name: "Email",
    href: "mailto:untiedhouse@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 lg:py-20 space-y-10 sm:space-y-12 lg:space-y-16 bg-[#fbf2c4]">
      {/* Brand */}
      <div className="text-center space-y-3 sm:space-y-4">
        <Link to="/">
          <h2 className="font-body font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-[-0.05em] hover:opacity-80 transition-opacity">
            THE UNTIED HOUSE
          </h2>
        </Link>
        <p className="font-body text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#78716c]">
          Ideas, untied
        </p>
      </div>

      {/* Navigation & Socials */}
      <nav className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 text-center">
        {/* Nav Links */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="font-['Manrope:Regular',sans-serif] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#78716c] opacity-50 mb-1 sm:mb-2">
            Navigation
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-['Manrope:Regular',sans-serif] tracking-[0.2em] uppercase text-xs sm:text-sm text-[#57534e] hover:text-[#1c1917] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="font-['Manrope:Regular',sans-serif] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#78716c] opacity-50 mb-1 sm:mb-2">
            Connect
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="font-['Manrope:Regular',sans-serif] tracking-[0.2em] uppercase text-xs sm:text-sm text-[#57534e] hover:text-[#1c1917] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Copyright */}
      <div className="pt-4 sm:pt-6 lg:pt-8 w-full flex flex-col items-center gap-6 sm:gap-8">
        <div className="h-px w-24 bg-[#d6d3d1]/30" />
        <p className="font-['Manrope:Regular',sans-serif] text-xs tracking-[0.3em] uppercase text-[#78716c]/60">
          © {new Date().getFullYear()} The Untied House
        </p>
      </div>
    </footer>
  );
}
