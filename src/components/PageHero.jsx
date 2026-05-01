import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, bgImage, showCTA = false }) => {
  const hasImage = Boolean(bgImage);
  
  if (!hasImage) {
    return (
      <section className="simple-hero simple-hero-centered">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="simple-hero-solo"
          >
            <div className="simple-trust-badge">
              <ShieldCheck size={16} className="text-primary" /> 
              <span>Verified 80G/12A NGO</span>
            </div>
            <h1 className="simple-hero-title">{title}</h1>
            <p className="simple-hero-subtitle">{subtitle}</p>
          </motion.div>
        </div>
        <style>{`
          .simple-hero { padding: 100px 0 60px; background: var(--color-bg-subtle); text-align: center; }
          .simple-hero-title { font-size: 40px; color: var(--color-text-heading); margin-bottom: 16px; }
          .simple-hero-subtitle { font-size: 16px; color: var(--color-text-muted); max-width: 600px; margin: 0 auto; line-height: 1.6; }
          .simple-trust-badge { display: inline-flex; align-items: center; gap: 8px; background: white; padding: 8px 16px; border-radius: 30px; margin-bottom: 24px; box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); font-size: 14px; font-weight: 600; }
        `}</style>
      </section>
    );
  }

  return (
    <section className="modern-split-hero">
      <div className="container hero-container-flex">
        
        {/* Left: Content */}
        <div className="hero-text-side">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="trust-pill">
              <ShieldCheck size={14} /> Verified 80G Organization
            </div>
            <h1 className="modern-hero-h1">{title}</h1>
            <p className="modern-hero-p">{subtitle}</p>
            
            {showCTA && (
              <div className="hero-actions-flex">
                <Link to="/donate" className="btn btn-primary">
                  Donate Now <Heart size={18} fill="white" />
                </Link>
                <Link to="/volunteer" className="btn btn-outline">
                  Join Us <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right: Visual (Absolute positioned to fill right half) */}
        <div className="hero-visual-side">
          <motion.div 
            className="hero-image-frame"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={bgImage} alt={title} className="hero-image-actual" />
            <div className="hero-image-overlay"></div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .modern-split-hero {
          position: relative;
          background: #ffffff;
          min-height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0;
        }

        .hero-container-flex {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text-side {
          z-index: 10;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #F0FDF4;
          color: #16A34A;
          padding: 6px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modern-hero-h1 {
          font-size: 52px;
          color: var(--color-text-heading);
          line-height: 1.1;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .modern-hero-p {
          font-size: 18px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-actions-flex {
          display: flex;
          gap: 16px;
        }

        .hero-visual-side {
          position: relative;
          height: 100%;
          min-height: 400px;
        }

        .hero-image-frame {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .hero-image-actual {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(22, 163, 74, 0.2), transparent);
        }

        @media (max-width: 1024px) {
          .hero-container-flex {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text-side {
            order: 2;
          }
          .hero-visual-side {
            order: 1;
            min-height: 300px;
          }
          .hero-image-frame {
            height: 300px;
          }
          .modern-hero-p {
            margin: 0 auto 32px;
          }
          .hero-actions-flex {
            justify-content: center;
          }
          .modern-hero-h1 { font-size: 40px; }
        }

        @media (max-width: 480px) {
          .modern-hero-h1 { font-size: 32px; }
          .hero-actions-flex { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default PageHero;
