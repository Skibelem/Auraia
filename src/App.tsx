import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Layout
import SmoothScroller from './components/layout/SmoothScroller';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Story from './pages/Story';
import Vineyard from './pages/Vineyard';
import Cellar from './pages/Cellar';
import Collection from './pages/Collection';
import WineClub from './pages/WineClub';
import PrivateTastings from './pages/PrivateTastings';
import Events from './pages/Events';
import Journal from './pages/Journal';
import Gallery from './pages/Gallery';
import Visit from './pages/Visit';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/vineyard" element={<Vineyard />} />
        <Route path="/cellar" element={<Cellar />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/wine-club" element={<WineClub />} />
        <Route path="/tastings" element={<PrivateTastings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <SmoothScroller>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </SmoothScroller>
  );
}

export default App;
