import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function WineClub() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-secondary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          The Cellar Club
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-cream max-w-4xl mx-auto leading-tight mb-8"
        >
          Secure your allocation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-beige text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Due to our extremely limited production, joining the Cellar Club is the only way to guarantee access to our flagship and library releases.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Tier 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="border border-white/10 p-12 lg:p-16 relative group hover:border-gold/40 transition-colors duration-700 bg-primary/20"
          >
            <h3 className="text-3xl lg:text-4xl font-heading text-cream mb-2">The Collector</h3>
            <p className="text-gold tracking-[0.2em] uppercase text-[10px] mb-8">6 Bottles Annually</p>
            <p className="text-beige font-light mb-12 leading-relaxed h-20">An introduction to the Auraia portfolio, featuring a curated selection of our current releases.</p>
            
            <ul className="space-y-6 mb-16 h-64">
              {['Guaranteed allocation of 6 bottles per year', 'First access to new vintage releases', 'Complimentary tasting for two annually', 'Invitations to regional member events', 'Flat-rate temperature controlled shipping'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-cream/80 text-sm font-light">
                  <Check className="text-gold mt-1 shrink-0" size={16} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 border border-gold/50 text-gold hover:bg-gold hover:text-primary transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-medium">
              Join Waitlist
            </button>
          </motion.div>

          {/* Tier 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border border-gold/30 bg-gold/5 p-12 lg:p-16 relative group hover:bg-gold/10 transition-colors duration-700"
          >
            <div className="absolute top-6 right-6 px-4 py-2 bg-gold/20 text-gold tracking-[0.2em] uppercase text-[10px]">Most Exclusive</div>
            <h3 className="text-3xl lg:text-4xl font-heading text-cream mb-2">The Vintner's Circle</h3>
            <p className="text-gold tracking-[0.2em] uppercase text-[10px] mb-8">12 Bottles Annually</p>
            <p className="text-beige font-light mb-12 leading-relaxed h-20">The pinnacle of membership, offering unrestricted access to our rarest library wines and bespoke experiences.</p>
            
            <ul className="space-y-6 mb-16 h-64">
              {['Guaranteed allocation of 12 bottles per year', 'Exclusive access to large format and library wines', 'Complimentary private cellar tour & tasting for four', 'Priority booking for the annual Harvest Gala', 'Concierge service for Napa Valley itineraries', 'Complimentary temperature controlled shipping'].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-cream/80 text-sm font-light">
                  <Check className="text-gold mt-1 shrink-0" size={16} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-5 bg-gold text-primary hover:bg-cream transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-medium flex items-center justify-center">
              Request Nomination
            </button>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
}
