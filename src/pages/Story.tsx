import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
      ref={containerRef}
    >
      {/* Hero Header */}
      <section className="container mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          Our Heritage
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream mb-12 max-w-6xl mx-auto leading-tight"
        >
          Rooted in tradition, crafted for eternity.
        </motion.h1>
      </section>

      {/* Cinematic Parallax Section */}
      <section className="relative h-[80vh] w-full overflow-hidden mb-32">
        <motion.div style={{ y: parallaxY1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
            alt="Vineyard Landscape"
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>
        <div className="absolute inset-0 bg-primary/30"></div>
      </section>

      {/* Editorial Layout */}
      <section className="container mx-auto px-6 md:px-12 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 md:sticky top-40">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-cream mb-8 leading-tight">
              "We do not make the wine; we allow the terroir to speak through it."
            </h2>
            <p className="text-gold uppercase tracking-[0.2em] text-xs">— The Vintners</p>
          </div>
          <div className="md:col-span-7 space-y-16 text-beige text-lg font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-xl"
            >
              Established in 1987, Château Auraia began as a bold vision to harness the untamed potential of Napa Valley's high-altitude slopes. We believed that the stress of the rocky volcanic soil would yield fruit of unparalleled concentration and character.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="aspect-[16/9] w-full overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2080&auto=format&fit=crop"
                alt="Grape Harvest"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              For three generations, our family has walked these rows at dawn, pruning by hand, harvesting by moonlight, and resting the wine in French oak deep within our subterranean caves. We respect the ancient rhythms of viticulture while embracing modern precision, ensuring every bottle of Château Auraia is a flawless reflection of the vintage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: parallaxY2 }} className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop"
              alt="Winemaker in Cellar"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="space-y-12 md:pl-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5 }}
              className="aspect-square overflow-hidden w-3/4 ml-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Oak Barrels"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="text-3xl font-heading text-cream leading-relaxed"
            >
              A dedication to excellence that transcends time, poured into every glass.
            </motion.p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
