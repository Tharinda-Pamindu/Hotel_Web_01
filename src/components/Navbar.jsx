import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { LuSparkles } from 'react-icons/lu';
import ThemeToggle from './ThemeToggle';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
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
            <ThemeToggle />
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-drawer-header">
                <a href="#home" className="navbar-logo" onClick={() => setMobileOpen(false)}>
                  <LuSparkles className="navbar-logo-icon" style={{ color: 'var(--color-primary)' }} />
                  <div className="navbar-logo-text">
                    <span className="navbar-logo-name" style={{ color: 'var(--color-dark)' }}>Wanderly</span>
                    <span className="navbar-logo-tagline">Beyond Ordinary</span>
                  </div>
                </a>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>

              <nav className="mobile-drawer-links">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className={link.active ? 'active' : ''}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mobile-drawer-actions">
                <ThemeToggle />
                <a href="#plan" className="navbar-cta" onClick={() => setMobileOpen(false)}>
                  Plan a Trip
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
