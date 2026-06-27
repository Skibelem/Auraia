import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collection = [
  {
    id: 1,
    name: "The Obsidian Chronograph",
    category: "Timepieces",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Auraia Leather Duffle",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CollectionPreview() {
  return (
    <section className="py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
            >
              The Collection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading text-cream max-w-xl"
            >
              Crafted for the extraordinary.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/collection" className="inline-block border-b border-gold text-gold pb-1 hover:text-cream hover:border-cream transition-colors duration-300 uppercase tracking-widest text-sm">
              View Full Collection
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collection.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative aspect-[4/3] mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <p className="text-gold uppercase tracking-widest text-xs mb-2">{item.category}</p>
              <h3 className="text-2xl font-heading text-cream group-hover:text-gold transition-colors duration-300">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
