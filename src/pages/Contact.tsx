import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32 flex flex-col justify-center"
    >
      <section className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mx-auto mb-12 text-gold"
        >
          <Mail size={24} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading text-cream mb-8"
        >
          Correspondence
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-beige text-lg mb-16 font-light leading-relaxed"
        >
          For private client services, wine club inquiries, press, or general information, please reach out to our dedicated team. We endeavor to respond to all correspondence within 24 hours.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="mailto:inquiries@chateauauraia.com"
            className="inline-flex items-center gap-6 text-2xl md:text-4xl font-heading text-gold hover:text-cream transition-colors duration-500 group border-b border-transparent hover:border-cream pb-2"
          >
            inquiries@chateauauraia.com <ArrowRight className="group-hover:translate-x-4 transition-transform duration-500 text-cream" size={32} />
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}
