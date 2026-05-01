import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Globe, ChevronDown } from 'lucide-react';
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

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    
    // Trigger Google Translate engine
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = lang.code;
      googleCombo.dispatchEvent(new Event('change'));
    } else {
      // Fallback if not ready, try again in 500ms
      setTimeout(() => {
        const retryCombo = document.querySelector('.goog-te-combo');
        if (retryCombo) {
          retryCombo.value = lang.code;
          retryCombo.dispatchEvent(new Event('change'));
        }
      }, 500);
    }
  };

  return (
    <div className="lang-selector" ref={ref}>
      {/* Hidden container for Google Translate to initialize */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <button className="lang-trigger" onClick={() => setOpen(!open)}>
        <Globe size={15} />
        <span>{selected.flag} {selected.label}</span>
        <ChevronDown size={13} className={`lang-chevron ${open ? 'open' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${selected.code === lang.code ? 'lang-active' : ''}`}
                onClick={() => handleSelect(lang)}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span>{lang.label}</span>
                {selected.code === lang.code && <span className="lang-check">✓</span>}
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
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

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
            <LanguageSelector />
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
              {/* Language selector in mobile menu too */}
              <div style={{ padding: '4px 0' }}>
                <LanguageSelector />
              </div>
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
          background: rgba(255, 255, 255, 0.95);
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
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 24px;
          color: var(--color-text-heading);
        }

        .logo-icon { color: var(--color-primary); }
        .logo-accent { color: var(--color-primary); }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-main);
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        /* ── Language Selector ── */
        .lang-selector {
          position: relative;
        }

        .lang-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: var(--color-white);
          color: var(--color-text-main);
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }

        .lang-trigger:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: var(--color-primary-light);
        }

        .lang-chevron {
          transition: transform 0.2s ease;
        }

        .lang-chevron.open {
          transform: rotate(180deg);
        }

        .lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 160px;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          z-index: 999;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 14px;
          background: none;
          border: none;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-main);
          cursor: pointer;
          text-align: left;
          transition: background 0.15s;
        }

        .lang-option:hover {
          background: var(--color-bg-subtle);
          color: var(--color-primary);
        }

        .lang-active {
          background: var(--color-primary-light);
          color: var(--color-primary);
          font-weight: 700;
        }

        .lang-flag { font-size: 16px; }

        .lang-check {
          margin-left: auto;
          color: var(--color-primary);
          font-size: 12px;
          font-weight: 700;
        }

        /* ── Mobile ── */
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-text-heading);
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--color-white);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 16px;
        }

        .mobile-link {
          font-size: 17px;
          font-weight: 600;
          color: var(--color-text-heading);
        }

        .mobile-link.active { color: var(--color-primary); }

        .mobile-cta {
          width: 100%;
          margin-top: 8px;
        }

        @media (max-width: 1150px) {
          .desktop-links { gap: 16px; }
          .nav-actions { gap: 12px; }
        }

        @media (max-width: 1024px) {
          .desktop-links { display: none; }
          .mobile-toggle { display: flex; align-items: center; justify-content: center; }
          .nav-container { height: 70px; }
        }

        @media (max-width: 480px) {
          .nav-container { padding: 0 16px; }
          .logo-text { font-size: 18px; }
          .mobile-menu { border-top: 1px solid var(--color-border); }
          .mobile-nav-links { padding: 32px 20px; gap: 20px; }
          .mobile-link { font-size: 18px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
