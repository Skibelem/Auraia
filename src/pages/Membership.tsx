import { motion, animate, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{from}</span>;
}

export default function Membership() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary min-h-screen pt-32 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
        >
          The Inner Circle
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-cream max-w-4xl mx-auto leading-tight mb-8"
        >
          Access the impossible.
        </motion.h1>
      </section>

      {/* Animated Stats */}
      <section className="container mx-auto px-6 md:px-12 mb-32 border-y border-white/5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-heading text-gold mb-4">
              <Counter from={0} to={50} />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted">Global Estates</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-heading text-gold mb-4">
              <Counter from={0} to={12} />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted">Curated Experiences/Year</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-heading text-gold mb-4">
              <Counter from={0} to={500} />
            </div>
            <p className="text-sm tracking-widest uppercase text-muted">Members Worldwide</p>
          </div>
        </div>
      </section>

      {/* Comparison/Tiers */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 p-12 relative group hover:border-gold/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[100px] group-hover:bg-gold/20 transition-colors duration-700"></div>
            <h3 className="text-3xl font-heading text-cream mb-2">Auraia Patron</h3>
            <p className="text-gold tracking-widest uppercase text-xs mb-8">By Application Only</p>
            <p className="text-muted font-light mb-12">For those who seek elevated access to our seasonal collections and select events.</p>
            
            <ul className="space-y-6 mb-16">
              {['Priority access to new collections', 'Invitations to seasonal galas', 'Dedicated concierge team', 'Quarterly journal delivery'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-cream/80 text-sm font-light">
                  <Check className="text-gold mt-1" size={16} />
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 border border-gold text-gold hover:bg-gold hover:text-primary transition-colors duration-500 tracking-widest uppercase text-sm font-medium">
              Submit Inquiry
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gold/30 bg-gold/5 p-12 relative group hover:bg-gold/10 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 blur-[100px] group-hover:bg-gold/40 transition-colors duration-700"></div>
            <h3 className="text-3xl font-heading text-cream mb-2">Auraia Luminary</h3>
            <p className="text-gold tracking-widest uppercase text-xs mb-8">By Invitation Only</p>
            <p className="text-muted font-light mb-12">The pinnacle of membership. Unrestricted global access to all estates and completely bespoke experiences.</p>
            
            <ul className="space-y-6 mb-16">
              {['Unrestricted access to all 50 global estates', 'Private aviation charter credits', 'Personalized 24/7 lifestyle management', 'Bespoke annual grand expedition'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-cream/80 text-sm font-light">
                  <Check className="text-gold mt-1" size={16} />
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 bg-gold text-primary hover:bg-cream transition-colors duration-500 tracking-widest uppercase text-sm font-medium flex items-center justify-center gap-4">
              Request Nomination <ArrowRight size={16} />
            </button>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
