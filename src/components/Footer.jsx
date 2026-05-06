import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Send, Globe, Heart as HeartIcon, Sparkles as SparkleIcon, Users as UsersIcon, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer">
      {/* Removed Wave Divider for Space Efficiency */}

      <div className="container footer-main">
        <div className="footer-grid-v2">
          {/* Brand Info */}
          <div className="footer-col brand">
            <Link to="/" className="footer-logo">
              <Heart size={32} fill="var(--color-primary)" />
              <span>Hope <span className="text-primary">Rise</span></span>
            </Link>
            <p className="footer-bio">
              Empowering underprivileged communities through sustainable education and healthcare initiatives since 2010.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-pill" title="Social"><Globe size={20} /></a>
              <a href="#" className="social-pill" title="Impact"><HeartIcon size={20} /></a>
              <a href="#" className="social-pill" title="Community"><SparkleIcon size={20} /></a>
              <a href="#" className="social-pill" title="Network"><LinkIcon size={20} /></a>
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
            <div className="newsletter-box">
              <input type="email" placeholder="Email Address" />
              <button className="news-btn"><Send size={18} /></button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom-v2">
          <p>&copy; {currentYear} Hope Rise Foundation. All Rights Reserved.</p>
          <div className="footer-legal">
            <span className="badge-legal">Reg No: 1234/2010</span>
            <span className="badge-legal">80G Tax Exempt</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-footer {
          background: #0f172a;
          color: white;
          padding-bottom: 40px;
          position: relative;
        }

        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 80px;
        }

        .footer-wave .shape-fill {
          fill: #FFFFFF;
        }

        .footer-main {
          padding-top: 60px;
        }

        .footer-grid-v2 {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 2fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 800;
          color: white;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .footer-bio {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 300px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-pill {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-pill:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-5px);
        }

        .footer-heading {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 20px;
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
          border-radius: 16px;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 24px;
        }

        .newsletter-box input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0 16px;
          color: white;
          outline: none;
        }

        .news-btn {
          width: 48px;
          height: 48px;
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .news-btn:hover {
          background: var(--color-primary-dark);
          transform: scale(1.05);
        }

        .news-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 24px;
        }

        .footer-bottom-v2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .badge-legal {
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .footer-grid-v2 { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .footer-grid-v2 { grid-template-columns: 1fr; }
          .footer-bottom-v2 { flex-direction: column; gap: 24px; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
