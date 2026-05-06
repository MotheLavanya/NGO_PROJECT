import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'TechCorp', color: '#2563EB' },
  { name: 'GlobalAid', color: '#16A34A' },
  { name: 'EduFund', color: '#F97316' },
  { name: 'HealthCare Plus', color: '#EF4444' },
  { name: 'GreenEarth', color: '#0D9488' },
  { name: 'VisionaryBank', color: '#6366F1' },
];

const PartnersStrip = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="modern-partners">
      <div className="container">
        <div className="partners-header">
          <div className="line"></div>
          <span className="partners-label">Powering Change With</span>
          <div className="line"></div>
        </div>
        
        <div className="ticker-container">
          <motion.div 
            className="ticker-track-v2"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-chip">
                <div className="chip-inner">
                  <span style={{ color: partner.color }}>{partner.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradients to fade edges */}
          <div className="ticker-fade-left"></div>
          <div className="ticker-fade-right"></div>
        </div>
      </div>

      <style jsx>{`
        .modern-partners {
          padding: 60px 0;
          background: #fff;
          overflow: hidden;
        }

        .partners-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .partners-label {
          font-size: 14px;
          font-weight: 800;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 3px;
          white-space: nowrap;
        }

        .line {
          height: 1px;
          flex: 1;
          background: var(--color-border);
          max-width: 100px;
        }

        .ticker-container {
          position: relative;
          width: 100%;
          padding: 20px 0;
        }

        .ticker-track-v2 {
          display: flex;
          gap: 30px;
          width: max-content;
        }

        .partner-chip {
          padding: 20px 40px;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .partner-chip:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
          border-color: var(--color-primary-light);
        }

        .chip-inner span {
          font-size: 24px;
          font-weight: 800;
          font-family: var(--font-heading);
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .partner-chip:hover .chip-inner span {
          opacity: 1;
        }

        .ticker-fade-left, .ticker-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .ticker-fade-left {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .ticker-fade-right {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        @media (max-width: 768px) {
          .partner-chip { padding: 15px 30px; }
          .chip-inner span { font-size: 18px; }
          .ticker-fade-left, .ticker-fade-right { width: 50px; }
        }
      `}</style>
    </section>
  );
};

export default PartnersStrip;
