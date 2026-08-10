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
