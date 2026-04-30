import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Transparency', path: '/transparency' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Heart className="logo-icon" fill="var(--color-primary)" />
          <span className="logo-text">Hope <span className="logo-accent">Rise</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="nav-actions">
            {/* The single Translate widget container */}
            <div id="google_translate_element" className="translate-widget"></div>
            
            <Link to="/donate" className="btn btn-primary nav-cta">
              Donate <Heart size={16} fill="white" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="container mobile-nav-links">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" className="btn btn-primary mobile-cta">
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .fixed-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          background: transparent;
        }

        .fixed-nav.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          height: 70px;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--color-text-main);
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .logo-accent {
          color: var(--color-primary);
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-muted);
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-text-main);
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 1.5rem;
        }

        .mobile-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-main);
        }

        .mobile-link.active {
          color: var(--color-primary);
        }

        .mobile-cta {
          width: 100%;
          margin-top: 1rem;
        }

        @media (max-width: 1150px) {
          .desktop-links { gap: 1rem; }
          .nav-actions { gap: 0.5rem; }
        }

        @media (max-width: 1024px) {
          .desktop-links { display: none; }
          .mobile-toggle { display: block; }
        }

        .translate-widget {
          min-width: 140px;
        }
      `}</style>
      <style>{`
        /* Hide Google Translate Banner and UI elements */
        iframe.goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        #goog-gt-tt, .goog-te-balloon-frame, .goog-tooltip {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
          border: none !important;
        }
        .goog-te-gadget-simple {
          background-color: rgba(255, 255, 255, 0.5) !important;
          border: 1px solid rgba(13, 148, 136, 0.2) !important;
          padding: 6px 10px !important;
          border-radius: 20px !important;
          font-family: inherit !important;
          font-size: 0.8rem !important;
          display: flex !important;
          align-items: center !important;
          gap: 4px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        .goog-te-gadget-simple:hover {
          background-color: white !important;
          border-color: var(--color-primary) !important;
        }
        .goog-te-gadget-icon {
          display: none !important;
        }
        .goog-te-menu-value {
          margin: 0 !important;
          display: flex !important;
          align-items: center !important;
          gap: 2px !important;
          color: var(--color-text-main) !important;
          font-weight: 600 !important;
        }
        .goog-te-menu-value span {
          color: var(--color-primary) !important;
        }
        .goog-te-menu-value:after {
          content: '▼';
          font-size: 8px;
          margin-left: 2px;
        }
        .goog-te-menu-value img {
          display: none !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
