import { motion } from 'framer-motion';
import { FiMapPin, FiDollarSign, FiHeadphones, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: <FiMapPin />,
    title: 'Handpicked Places',
    desc: 'We personally select the best destinations for you.',
    color: 'green',
  },
  {
    icon: <FiDollarSign />,
    title: 'Best Price Guarantee',
    desc: 'Get the best prices with no hidden fees.',
    color: 'gold',
  },
  {
    icon: <FiHeadphones />,
    title: '24/7 Support',
    desc: 'Our travel experts are here to help anytime.',
    color: 'teal',
  },
  {
    icon: <FiShield />,
    title: 'Secure Booking',
    desc: 'Book with confidence using secure payments.',
    color: 'purple',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              variants={itemVariants}
            >
              <div className={`feature-icon ${feature.color}`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
