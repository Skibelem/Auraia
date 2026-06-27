import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop" 
          alt="Vineyard Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="text-center relative z-10 p-6">
        <h1 className="text-[120px] md:text-[200px] leading-none font-heading text-gold/20 font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-heading text-cream mb-6">Vintage Not Found</h2>
        <p className="text-beige font-light mb-12 max-w-md mx-auto">
          The page or allocation you are looking for has been depleted or does not exist.
        </p>
        <Link to="/" className="inline-block border-b border-gold text-gold pb-2 hover:text-cream hover:border-cream transition-colors duration-500 uppercase tracking-[0.2em] text-xs font-medium">
          Return to the Estate
        </Link>
      </div>
    </motion.div>
  );
}
