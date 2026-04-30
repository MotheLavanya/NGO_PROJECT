import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from './BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Heart className="logo-icon" fill="var(--color-primary)" />
            <span className="logo-text">Hope <span className="logo-accent">Rise</span></span>
          </Link>
          <p className="footer-tagline">
            Empowering underprivileged communities in Telangana through education, healthcare, and sustainable initiatives since 2010.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Our Programs</Link></li>
            <li><Link to="/impact">Impact Stories</Link></li>
            <li><Link to="/volunteer">Get Involved</Link></li>
            <li><Link to="/donate">Donate Now</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/transparency">Transparency</Link></li>
            <li><Link to="/blog">Latest News</Link></li>
            <li><Link to="/transparency">Annual Reports</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={20} className="contact-icon" />
              <span>Plot 42, Hitech City, Hyderabad, Telangana 500081</span>
            </li>
            <li>
              <Phone size={20} className="contact-icon" />
              <span>+91 40 1234 5678</span>
            </li>
            <li>
              <Mail size={20} className="contact-icon" />
              <span>hello@hoperise.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {currentYear} Hope Rise Foundation. All Rights Reserved.</p>
          <div className="legal-badges">
            <span>Reg No: 1234/2010</span>
            <span>FCRA Compliant</span>
            <span>80G Tax Exempt</span>
          </div>
        </div>
      </div>

      <style>{`
        .main-footer {
          background-color: var(--color-bg-subtle);
          padding-top: 80px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 60px;
        }

        .footer-brand .logo {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .footer-tagline {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          max-width: 320px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--color-primary);
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .social-icon:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-3px);
        }

        .footer-links h3, .footer-contact h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
        }

        .footer-links ul li {
          margin-bottom: 0.8rem;
        }

        .footer-links ul li a {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .footer-links ul li a:hover {
          color: var(--color-primary);
          padding-left: 5px;
        }

        .contact-list li {
          display: flex;
          gap: 12px;
          margin-bottom: 1.2rem;
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .contact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .footer-bottom {
          padding: 30px 0;
          background: var(--color-white);
          border-top: 1px solid rgba(0,0,0,0.05);
          font-size: 0.9rem;
          color: var(--color-text-light);
        }

        .bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .legal-badges {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .bottom-flex { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
