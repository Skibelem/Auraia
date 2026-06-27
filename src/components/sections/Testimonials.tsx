import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-16"
        >
          Critical Acclaim
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-3xl md:text-5xl font-heading text-cream leading-relaxed mb-12">
              "Auraia's Reserve Cabernet is nothing short of a masterpiece. It captures the true essence of Napa with an elegance rarely seen in modern winemaking."
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="text-gold font-heading text-xl">James Suckling</span>
              <span className="text-muted tracking-[0.2em] uppercase text-[10px]">Wine Critic • 99 Points</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
