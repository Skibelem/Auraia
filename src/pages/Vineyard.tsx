import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Vineyard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
      ref={containerRef}
    >
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
        >
          The Estate
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-heading text-cream mb-12 max-w-5xl mx-auto leading-tight"
        >
          Where earth meets the sky.
        </motion.h1>
      </section>

      {/* Main Image */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="relative aspect-video md:aspect-[21/9] w-full overflow-hidden"
        >
          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
            alt="Vineyard Estate"
            className="absolute top-[-10%] w-full h-[120%] object-cover opacity-80"
          />
        </motion.div>
      </section>

      {/* Terroir Information */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-heading text-cream mb-6">The Microclimate</h3>
            <p className="text-beige font-light leading-relaxed">
              Situated 1,200 feet above sea level, our vineyard sits above the morning fog line, exposing the vines to intense daytime sun while the cool maritime breezes drop the temperature at night. This massive diurnal shift ensures slow, even ripening and bright natural acidity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-3xl font-heading text-cream mb-6">The Soil</h3>
            <p className="text-beige font-light leading-relaxed">
              Our 45-acre estate is planted on ancient volcanic rock and fractured shale. This unforgiving terrain forces the vine roots deep into the earth in search of water, resulting in remarkably small berries with extraordinary concentration, dark fruit profiles, and signature minerality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-3xl font-heading text-cream mb-6">Sustainability</h3>
            <p className="text-beige font-light leading-relaxed">
              We practice 100% dry farming and organic viticulture. By eliminating synthetic fertilizers and relying on natural cover crops and sheep grazing, we foster a thriving ecosystem that allows the true voice of the vineyard to be expressed in the bottle.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
