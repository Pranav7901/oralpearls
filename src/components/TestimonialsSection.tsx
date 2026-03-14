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
  <section id="testimonials" className="section-padding bg-secondary">
    <div className="container">
      <h2 className="section-heading text-center">What Our <span className="text-primary">Patients Say</span></h2>
      <span className="section-heading-accent mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="card-base opacity-0 animate-fade-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <p className="font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
