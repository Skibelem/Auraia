import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MembershipPreview() {
  return (
    <section className="py-32 md:py-48 bg-primary relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold/5 rounded-full animate-[spin_90s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
        >
          Auraia Membership
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading text-cream mb-8"
        >
          An invitation to the exceptional.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto"
        >
          Join a highly vetted community of visionaries. Gain unparalleled access to our estates, curated collections, and private events globally.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/membership"
            className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-gold text-primary hover:bg-cream transition-colors duration-500 font-medium tracking-widest uppercase text-sm group"
          >
            Apply for Membership <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
