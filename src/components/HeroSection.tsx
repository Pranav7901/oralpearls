import { Phone, CalendarDays } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
  >
    {/* Decorative blob */}
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent opacity-60 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

    <div className="container relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
        <div className="flex-1">
        <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-up">
          Welcome to Oral Pearls Dental Clinic
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Your Smile, <br />
          <span className="text-primary">Our Priority</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Experience world-class dental care in a warm, comfortable environment.
          We combine advanced technology with a gentle touch to give you the
          smile you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:bg-primary-glow transition-colors shadow-lg"
          >
            <CalendarDays className="w-5 h-5" /> Book Appointment
          </a>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-full text-base font-semibold hover:bg-accent transition-colors"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="flex-1 max-w-md lg:max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={heroSmile}
            alt="Beautiful confident smile - dental care at Oral Pearls"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
      </div>
    </div>

    {/* Orange wave SVG */}
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
        fill="hsl(18 85% 55% / 0.08)"
      />
    </svg>
  </section>
);

export default HeroSection;
