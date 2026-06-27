import { motion } from 'framer-motion';

const wines = [
  {
    id: 'V-18',
    name: '2018 Reserve Cabernet Sauvignon',
    varietal: '100% Cabernet Sauvignon',
    region: 'Napa Valley, Estate Grown',
    alcohol: '14.5%',
    price: '$250',
    desc: 'Our flagship wine. Aged 24 months in new French oak. Notes of dark cherry, cassis, subtle cedar, and graphite. Powerful yet exceptionally elegant with velvety tannins.',
    pairings: 'Dry-aged ribeye, wild mushroom risotto, aged gouda.',
    awards: '99 Pts - James Suckling',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop'
  },
  {
    id: 'V-20',
    name: '2020 Estate Chardonnay',
    varietal: '100% Chardonnay',
    region: 'Russian River Valley',
    alcohol: '13.8%',
    price: '$95',
    desc: 'Fermented in concrete eggs and finished in neutral oak. Vibrant acidity balanced by a creamy texture. Aromas of Meyer lemon, white peach, and toasted brioche.',
    pairings: 'Pan-seared scallops, roasted poultry, soft rind cheeses.',
    awards: '96 Pts - Wine Spectator',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2080&auto=format&fit=crop'
  },
  {
    id: 'V-19',
    name: '2019 Grand Cuvee Pinot Noir',
    varietal: '100% Pinot Noir',
    region: 'Sonoma Coast',
    alcohol: '13.5%',
    price: '$120',
    desc: 'A delicate expression of coastal fog and maritime influence. Translucent ruby in the glass, offering wild strawberry, forest floor, and a hint of clove.',
    pairings: 'Duck confit, grilled salmon, truffle dishes.',
    awards: '97 Pts - Decanter',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'V-15',
    name: '2015 Library Release Syrah',
    varietal: '100% Syrah',
    region: 'Napa Valley',
    alcohol: '14.8%',
    price: '$180',
    desc: 'Sourced from our oldest vines. A deeply concentrated, savory wine bursting with blackberry compote, smoked meats, black olive, and cracked black pepper.',
    pairings: 'Braised short ribs, venison, smoked gouda.',
    awards: '98 Pts - Robert Parker',
    image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen pt-40 pb-32"
    >
      <section className="container mx-auto px-6 md:px-12 mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/5 pb-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold tracking-[0.2em] uppercase text-xs font-medium mb-6"
          >
            The Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-heading text-cream"
          >
            Wine Catalogue
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-beige max-w-xs font-light"
        >
          Explore our current releases and rare library vintages. Strictly allocated to preserve our standard of excellence.
        </motion.p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-32">
          {wines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative aspect-[3/4] overflow-hidden group">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 text-[10px] text-gold tracking-[0.3em] uppercase font-medium">
                  Vintage {wine.id.replace('V-', '20')}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-gold uppercase tracking-[0.2em] text-xs mb-4">{wine.varietal}</p>
                <h2 className="text-4xl md:text-5xl font-heading text-cream mb-8 leading-tight">{wine.name}</h2>
                
                <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8 mb-8">
                  <div>
                    <p className="text-muted tracking-[0.2em] uppercase text-[10px] mb-2">Region</p>
                    <p className="text-cream text-sm">{wine.region}</p>
                  </div>
                  <div>
                    <p className="text-muted tracking-[0.2em] uppercase text-[10px] mb-2">Alcohol</p>
                    <p className="text-cream text-sm">{wine.alcohol}</p>
                  </div>
                  <div>
                    <p className="text-muted tracking-[0.2em] uppercase text-[10px] mb-2">Acclaim</p>
                    <p className="text-gold text-sm">{wine.awards}</p>
                  </div>
                  <div>
                    <p className="text-muted tracking-[0.2em] uppercase text-[10px] mb-2">Price</p>
                    <p className="text-cream text-sm">{wine.price} / bottle</p>
                  </div>
                </div>

                <p className="text-beige font-light leading-relaxed mb-6">
                  {wine.desc}
                </p>
                <p className="text-muted font-light text-sm italic mb-12">
                  <span className="text-gold not-italic">Pairing:</span> {wine.pairings}
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="px-8 py-4 bg-gold text-primary hover:bg-cream transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-medium text-center">
                    Acquire Allocation
                  </button>
                  <button className="px-8 py-4 border border-gold/40 text-cream hover:border-gold transition-colors duration-500 tracking-[0.2em] uppercase text-xs font-medium text-center">
                    Technical Sheet
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
