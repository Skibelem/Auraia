import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WineClubPreview() {
  return (
    <section className="py-32 md:py-48 bg-primary relative overflow-hidden">
      {/* Background Graphic / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2074&auto=format&fit=crop" 
          alt="Vineyard Background"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-8"
        >
          The Cellar Club
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-cream mb-10 leading-tight"
        >
          An invitation to the exceptional.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-beige text-lg md:text-xl mb-16 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Join a curated community of oenophiles. Gain guaranteed allocations of our most sought-after vintages, library releases, and invitations to private winemaker dinners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/wine-club"
            className="inline-flex items-center justify-center gap-4 px-12 py-5 border border-gold text-gold hover:bg-gold hover:text-primary transition-colors duration-700 font-medium tracking-[0.2em] uppercase text-xs group"
          >
            Discover the Tiers <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
