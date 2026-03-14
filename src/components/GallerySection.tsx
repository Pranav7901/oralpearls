import { useState } from "react";
import { X } from "lucide-react";

const images = [
  { src: "/d5.webp", alt: "Oral Pearls clinic reception area" },
  { src: "/d1.jpg", alt: "Beautiful smile after dental treatment" },
  { src: "/d2.jpg", alt: "Modern dental equipment at Oral Pearls" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Our <span className="text-sky-600">Gallery</span>
        </h2>

        <div className="w-20 h-1 bg-sky-500 mx-auto rounded mt-4"></div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 bg-white rounded-full p-2 shadow hover:bg-sky-100 transition"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-slate-800" />
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-xl"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;