import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const estates = [
  {
    id: '01',
    name: 'The Highland Sanctuary',
    location: 'Scottish Highlands',
    desc: 'Perched above the clouds, this architectural marvel blends seamlessly with the dramatic landscape of the Highlands. A retreat for the soul.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '02',
    name: 'Villa Aurelia',
    location: 'Amalfi Coast, Italy',
    desc: 'Timeless Mediterranean elegance meets modern luxury. Terraced gardens, infinity pools, and panoramic views of the azure sea.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '03',
    name: 'Oasis Alpha',
    location: 'Dubai Desert Conservation',
    desc: 'An avant-garde masterpiece rising from the dunes. A testament to human ingenuity and the pursuit of extreme luxury in extreme environments.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Estate() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary min-h-screen pt-32 pb-32"
      ref={containerRef}
    >
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
        >
          The Global Portfolio
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-cream max-w-4xl leading-tight"
          >
            Sanctuaries across the globe.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted text-lg max-w-sm font-light"
          >
            Discover our exclusive collection of private estates, each offering a unique immersion into its surrounding culture and landscape.
          </motion.p>
        </div>
      </section>

      {/* Estates List */}
      <section className="container mx-auto px-6 md:px-12">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate} />
        ))}
      </section>
    </motion.div>
  );
}

function EstateCard({ estate}: { estate: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="mb-32 md:mb-48 last:mb-0 relative border-t border-white/5 pt-12 md:pt-24 group">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="w-full md:w-1/3 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-gold font-heading text-4xl mb-4"
          >
            {estate.id}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-cream mb-4"
          >
            {estate.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm tracking-widest uppercase text-muted mb-8"
          >
            {estate.location}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted text-lg font-light leading-relaxed mb-12"
          >
            {estate.desc}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-auto hidden md:block"
          >
            <button className="border-b border-gold text-gold pb-1 hover:text-cream hover:border-cream transition-colors duration-300 uppercase tracking-widest text-xs">
              Explore Property
            </button>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img
                src={estate.image}
                alt={estate.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
