import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 1,
    title: "Culinary Excellence",
    subtitle: "A journey of taste",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
    link: "/experience#culinary"
  },
  {
    id: 2,
    title: "Private Aviation",
    subtitle: "Boundless horizons",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
    link: "/experience#aviation"
  },
  {
    id: 3,
    title: "Wellness Sanctuary",
    subtitle: "Rejuvenate the soul",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    link: "/experience#wellness"
  }
];

export default function FeaturedExperiences() {
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
    <section className="py-32 bg-primary overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
          >
            Curated Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-cream"
          >
            Life, elevated.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              style={{ y: transforms[i] }}
              className={`relative group ${i === 1 ? 'md:mt-24' : ''}`}
            >
              <Link to={exp.link} className="block overflow-hidden relative aspect-[3/4]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold uppercase tracking-widest text-xs mb-2">{exp.subtitle}</p>
                  <h3 className="text-2xl font-heading text-cream">{exp.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
