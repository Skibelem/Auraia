import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary">
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }} // Slow zoom out
      >
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Vineyard at Sunset"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Elegant dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-secondary/80"></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading text-cream leading-[0.85] mb-8 tracking-tighter">
              Handcrafted <br /> Excellence
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <p className="text-lg md:text-xl text-beige max-w-2xl mb-16 font-light leading-relaxed">
              Cultivated in the sun-drenched hills of Napa Valley. We pursue perfection in every vintage, honoring the terroir and the timeless art of winemaking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Link
              to="/collection"
              className="group relative px-10 py-5 bg-gold text-primary hover:bg-cream transition-colors duration-700 flex items-center justify-center gap-4 overflow-hidden text-center"
            >
              <span className="relative z-10 tracking-[0.2em] uppercase text-xs font-medium">Explore Our Wines</span>
            </Link>
            <Link
              to="/reservations"
              className="group flex items-center justify-center gap-4 px-10 py-5 border border-gold/40 text-cream tracking-[0.2em] uppercase text-xs font-medium hover:border-gold transition-colors duration-700"
            >
              Visit the Estate
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-6 text-gold"
      >
        <span className="writing-vertical text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-24 bg-gold/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gold"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
