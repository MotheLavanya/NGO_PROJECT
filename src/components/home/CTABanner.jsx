import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="premium-cta-mini">
      <div className="container">
        <motion.div 
          className="cta-glass-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Animated Background Mesh & Image */}
          <div className="strip-bg-image">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600" alt="CTA Background" />
            <div className="strip-overlay"></div>
          </div>
          <div className="strip-glow"></div>
          
          <div className="strip-content">
            <div className="text-side">
              <div className="badge-spark">
                <Sparkles size={12} className="text-accent" />
                <span>Make an Impact</span>
              </div>
              <h2 className="strip-title">
                Be the Reason Someone <span className="text-highlight-v3">Smiles Today</span>
              </h2>
              <p className="strip-desc">
                Your contribution has the power to change a life forever. Join 10k+ donors today.
              </p>
            </div>

            <div className="actions-side">
              <div className="trust-row-mini">
                <div className="t-item"><ShieldCheck size={12} /> <span>80G Tax Exempt</span></div>
                <div className="t-item"><ShieldCheck size={12} /> <span>100% Safe</span></div>
              </div>
              
              <div className="btn-group-mini">
                <Link to="/donate" className="btn-p-mini">
                  Donate Now <Heart size={16} fill="currentColor" />
                </Link>
                <Link to="/volunteer" className="btn-s-mini">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .premium-cta-mini {
          padding: 60px 0;
          background: #fff;
          position: relative;
        }

        .cta-glass-strip {
          position: relative;
          background: var(--color-primary-dark);
          padding: 40px 60px;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .strip-glow {
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
          opacity: 0.3;
          z-index: 0;
        }

        .strip-bg-image {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.15;
        }

        .strip-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .strip-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--color-primary-dark), transparent);
        }

        .strip-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .badge-spark {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .strip-title {
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .text-highlight-v3 {
          color: var(--color-accent);
          background: linear-gradient(to right, var(--color-accent), #fcd34d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .strip-desc {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
        }

        .actions-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 20px;
        }

        .trust-row-mini {
          display: flex;
          gap: 16px;
        }

        .t-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
        }

        .btn-group-mini {
          display: flex;
          gap: 12px;
        }

        .btn-p-mini {
          padding: 14px 28px;
          background: var(--color-accent);
          color: white;
          border-radius: 16px;
          font-weight: 700;
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
        }

        .btn-p-mini:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(249, 115, 22, 0.4);
        }

        .btn-s-mini {
          padding: 14px 28px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-s-mini:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
        }

        @media (max-width: 1024px) {
          .strip-content { flex-direction: column; text-align: center; }
          .actions-side { align-items: center; }
          .strip-desc { margin: 0 auto; }
        }

        @media (max-width: 768px) {
          .cta-glass-strip { padding: 40px 24px; border-radius: 32px; }
          .strip-title { font-size: 24px; }
          .btn-group-mini { flex-direction: column; width: 100%; }
          .btn-p-mini, .btn-s-mini { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
