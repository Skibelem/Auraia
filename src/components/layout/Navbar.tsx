import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Our Story', path: '/story' },
  { name: 'The Vineyard', path: '/vineyard' },
  { name: 'The Cellar', path: '/cellar' },
  { name: 'Wines', path: '/collection' },
  { name: 'Wine Club', path: '/wine-club' },
  { name: 'Tastings', path: '/tastings' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out',
          isScrolled ? 'py-4 bg-primary/95 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-heading text-cream z-50 relative">
            Château Auraia
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-xs tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition-colors duration-500 group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/reservations"
              className="ml-6 px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-primary transition-all duration-500"
            >
              Reservations
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-cream z-50 relative p-2 hover:text-gold transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-secondary flex flex-col items-center justify-center space-y-8"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay object-cover pointer-events-none"></div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
              >
                <Link
                  to={link.path}
                  className="text-4xl font-heading text-cream hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                to="/reservations"
                className="mt-8 px-10 py-5 bg-gold text-primary font-medium tracking-[0.2em] uppercase text-xs hover:bg-cream transition-colors duration-300"
              >
                Make a Reservation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
