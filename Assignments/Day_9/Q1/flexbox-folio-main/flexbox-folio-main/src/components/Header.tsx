import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-blue-900 text-white/95 border-b border-[rgba(255,255,255,0.06)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {/* white text with subtle letter spacing */}
            <span className="text-white">SreeLakshmi Mithra</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200 uppercase tracking-wide shadow-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200 uppercase tracking-wide shadow-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white text-lg font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200 uppercase tracking-wide shadow-sm"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white text-lg font-medium px-4 py-2 rounded-md bg-white/6 hover:bg-white/20 transition-colors duration-200 uppercase tracking-wide shadow-sm"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-white/90 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-[rgba(255,255,255,0.06)] animate-in slide-in-from-top-2 duration-300 bg-gradient-to-b from-slate-900/95 to-blue-900/95">
            <div className="flex flex-col gap-3 px-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-white text-lg font-medium px-4 py-3 rounded-md hover:bg-white/8 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-white text-lg font-medium px-4 py-3 rounded-md hover:bg-white/8 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-white text-lg font-medium px-4 py-3 rounded-md hover:bg-white/8 transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-white text-lg font-medium px-4 py-3 rounded-md bg-white/6 hover:bg-white/20 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
