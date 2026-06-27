import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import WinemakerIntro from '../components/sections/WinemakerIntro';
import VineyardExperiences from '../components/sections/VineyardExperiences';
import FeaturedWines from '../components/sections/FeaturedWines';
import WineClubPreview from '../components/sections/WineClubPreview';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-primary min-h-screen"
    >
      <Hero />
      <WinemakerIntro />
      <FeaturedWines />
      <Testimonials />
      <VineyardExperiences />
      <WineClubPreview />
    </motion.div>
  );
}
