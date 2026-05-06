import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ur', label: 'اردو', flag: '🇵🇰' },
  { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = lang.code;
      googleCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="lang-container" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <Globe size={16} />
        <span>{selected.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`lang-item ${selected.code === lang.code ? 'selected' : ''}`}
                onClick={() => handleSelect(lang)}
              >
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`classic-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        
        {/* Brand */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon"><Heart size={18} fill="currentColor" /></div>
          <span className="logo-text">HopeRise</span>
        </Link>

        {/* Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`link-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <LanguageSelector />
          <Link to="/donate" className="btn-simple-donate">
            Donate Now
          </Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-simple-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            <div className="mobile-header">
               <span className="logo-text">HopeRise</span>
               <button onClick={() => setIsOpen(false)}><X size={24} /></button>
            </div>
            <div className="mobile-links">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="mobile-link">
                  {link.name}
                </Link>
              ))}
              <Link to="/donate" className="mobile-btn-cta">Donate Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .classic-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 2000;
          height: 90px;
          display: flex;
          align-items: center;
          background: transparent;
          transition: all 0.3s ease;
        }

        .classic-nav.scrolled {
          height: 70px;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          gap: 48px; /* Consistent gap between all primary items */
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .logo-text {
          font-size: 22px;
          font-weight: 800;
          color: #1E293B;
          letter-spacing: -0.02em;
        }

        /* Links */
        .nav-links {
          display: flex;
          gap: 48px; /* Same gap as parent for perfect consistency */
          flex: 1; /* Allow links to occupy central space if needed */
        }

        .link-item {
          font-size: 15px;
          font-weight: 600;
          color: #64748B;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
          padding: 8px 0;
        }

        .link-item:hover, .link-item.active {
          color: var(--color-primary);
        }

        .link-item.active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--color-primary);
        }

        /* Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 48px; /* Consistent gap with other sections */
          flex-shrink: 0;
        }

        .btn-simple-donate {
          padding: 10px 24px;
          background: var(--color-primary);
          color: white;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn-simple-donate:hover {
          background: var(--color-primary-dark);
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-weight: 700;
          font-size: 13px;
          color: #64748B;
          cursor: pointer;
        }

        .lang-container { position: relative; }
        .lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          min-width: 140px;
          margin-top: 15px;
          border: 1px solid #f1f5f9;
        }

        .lang-item {
          width: 100%;
          padding: 10px 14px;
          text-align: left;
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
        }

        .lang-item:hover { background: #f8fafc; color: var(--color-primary); }
        .lang-item.selected { color: var(--color-primary); }

        .menu-toggle { display: none; background: none; border: none; cursor: pointer; }

        /* Mobile Menu */
        .mobile-simple-nav {
          position: fixed;
          inset: 0;
          background: white;
          z-index: 3000;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-link {
          font-size: 24px;
          font-weight: 800;
          color: #1E293B;
          text-decoration: none;
        }

        .mobile-btn-cta {
          margin-top: 30px;
          padding: 18px;
          background: var(--color-primary);
          color: white;
          border-radius: 12px;
          text-align: center;
          font-weight: 800;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .nav-links, .lang-container, .btn-simple-donate { display: none; }
          .menu-toggle { display: block; }
          .classic-nav { height: 70px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
