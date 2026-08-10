import { motion } from 'framer-motion';
import { LuSparkles } from 'react-icons/lu';
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiTwitter,
} from 'react-icons/fi';

const companyLinks = ['About Us', 'Careers', 'Our Blog', 'Press', 'Contact Us'];
const supportLinks = ['Help Center', 'FAQs', 'Booking Guide', 'Terms & Conditions', 'Privacy Policy'];
const resourceLinks = ['Travel Guides', 'Destination Map', 'Travel Insurance', 'Gift Cards', 'Refer & Earn'];

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container">
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-brand-name">
              <LuSparkles className="logo-icon" />
              <h3>Wanderly</h3>
            </div>
            <p className="footer-brand-tagline">Beyond Ordinary</p>
            <p className="footer-brand-desc">
              We help you explore the world with carefully curated trips and unforgettable experiences.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="YouTube"><FiYoutube /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              {supportLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              {resourceLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get exclusive travel deals and inspiration in your inbox.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>&copy; 2024 Wanderly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
