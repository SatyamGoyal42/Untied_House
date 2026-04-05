import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Selected Work", href: "/selected-work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMenuOpen(false);

      if (!href.includes("#")) return;

      const [path, hash] = href.split("#");
      const targetPath = path || "/";

      if (location.pathname === targetPath) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(targetPath);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  const linkClasses = (href: string) =>
    `font-['Newsreader:Regular',sans-serif] text-base lg:text-lg tracking-[-0.45px] transition-colors ${
      isActive(href)
        ? "text-[#1c1917] border-b border-[#292524] pb-1"
        : "text-[#57534e] hover:text-[#1c1917]"
    }`;

  const mobileLinkClasses = (href: string) =>
    `font-['Newsreader:Regular',sans-serif] text-lg tracking-[-0.45px] ${
      isActive(href) ? "text-[#1c1917]" : "text-[#57534e]"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[6px] bg-[#fbf2c4]/95 w-full">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-heading font-extralight not-italic tracking-[-0.04em] text-[#1c1917] text-2xl sm:text-3xl lg:text-4xl hover:opacity-70 transition-opacity"
          >
            THE UNTIED HOUSE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-12 items-center">
            {navLinks.map((link) =>
              link.href.includes("#") ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`${linkClasses(link.href)} cursor-pointer`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={linkClasses(link.href)}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1c1917]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            maxHeight: isMenuOpen ? `${navLinks.length * 52 + 32}px` : "0px",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <div className="mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link, i) => {
              const style = {
                transform: isMenuOpen ? "translateY(0)" : "translateY(-8px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: `transform 0.4s ${i * 60}ms cubic-bezier(0.16,1,0.3,1), opacity 0.4s ${i * 60}ms ease`,
              };

              return link.href.includes("#") ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`${mobileLinkClasses(link.href)} text-left cursor-pointer`}
                  style={style}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileLinkClasses(link.href)}
                  style={style}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}