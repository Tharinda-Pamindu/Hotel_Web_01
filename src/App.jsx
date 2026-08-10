import { useEffect } from 'react';
import Lenis from 'lenis';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Features from './components/Features';
import PopularDestinations from './components/PopularDestinations';
import SummerSale from './components/SummerSale';
import TravelExperiences from './components/TravelExperiences';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <Features />
        <PopularDestinations />
        <SummerSale />
        <TravelExperiences />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
