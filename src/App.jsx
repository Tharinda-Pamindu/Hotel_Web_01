import './index.css';
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
    <>
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
    </>
  );
}

export default App;
