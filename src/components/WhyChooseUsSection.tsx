import { Cpu, BadgeDollarSign, HeartHandshake, SmilePlus, Siren } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Advanced Technology", desc: "Latest digital dentistry equipment" },
  { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Quality care that fits your budget" },
  { icon: HeartHandshake, title: "Pain-Free Procedures", desc: "Gentle techniques for comfort" },
  { icon: SmilePlus, title: "Friendly Staff", desc: "Warm and welcoming team" },
  { icon: Siren, title: "Emergency Care", desc: "Available when you need us most" },
];

const WhyChooseUsSection = () => (
  <section className="section-padding">
    <div className="container">
      <h2 className="section-heading text-center">Why Choose <span className="text-primary">Us</span></h2>
      <span className="section-heading-accent mx-auto" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl hover:bg-accent transition-colors duration-300 opacity-0 animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-sm text-foreground">{r.title}</h3>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
