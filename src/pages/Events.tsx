import { motion } from 'framer-motion';

const events = [
  {
    date: 'OCT 15, 2026',
    title: 'The Annual Harvest Gala',
    desc: 'Join the winemaking team as we celebrate the culmination of the growing season. An opulent black-tie dinner set directly within the vineyard rows, featuring library pours and a preview of the upcoming vintage.',
    status: 'Waitlist Only'
  },
  {
    date: 'NOV 12, 2026',
    title: 'Cellar Club Allocation Release',
    desc: 'An exclusive gathering for our Cellar Club members. Pick up your fall allocation, mingle with fellow collectors, and enjoy wood-fired cuisine paired perfectly with our Estate Cabernet.',
    status: 'Members Only'
  },
  {
    date: 'DEC 05, 2026',
    title: 'Winter Solstice En Primeur',
    desc: 'A highly restricted barrel tasting event. Experience the raw potential of the newly fermented vintage before it goes into hibernation for the winter. Includes a private tour of the caves.',
    status: 'Available'
  }
];

export default function Events() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
          >
            Gatherings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-heading text-cream"
          >
            Estate Events
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-beige max-w-sm font-light"
        >
          Curated moments designed to celebrate the cycle of the vine, the craft of the winemaker, and the joy of shared company.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="border border-white/10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 hover:border-gold/40 transition-colors duration-700 bg-secondary/20 group"
            >
              <div className="w-full md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8 flex flex-col justify-center">
                <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">{event.date}</p>
                <div className="inline-block px-4 py-2 border border-white/20 text-cream/80 text-[10px] tracking-[0.2em] uppercase w-max">
                  {event.status}
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-heading text-cream mb-6 group-hover:text-gold transition-colors duration-500">{event.title}</h2>
                <p className="text-beige font-light leading-relaxed max-w-3xl">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
