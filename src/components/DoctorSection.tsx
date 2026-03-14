import { CalendarDays } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";

const DoctorSection = () => (
  <section id="doctor" className="section-padding bg-secondary">
    <div className="container">
      <h2 className="section-heading text-center">Meet Our <span className="text-primary">Doctor</span></h2>
      <span className="section-heading-accent mx-auto" />

      <div className="mt-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Photo */}
        <div className="w-full max-w-sm lg:max-w-md shrink-0">
  <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
    <img
      src="/doctor.jpg"
      alt="Dr. Rahul Sharma - Lead Dentist at Oral Pearls Dental Clinic"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Dr. Ratnadip Meshram
          </h3>
          <p className="text-primary font-semibold mb-1">BDS</p>
          <p className="text-muted-foreground mb-6">19+ Years of Experience</p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            Dr. Ratnadip Meshram is a highly skilled dental surgeon with over 19 years of
            clinical experience. Specializing in prosthodontics and cosmetic dentistry,
            he is passionate about delivering painless, high-quality dental care. His
            gentle approach and dedication to patient comfort have earned him the trust
            of thousands of happy patients.
          </p>
          <a
            href="+919096973622"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-semibold hover:bg-primary-glow transition-colors shadow-lg"
          >
            <CalendarDays className="w-5 h-5" /> Book Appointment
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DoctorSection;
