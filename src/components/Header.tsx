import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">

      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="container flex items-center justify-between py-2">
          <span className="font-medium tracking-wide">
            Dr. Ratnadip Meshram
          </span>

          <a
            href="tel:+919096973622"
            className="flex items-center gap-2 hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" />
            +91 9096973622
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="container flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="Oral Pearls Dental Clinic"
            className="h-11 w-11 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110"
          />

          <span className="font-semibold text-lg md:text-xl tracking-tight text-gray-900">
            Oral Pearls
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-gray-600 hover:text-primary transition-colors group"
            >
              {l.label}

              {/* animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="tel:+919096973622"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-primary to-blue-500 hover:scale-105 transition-transform shadow-md"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >
          {open ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="container py-5 flex flex-col gap-4 bg-white">

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}

          <a
            href="tel:+919096973622"
            className="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-primary text-white rounded-full font-semibold shadow"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

        </div>
      </div>
    </header>
  );
};

export default Header;