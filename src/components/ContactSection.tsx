import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with backend
    alert("Thank you! We will get back to you shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container">
        <h2 className="section-heading text-center">Get In <span className="text-primary">Touch</span></h2>
        <span className="section-heading-accent mx-auto" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Info + Map */}
          <div>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-sm text-muted-foreground">Station road, Santaji Nagar, Bhandara, Maharashtra 441904</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+919096973622" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 9096973622
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@oralpearls.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@oralpearls.com
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64">
              <iframe
                title="Oral Pearls Dental Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d965339.7071103589!2d72.83973144999999!3d19.069969799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a2b3f26032dfa1d%3A0xeed3b0f1c75a1db5!2sOral%20Pearls%20Dental%20Clinic%2C%20Station%20road%2C%20Santaji%20Nagar%2C%20Bhandara%2C%20Maharashtra%20441904!3m2!1d21.1703731!2d79.6562426!5e0!3m2!1sen!2sin!4v1772558008540!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-base flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-foreground">Send Us a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary-glow transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
