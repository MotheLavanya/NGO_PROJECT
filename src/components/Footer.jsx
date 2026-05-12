import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Twitter } from './BrandIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="premium-footer">
      <div className="container footer-main">
        <div className="footer-grid-v2">
          {/* Brand Info */}
          <div className="footer-col brand">
            <Link to="/" className="footer-logo">
              <Heart size={28} fill="var(--color-primary)" />
              <span>Hope <span className="text-primary">Rise</span></span>
            </Link>
            <p className="footer-bio">
              Empowering underprivileged communities through sustainable education and healthcare initiatives.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-pill" title="Facebook"><Facebook size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-pill" title="Instagram"><Instagram size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-pill" title="Twitter"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-v2">
              <li><Link to="/about">Our Mission</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/impact">Impact Stories</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-contact-v2">
              <div className="contact-item">
                <MapPin size={20} className="text-primary" />
                <span>Hitech City, Hyderabad, 500081</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="text-primary" />
                <span>+91 40 1234 5678</span>
              </div>
              <div className="contact-item">
                <Mail size={20} className="text-primary" />
                <span>hello@hoperise.org</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="news-desc">Stay updated with our latest impact stories and events.</p>
            
            {subscribed ? (
              <div className="footer-success-msg">
                <div className="success-check">✓</div>
                <span>Welcome! You're now subscribed to our updates.</span>
              </div>
            ) : (
              <form className="newsletter-box" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="news-btn" type="submit"><Send size={18} /></button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-v2">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Hope Rise Foundation. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="dot-sep"></span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
          <div className="footer-legal">
            <span className="badge-legal">Reg No: 1234/2010</span>
            <span className="badge-legal">80G Tax Exempt</span>
          </div>
        </div>
      </div>

      <style>{`
        .premium-footer {
          background: #0f172a;
          color: white;
          padding-bottom: 24px;
          position: relative;
        }

        .footer-main {
          padding-top: 40px;
        }

        .footer-grid-v2 {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 2fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 800;
          color: white;
          text-decoration: none;
          margin-bottom: 12px;
        }

        .footer-bio {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 16px;
          max-width: 280px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .social-pill {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-pill:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-3px);
        }

        .footer-heading {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 16px;
          color: white;
        }

        .footer-links-v2 {
          list-style: none;
          padding: 0;
        }

        .footer-links-v2 li {
          margin-bottom: 16px;
        }

        .footer-links-v2 a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .footer-links-v2 a:hover {
          color: var(--color-primary);
          padding-left: 8px;
        }

        .footer-contact-v2 {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }

        .newsletter-box {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 16px;
        }

        .newsletter-box input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0 12px;
          color: white;
          outline: none;
          font-size: 13px;
        }

        .news-btn {
          width: 40px;
          height: 40px;
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .news-btn:hover {
          background: var(--color-primary-dark);
          transform: scale(1.05);
        }

        .news-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
        }

        .footer-success-msg {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(34, 197, 94, 0.1);
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #86efac;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
        }

        .success-check {
          width: 20px;
          height: 20px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 12px;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 16px;
        }

        .footer-bottom-v2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-bottom-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-bottom-left p {
          margin: 0;
          font-size: 13px;
          color: #94a3b8;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-legal-links a {
          font-size: 12px;
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-legal-links a:hover {
          color: var(--color-primary);
        }

        .dot-sep {
          width: 3px;
          height: 3px;
          background: #334155;
          border-radius: 50%;
        }

        .footer-legal {
          display: flex;
          gap: 10px;
        }

        .badge-legal {
          background: #1e293b;
          color: #94a3b8;
          font-size: 10px;
          padding: 3px 8px;
          border-radius: 100px;
          border: 1px solid #334155;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .footer-grid-v2 { grid-template-columns: 1fr; gap: 40px; }
          .footer-bottom-v2 { flex-direction: column; text-align: center; }
          .footer-bottom-left { align-items: center; }
          .footer-legal { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
