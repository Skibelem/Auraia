import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay object-cover pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Newsletter Section */}
        <div className="border-b border-white/10 pb-20 mb-20 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading text-cream mb-4">Join The Cellar Book</h2>
            <p className="text-muted font-light">
              Subscribe to receive allocation alerts, vintage reports, and invitations to exclusive tastings.
            </p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-b border-white/20 pb-3 text-cream focus:outline-none focus:border-gold transition-colors rounded-none w-full sm:w-80 font-light"
            />
            <button className="px-8 py-3 bg-gold text-primary font-medium tracking-[0.2em] uppercase text-xs hover:bg-cream transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">Château Auraia</h2>
            <p className="text-gold tracking-widest uppercase text-xs mb-8">Established 1987 &bull; Napa Valley</p>
            <p className="text-muted max-w-sm font-light leading-relaxed">
              A heritage of exceptional winemaking. We craft terroir-driven wines that speak to the soul of Napa Valley, pursuing perfection in every vintage.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-8">The Estate</h3>
            <ul className="space-y-4">
              <li><Link to="/story" className="text-muted hover:text-cream transition-colors font-light text-sm">Our Story</Link></li>
              <li><Link to="/vineyard" className="text-muted hover:text-cream transition-colors font-light text-sm">The Vineyard</Link></li>
              <li><Link to="/cellar" className="text-muted hover:text-cream transition-colors font-light text-sm">The Cellar</Link></li>
              <li><Link to="/collection" className="text-muted hover:text-cream transition-colors font-light text-sm">Wine Collection</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs tracking-[0.2em] uppercase text-gold mb-8">Experiences</h3>
            <ul className="space-y-4">
              <li><Link to="/tastings" className="text-muted hover:text-cream transition-colors font-light text-sm">Private Tastings</Link></li>
              <li><Link to="/events" className="text-muted hover:text-cream transition-colors font-light text-sm">Events</Link></li>
              <li><Link to="/wine-club" className="text-muted hover:text-cream transition-colors font-light text-sm">Wine Club</Link></li>
              <li><Link to="/visit" className="text-muted hover:text-cream transition-colors font-light text-sm">Visit Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted/60 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Château Auraia. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-cream transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
