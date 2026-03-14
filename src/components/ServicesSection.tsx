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
  <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">
        Our <span className="text-sky-600">Services</span>
      </h2>

      <div className="w-20 h-1 bg-sky-500 mx-auto mb-6 rounded"></div>

      <p className="text-center text-slate-600 max-w-xl mx-auto mb-12">
        We offer a full range of dental treatments to keep your smile healthy and beautiful.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((s, i) => (
          <div
            key={s.title}
            className="group p-7 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 hover:-translate-y-2"
            style={{ animationDelay: `${i * 0.08}s` }}
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center mb-5 group-hover:bg-sky-500 transition-colors duration-300">
              <s.icon className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {s.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  </section>
);

export default ServicesSection;