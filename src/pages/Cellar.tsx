import { motion } from 'framer-motion';

export default function Cellar() {
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
          The Cellar
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream mb-12 max-w-5xl mx-auto leading-tight"
        >
          Time is our most valuable ingredient.
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Oak Barrels in Cellar"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-12 lg:pl-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading text-cream"
            >
              The Art of Elevage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-beige text-lg font-light leading-relaxed"
            >
              Buried 60 feet deep into the volcanic hillside, our subterranean caves maintain a natural 58-degree temperature and 80% humidity year-round. This perfect environment allows our wines to age gracefully, free from vibration and light.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-beige text-lg font-light leading-relaxed"
            >
              We exclusively utilize tight-grain French oak barrels, carefully sourced from the Tronçais and Allier forests, and coopered to our exact specifications. The toast levels are kept subtle to ensure the oak serves merely as a framing device, never overpowering the purity of the fruit.
            </motion.p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
