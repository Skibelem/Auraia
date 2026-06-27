import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop", aspect: "aspect-video" }, // Vineyard
  { src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop", aspect: "aspect-[3/4]" }, // Bottle pouring
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", aspect: "aspect-square" }, // Barrels
  { src: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=2070&auto=format&fit=crop", aspect: "aspect-[4/3]" }, // Tasting
  { src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2080&auto=format&fit=crop", aspect: "aspect-[3/4]" }, // Grapes
  { src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop", aspect: "aspect-[4/5]" }, // Cellar
  { src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2074&auto=format&fit=crop", aspect: "aspect-square" }, // Grapes macro
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          Visual Diary
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream"
        >
          The Gallery
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: (i % 3) * 0.2 }}
              className={`relative overflow-hidden group cursor-pointer ${img.aspect} break-inside-avoid`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={`Winery Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain shadow-2xl"
          />
          <button className="absolute top-8 right-8 text-cream hover:text-gold transition-colors tracking-[0.2em] uppercase text-xs font-medium">
            Close
          </button>
        </div>
      )}
    </motion.div>
  );
}
