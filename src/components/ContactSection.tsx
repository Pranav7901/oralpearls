import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Get In <span className="text-sky-600">Touch</span>
        </h2>

        <div className="w-20 h-1 bg-sky-500 mx-auto rounded mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">

          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="text-sm text-slate-600">
                    Station road, Santaji Nagar, Bhandara, Maharashtra 441904
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <a
                    href="tel:+919096973622"
                    className="text-sm text-slate-600 hover:text-sky-600 transition"
                  >
                    +91 9096973622
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a
                    href="mailto:info@oralpearls.com"
                    className="text-sm text-slate-600 hover:text-sky-600 transition"
                  >
                    info@oralpearls.com
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-sm">
              <iframe
                title="Oral Pearls Dental Clinic location"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d965339.7071103589!2d72.83973144999999!3d19.069969799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a2b3f26032dfa1d%3A0xeed3b0f1c75a1db5!2sOral%20Pearls%20Dental%20Clinic%2C%20Station%20road%2C%20Santaji%20Nagar%2C%20Bhandara%2C%20Maharashtra%20441904!3m2!1d21.1703731!2d79.6562426!5e0!3m2!1sen!2sin!4v1772558008540!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-5"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              Send Us a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />

            <button
              type="submit"
              className="bg-sky-500 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-sky-600 transition"
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