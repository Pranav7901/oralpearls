import { Monitor, UserCheck, Heart, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Monitor,
    title: "Modern Equipment",
    desc: "Advanced dental technology for accurate diagnosis and painless treatments.",
  },
  {
    icon: UserCheck,
    title: "Experienced Dentist",
    desc: "Professional expertise with years of successful dental care experience.",
  },
  {
    icon: Heart,
    title: "Patient-First Care",
    desc: "Comfortable and friendly environment focused on your wellbeing.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Environment",
    desc: "Strict sterilization and hygiene protocols for complete safety.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">Oral Pearls</span>
          </h2>

          <div className="w-20 h-1 bg-primary rounded mb-6"></div>

          <p className="text-gray-600 text-lg leading-relaxed">
            At Oral Pearls Dental Clinic, we believe everyone deserves a
            healthy and confident smile. Our clinic combines modern dental
            technology with compassionate care to deliver high-quality
            treatments in a safe and comfortable environment.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <h.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {h.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {h.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;