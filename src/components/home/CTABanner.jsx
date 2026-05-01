import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-overlay"></div>
      <div className="container cta-content">
        <h2>Be the reason someone smiles today.</h2>
        <p>Your contribution, whether it's your time or resources, has the power to change a life forever. Join our mission to create a brighter tomorrow.</p>
        
        <div className="cta-buttons">
          <Link to="/donate" className="btn btn-primary cta-btn">
            Donate Now <Heart size={20} fill="white" />
          </Link>
          <Link to="/volunteer" className="btn btn-outline cta-btn outline-white">
            Become a Volunteer <Users size={20} />
          </Link>
        </div>
      </div>

      <style>{`
        .cta-banner {
          position: relative;
          padding: 60px 0; /* Reduced from 100px */
          background-color: var(--color-primary-dark);
          background-image: radial-gradient(circle at right center, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
          text-align: center;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 720px; /* Tighter width */
        }

        .cta-content h2 {
          color: var(--color-white);
          font-size: 32px; /* Reduced from 48px */
          margin-bottom: 16px; /* Reduced from 24px */
          font-weight: 700;
        }

        .cta-content p {
          font-size: 16px; /* Reduced from 20px */
          opacity: 0.85;
          margin-bottom: 24px; /* Reduced from 40px */
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px; /* Reduced from 24px */
        }

        .cta-btn {
          padding: 12px 24px; /* Reduced from 16px 32px */
          font-size: 16px; /* Reduced from 18px */
        }

        .outline-white {
          border-color: rgba(255, 255, 255, 0.5);
          color: var(--color-white);
        }

        .outline-white:hover {
          background-color: var(--color-white);
          color: var(--color-primary-dark);
          border-color: var(--color-white);
        }

        @media (max-width: 768px) {
          .cta-banner { padding: 48px 0; }
          .cta-content h2 { font-size: 28px; }
          .cta-buttons { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
