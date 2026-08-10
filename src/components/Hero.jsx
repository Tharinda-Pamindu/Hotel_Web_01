import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { LuSparkle } from 'react-icons/lu';
import heroBg from '../assets/images/hero-bg.png';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src={heroBg} alt="Tropical beach resort with overwater bungalows" />
      </div>
      <div className="hero-overlay" />

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-badge">
            <LuSparkle className="hero-badge-icon" />
            Explore the World
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Journeys That<br />
          Stay <span>With You</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Curated destinations. Handpicked stays.<br />
          Unforgettable experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#destinations" className="hero-btn-primary">
            Explore Destinations
            <FiArrowRight />
          </a>
          <button className="hero-btn-secondary">
            <span className="play-icon">
              <FiPlay />
            </span>
            Watch Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
