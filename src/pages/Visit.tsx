import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Visit() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          Plan Your Journey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream max-w-5xl mx-auto leading-tight"
        >
          Visit the Estate
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
              alt="Winery Entrance"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-cream leading-tight">
              An intimate encounter with our craft.
            </h2>
            <p className="text-beige text-lg font-light leading-relaxed">
              We welcome guests strictly by prior appointment to ensure every visit receives our undivided attention. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold mb-2">
                  <MapPin size={20} />
                  <h3 className="font-heading text-xl text-cream">Location</h3>
                </div>
                <p className="text-muted font-light text-sm leading-relaxed">
                  1887 Silverado Trail<br/>
                  St. Helena, CA 94574<br/>
                  Napa Valley
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold mb-2">
                  <Clock size={20} />
                  <h3 className="font-heading text-xl text-cream">Hours</h3>
                </div>
                <p className="text-muted font-light text-sm leading-relaxed">
                  Thursday — Monday<br/>
                  10:00 AM — 4:00 PM<br/>
                  Closed Tuesday & Wednesday
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold mb-2">
                  <Calendar size={20} />
                  <h3 className="font-heading text-xl text-cream">Reservations</h3>
                </div>
                <p className="text-muted font-light text-sm leading-relaxed">
                  Required for all experiences.<br/>
                  <Link to="/reservations" className="text-gold hover:text-cream border-b border-gold/30 hover:border-cream transition-colors mt-2 inline-block">Book a Tasting</Link>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold mb-2">
                  <Mail size={20} />
                  <h3 className="font-heading text-xl text-cream">Concierge</h3>
                </div>
                <p className="text-muted font-light text-sm leading-relaxed">
                  concierge@chateauauraia.com<br/>
                  +1 (707) 555-0199
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
