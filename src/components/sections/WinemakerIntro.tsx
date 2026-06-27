import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function WinemakerIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 bg-primary relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-8"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-cream mb-10 leading-tight"
            >
              A symphony of <br className="hidden md:block"/> earth, climate, and craft.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-muted text-lg mb-14 max-w-xl leading-relaxed font-light"
            >
              Great wine is not made in the cellar; it is grown in the vineyard. We allow the terroir to speak for itself, employing minimal intervention techniques to preserve the unique characteristics of every vintage.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/story" className="inline-block border-b border-gold text-gold pb-2 hover:text-cream hover:border-cream transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-medium">
                Read the Heritage Story
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
                alt="Winemaker in Cellar"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/30 transition-opacity duration-1000 group-hover:opacity-0"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
