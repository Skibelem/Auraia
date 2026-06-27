import { motion } from 'framer-motion';

export default function Reservations() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-secondary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          Book an Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-heading text-cream mb-8"
        >
          Reservations
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="bg-primary/50 border border-white/5 p-8 md:p-16"
        >
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Experience Type</label>
                <select className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none appearance-none font-light">
                  <option className="bg-primary text-cream">The Estate Tasting ($75)</option>
                  <option className="bg-primary text-cream">The Library Cellar Experience ($150)</option>
                  <option className="bg-primary text-cream">The Winemaker's Table ($300)</option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Number of Guests</label>
                <select className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none appearance-none font-light">
                  <option className="bg-primary text-cream">2 Guests</option>
                  <option className="bg-primary text-cream">3 Guests</option>
                  <option className="bg-primary text-cream">4 Guests</option>
                  <option className="bg-primary text-cream">5 Guests</option>
                  <option className="bg-primary text-cream">6 Guests</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Preferred Date</label>
                <input type="date" className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none font-light" />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Preferred Time</label>
                <select className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none appearance-none font-light">
                  <option className="bg-primary text-cream">10:00 AM</option>
                  <option className="bg-primary text-cream">11:30 AM</option>
                  <option className="bg-primary text-cream">1:00 PM</option>
                  <option className="bg-primary text-cream">2:30 PM</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">First Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none font-light" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Last Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none font-light" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Email Address</label>
                <input type="email" className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none font-light" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Phone Number</label>
                <input type="tel" className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors rounded-none font-light" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-gold tracking-[0.2em] uppercase text-[10px] font-medium">Special Requests / Dietary Restrictions</label>
              <textarea rows={3} className="bg-transparent border-b border-white/20 pb-4 text-cream text-lg focus:outline-none focus:border-gold transition-colors resize-none rounded-none font-light"></textarea>
            </div>

            <div className="pt-8">
              <button type="button" className="w-full py-5 bg-gold text-primary hover:bg-cream transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-medium">
                Request Reservation
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
}
