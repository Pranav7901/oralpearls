import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Manish Tembhurkar",
    text: "Exceptional Dental Care at Oral Pearls Dental Clinic. I visited Dr. Ratnadeep Meshram multiple times and had a consistently excellent experience. Professional service and great attention to detail.",
    rating: 5,
  },
  {
    name: "Devendrakumar Waghamare",
    text: "I recently had a wonderful experience with Dr. Ratnadeep and the entire team. From the moment I walked in, I felt welcomed and comfortable. He explained each step clearly and ensured a smooth treatment.",
    rating: 5,
  },
  {
    name: "MKM NEWS 24",
    text: "मेरा आज डॉ रत्नदीप मेश्राम सर के क्लिनिक में जाना हुआ। बहुत शांत स्वभाव के धनी है। एक अच्छा अनुभव रहा।",
    rating: 5,
  },
  {
    name: "Dr. Jayshree Gajbhiye",
    text: "Best Doctor. I always recommend him for oral treatment.",
    rating: 5,
  },
  {
    name: "Sandip Zurmure",
    text: "Best Dentist in Bhandara. Very humble and cooperative doctor.",
    rating: 5,
  },
  {
    name: "Raju Bhoge",
    text: "Nice treatment and kind nature.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-sky-50">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
        What Our <span className="text-sky-600">Patients Say</span>
      </h2>

      <div className="w-20 h-1 bg-sky-500 mx-auto rounded mt-4"></div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 hover:-translate-y-2"
          >

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>

            {/* Name */}
            <p className="font-semibold text-slate-900">
              {t.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  </section>
);

export default TestimonialsSection;