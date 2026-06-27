import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const wines = [
  {
    id: 1,
    name: "2018 Reserve Cabernet Sauvignon",
    notes: "Dark cherry, cassis, and subtle cedar",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop",
    link: "/collection#cabernet"
  },
  {
    id: 2,
    name: "2020 Estate Chardonnay",
    notes: "Meyer lemon, white peach, toasted brioche",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2080&auto=format&fit=crop",
    link: "/collection#chardonnay"
  },
  {
    id: 3,
    name: "2019 Grand Cuvee Pinot Noir",
    notes: "Wild strawberry, forest floor, and clove",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    link: "/collection#pinot-noir"
  }
];

export default function FeaturedWines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const transforms = [y1, y2, y3];

  return (
    <section className="py-32 md:py-48 bg-secondary overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-8"
          >
            The Cellar Selection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-cream"
          >
            Wines of distinction.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {wines.map((wine, i) => (
            <motion.div
              key={wine.id}
              style={{ y: transforms[i] }}
              className={`relative group ${i === 1 ? 'md:mt-32' : ''}`}
            >
              <Link to={wine.link} className="block overflow-hidden relative aspect-[3/5]">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-1000"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {wine.notes}
                  </p>
                  <h3 className="text-3xl font-heading text-cream leading-tight">{wine.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
