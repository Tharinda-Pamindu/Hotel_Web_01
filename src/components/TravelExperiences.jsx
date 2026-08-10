import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { LuFlame, LuWaves, LuPawPrint, LuSparkles } from 'react-icons/lu';
import balloonImg from '../assets/images/balloon.png';
import scubaImg from '../assets/images/scuba.png';
import safariImg from '../assets/images/safari.png';
import northernImg from '../assets/images/northern-lights.png';

const experiences = [
  {
    name: 'Hot Air Balloon Ride',
    location: 'Cappadocia, Turkey',
    price: '$199',
    image: balloonImg,
    icon: <LuFlame />,
    iconColor: '#e74c3c',
  },
  {
    name: 'Scuba Diving Adventure',
    location: 'Maldives',
    price: '$159',
    image: scubaImg,
    icon: <LuWaves />,
    iconColor: '#2d8278',
  },
  {
    name: 'Wildlife Safari',
    location: 'Masai Mara, Kenya',
    price: '$249',
    image: safariImg,
    icon: <LuPawPrint />,
    iconColor: '#c5a55a',
  },
  {
    name: 'Northern Lights Tour',
    location: 'Iceland',
    price: '$299',
    image: northernImg,
    icon: <LuSparkles />,
    iconColor: '#785096',
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

export default function TravelExperiences() {
  return (
    <section className="experiences" id="experiences">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="section-title">Travel Experiences</h2>
            <p className="section-subtitle">Curated experiences to make your trip unforgettable</p>
          </div>
          <a href="#" className="section-link">
            View All Experiences <FiArrowRight />
          </a>
        </motion.div>

        <motion.div
          className="experiences-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-card"
              key={index}
              variants={cardVariants}
            >
              <div className="experience-image">
                <img src={exp.image} alt={exp.name} />
                <div
                  className="experience-icon-wrapper"
                  style={{ color: exp.iconColor }}
                >
                  {exp.icon}
                </div>
              </div>
              <div className="experience-info">
                <h3 className="experience-name">{exp.name}</h3>
                <p className="experience-location">{exp.location}</p>
                <div className="experience-footer">
                  <p className="experience-price">
                    From <span>{exp.price}</span> / person
                  </p>
                  <div className="experience-arrow">
                    <FiArrowRight />
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
