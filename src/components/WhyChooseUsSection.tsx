import { Cpu, BadgeDollarSign, HeartHandshake, SmilePlus, Siren } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Advanced Technology", desc: "Latest digital dentistry equipment" },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Quality care that fits your budget" },
  { icon: HeartHandshake, title: "Pain-Free Procedures", desc: "Gentle techniques for comfort" },
  { icon: SmilePlus, title: "Friendly Staff", desc: "Warm and welcoming team" },
  { icon: Siren, title: "Emergency Care", desc: "Available when you need us most" },
];

const WhyChooseUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
        Why Choose <span className="text-sky-600">Us</span>
      </h2>

      <div className="w-20 h-1 bg-sky-500 mx-auto rounded mt-4"></div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">

        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:bg-sky-50 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center">
              <r.icon className="w-7 h-7 text-sky-600" />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-sm text-slate-900">
              {r.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-600">
              {r.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;