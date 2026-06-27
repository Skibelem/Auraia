import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function StoryIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-48 bg-primary relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-cream mb-8 leading-tight"
            >
              A symphony of <br className="hidden md:block"/> unmatched craftsmanship and design.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted text-lg mb-12 max-w-lg leading-relaxed font-light"
            >
              Every detail is meticulously considered. We blend contemporary design with timeless traditions to create spaces and moments that resonate deeply with the soul.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/story" className="inline-block border-b border-gold text-gold pb-1 hover:text-cream hover:border-cream transition-colors duration-300 uppercase tracking-widest text-sm">
                Read the Full Story
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop"
                alt="Craftsmanship detail"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 transition-opacity duration-500 group-hover:opacity-0"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
