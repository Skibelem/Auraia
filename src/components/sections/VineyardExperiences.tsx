import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    name: "The Cave Tasting",
    category: "Immersive",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Vineyard Picnic",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2074&auto=format&fit=crop"
  }
];

export default function VineyardExperiences() {
  return (
    <section className="py-32 md:py-48 bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-8"
            >
              Estate Experiences
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading text-cream max-w-2xl leading-tight"
            >
              Savor the terroir.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to="/tastings" className="inline-block border-b border-gold text-gold pb-2 hover:text-cream hover:border-cream transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-medium">
              View All Experiences
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 * index }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative aspect-video md:aspect-[4/3] mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4">{item.category}</p>
              <h3 className="text-3xl font-heading text-cream group-hover:text-gold transition-colors duration-500">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
