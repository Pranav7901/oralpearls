import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Oral Pearls logo" className="h-10 w-10 rounded-full bg-background p-1" />
            <span className="font-display font-bold text-lg">Oral Pearls</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your trusted partner for comprehensive dental care.
            We're committed to giving you the smile you've always wanted.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-70 mb-1">Station road, Santaji Nagar,</p>
          <p className="text-sm opacity-70 mb-1">Bhandara, Maharashtra 441904</p>
          <p className="text-sm opacity-70 mb-4">+91 9096973622</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Oral Pearls Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
