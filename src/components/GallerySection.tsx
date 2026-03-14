import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/clinic-gallery-1.jpg";
import gallery2 from "@/assets/clinic-gallery-2.jpg";
import gallery3 from "@/assets/clinic-gallery-3.jpg";

const images = [
  { src: "/d5.webp", alt: "Oral Pearls clinic reception area" },
  { src: "/d1.jpg", alt: "Beautiful smile after dental treatment" },
  { src: "/d2.jpg", alt: "Modern dental equipment at Oral Pearls" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <h2 className="section-heading text-center">Our <span className="text-primary">Gallery</span></h2>
        <span className="section-heading-accent mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="rounded-2xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 bg-background rounded-full p-2"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
