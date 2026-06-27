import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    category: "Harvest",
    title: "The Anatomy of a Perfect Harvest",
    desc: "A meticulous look at how our vineyard team decides the exact hour to pick the Cabernet, balancing sugar, acidity, and phenolic ripeness.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2080&auto=format&fit=crop",
    date: "OCT 12, 2026"
  },
  {
    category: "Cellar Notes",
    title: "The Art of the Blend",
    desc: "Join the winemaker in the lab as we meticulously assemble the final cuvée for the 2025 vintage, tasting through 40 distinct barrel lots.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
    date: "SEP 28, 2026"
  },
  {
    category: "Terroir",
    title: "Volcanic Origins",
    desc: "Understanding the deep geological history of our estate and how the fractured shale contributes to the signature minerality of our wines.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    date: "SEP 15, 2026"
  }
];

export default function Journal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6 text-center md:text-left"
        >
          Editorial
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-heading text-cream"
          >
            The Harvest Journal
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-6 overflow-x-auto pb-4 md:pb-0"
          >
            {['All', 'Harvest', 'Cellar Notes', 'Terroir', 'Viticulture'].map((cat, i) => (
              <button key={i} className={`text-xs tracking-[0.2em] uppercase ${i === 0 ? 'text-gold' : 'text-muted hover:text-cream'} transition-colors whitespace-nowrap`}>
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-video md:aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop"
              alt="Featured"
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-1000"></div>
            <div className="absolute top-6 left-6 bg-primary/80 backdrop-blur-md px-6 py-3 text-gold tracking-[0.2em] uppercase text-[10px] font-medium border border-gold/30">
              Featured Entry
            </div>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4 text-[10px] tracking-[0.2em] uppercase font-medium">
              <span className="text-gold">Viticulture</span>
              <span className="text-muted">NOV 05, 2026</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading text-cream mb-6 group-hover:text-gold transition-colors duration-500 leading-tight">
              The Evolution of the Vine: Adapting to the Seasons
            </h2>
            <p className="text-beige font-light leading-relaxed mb-8 text-lg">
              As the climate shifts, so too must our approach in the vineyard. A deep dive into how dry-farming and canopy management are ensuring the longevity and vitality of our century-old vines.
            </p>
            <button className="flex items-center gap-4 text-gold uppercase tracking-[0.2em] text-xs font-medium hover:text-cream transition-colors duration-500">
              Read Article <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 mb-4 text-[10px] tracking-[0.2em] uppercase font-medium">
                <span className="text-gold">{article.category}</span>
                <span className="text-muted">{article.date}</span>
              </div>
              <h3 className="text-3xl font-heading text-cream mb-4 group-hover:text-gold transition-colors duration-500 leading-snug">
                {article.title}
              </h3>
              <p className="text-beige font-light text-sm line-clamp-3 leading-relaxed">
                {article.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
