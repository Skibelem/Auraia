import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tastings = [
  {
    title: 'The Estate Tasting',
    duration: '90 Minutes',
    price: '$75 per guest',
    desc: 'An immersive introduction to Château Auraia. Enjoy a guided flight of four current release wines while overlooking the valley from our outdoor terrace.',
    image: 'https://images.unsplash.com/photo-1559564484-e48b3e040ff4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'The Library Cellar Experience',
    duration: '120 Minutes',
    price: '$150 per guest',
    desc: 'Descend into our subterranean caves for a private, seated tasting. This experience features a curated flight of highly allocated library vintages and a barrel tasting.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'The Winemaker’s Table',
    duration: '180 Minutes',
    price: '$300 per guest',
    desc: 'A masterclass in terroir and gastronomy. Includes a comprehensive vineyard tour followed by a five-course paired luncheon prepared by our Executive Chef, hosted in the private dining room.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function PrivateTastings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream max-w-5xl mx-auto leading-tight mb-8"
        >
          Savor the terroir.
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:gap-32">
          {tastings.map((tasting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative">
                <img
                  src={tasting.image}
                  alt={tasting.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">{tasting.title}</h2>
                <div className="flex gap-6 text-gold tracking-[0.2em] uppercase text-[10px] mb-8 font-medium">
                  <span>{tasting.duration}</span>
                  <span>|</span>
                  <span>{tasting.price}</span>
                </div>
                <p className="text-beige font-light leading-relaxed mb-12 max-w-lg">
                  {tasting.desc}
                </p>
                <Link to="/reservations" className="inline-flex items-center gap-4 text-gold uppercase tracking-[0.2em] text-xs font-medium hover:text-cream transition-colors duration-500 w-max">
                  Book Experience <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
