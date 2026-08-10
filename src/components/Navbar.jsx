import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Guides', href: '#guides' },
  { label: 'About Us', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <LuSparkles className="navbar-logo-icon" />
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">Wanderly</span>
            <span className="navbar-logo-tagline">Beyond Ordinary</span>
          </div>
        </a>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <FiSearch className="navbar-icon" />
          <FiHeart className="navbar-icon" />
          <FiUser className="navbar-icon" />
          <a href="#plan" className="navbar-cta">Plan a Trip</a>
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
