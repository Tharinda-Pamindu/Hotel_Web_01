import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';
import santoriniImg from '../assets/images/santorini.png';
import phuketImg from '../assets/images/phuket.png';
import baliImg from '../assets/images/bali.png';
import banffImg from '../assets/images/banff.png';

const destinations = [
  {
    name: 'Santorini, Greece',
    image: santoriniImg,
    rating: 4.8,
    reviews: '2.3k',
    price: '$799',
  },
  {
    name: 'Phuket, Thailand',
    image: phuketImg,
    rating: 4.7,
    reviews: '1.8k',
    price: '$699',
  },
  {
    name: 'Bali, Indonesia',
    image: baliImg,
    rating: 4.9,
    reviews: '3.1k',
    price: '$649',
  },
  {
    name: 'Banff, Canada',
    image: banffImg,
    rating: 4.8,
    reviews: '1.2k',
    price: '$899',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function PopularDestinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">Top places travelers love right now</p>
          </div>
          <a href="#" className="section-link">
            View All Destinations <FiArrowRight />
          </a>
        </motion.div>

        <motion.div
          className="destinations-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {destinations.map((dest, index) => (
            <motion.div
              className="destination-card"
              key={index}
              variants={cardVariants}
            >
              <div className="destination-image">
                <img src={dest.image} alt={dest.name} />
                <button className="destination-heart" aria-label="Add to wishlist">
                  <FiHeart />
                </button>
              </div>
              <div className="destination-info">
                <h3 className="destination-name">{dest.name}</h3>
                <div className="destination-meta">
                  <div className="destination-rating">
                    <FiStar className="star" />
                    <span>{dest.rating} ({dest.reviews})</span>
                  </div>
                  <div className="destination-price">
                    From <span>{dest.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
