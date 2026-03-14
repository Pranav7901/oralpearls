import { Phone, CalendarDays } from "lucide-react";
import heroSmile from "@/assets/hero-smile.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 overflow-hidden bg-white"
  >
    {/* Decorative sky-blue blob */}
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-200 opacity-60 blur-3xl pointer-events-none" />

    {/* Bottom gradient */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

    <div className="container mx-auto relative z-10 px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* Text Content */}
        <div className="flex-1">

          <span className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Welcome to Oral Pearls Dental Clinic
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Your Smile, <br />
            <span className="text-sky-600">Our Priority</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-8">
            Experience world-class dental care in a warm, comfortable environment.
            We combine advanced technology with a gentle touch to give you the
            smile you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* Book Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-sky-600 transition shadow-lg"
            >
              <CalendarDays className="w-5 h-5" />
              Book Appointment
            </a>

            {/* Call Button */}
            <a
              href="tel:+919096973622"
              className="inline-flex items-center justify-center gap-2 border-2 border-sky-500 text-sky-600 px-7 py-3.5 rounded-full text-base font-semibold hover:bg-sky-50 transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 max-w-md lg:max-w-lg">
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

    {/* Sky Blue Wave */}
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
        fill="rgba(14,165,233,0.08)"
      />
    </svg>
  </section>
);

export default HeroSection;