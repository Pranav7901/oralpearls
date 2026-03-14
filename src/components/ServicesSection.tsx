import { Stethoscope, Sparkles, SmilePlus, Wrench, Gem, Palette } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Comprehensive check-ups, cleanings, and preventive care for the whole family." },
  { icon: Wrench, title: "Root Canal Treatment", desc: "Pain-free root canal procedures using advanced techniques." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter, more confident smile." },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Straighten your teeth with traditional braces or clear aligners." },
  { icon: Gem, title: "Dental Implants", desc: "Permanent tooth replacements that look and feel natural." },
  { icon: Palette, title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers for a flawless look." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container">
      <h2 className="section-heading text-center">Our <span className="text-primary">Services</span></h2>
      <span className="section-heading-accent mx-auto" />
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        We offer a full range of dental treatments to keep your smile healthy and beautiful.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="card-base group cursor-default opacity-0 animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
