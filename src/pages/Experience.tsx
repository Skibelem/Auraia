import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Gastronomic Symphony',
    desc: 'Dine under the stars with menus curated by Michelin-starred chefs, tailored entirely to your palate and the local terroir.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Oceanic Exploration',
    desc: 'Charter our fleet of private yachts for untethered exploration of hidden coves and pristine, untouched waters.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Holistic Restoration',
    desc: 'Ancient healing techniques meet modern wellness science in our private sanctuary spas, designed to restore balance to mind, body, and soul.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop'
  },
  {
    title: 'Curated Expeditions',
    desc: 'From private tours of the Louvre after hours to heli-skiing in the untouched Alps. Your imagination is our only limit.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop'
  }
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-primary min-h-screen pt-32 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-widest uppercase text-sm font-medium mb-6"
        >
          Signature Experiences
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-cream max-w-4xl mx-auto leading-tight mb-8"
        >
          Moments that <br className="hidden md:block"/> define a lifetime.
        </motion.h1>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0.2 : 0.4 }}
              className={`relative group overflow-hidden ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <h2 className="text-3xl md:text-4xl font-heading text-cream mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{exp.title}</h2>
                  <p className="text-muted font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {exp.desc}
                  </p>
                  <div className="mt-8 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <button className="text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-cream hover:border-cream transition-colors">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
