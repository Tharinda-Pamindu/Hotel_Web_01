import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function SummerSale() {
  return (
    <section className="sale-banner">
      <div className="container">
        <motion.div
          className="sale-inner"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="sale-content">
            <span className="sale-badge">Limited Time Offer</span>
            <h2 className="sale-title">Summer Getaway Sale</h2>
            <p className="sale-subtitle">Up to 30% Off on Selected Destinations</p>
            <p className="sale-desc">
              Book your dream trip now and save big on<br />
              exclusive handpicked stays.
            </p>
            <a href="#" className="sale-cta">
              Explore Offers <FiArrowRight />
            </a>
          </div>

          <motion.div
            className="sale-discount"
            initial={{ rotate: -10, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 120 }}
          >
            <span className="sale-discount-label">Up to</span>
            <span className="sale-discount-value">30%</span>
            <span className="sale-discount-off">Off</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
