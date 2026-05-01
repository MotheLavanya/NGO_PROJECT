import React from 'react';

const partners = [
  { name: 'TechCorp', color: '#2563EB' },
  { name: 'GlobalAid', color: '#16A34A' },
  { name: 'EduFund', color: '#F97316' },
  { name: 'HealthCare Plus', color: '#EF4444' },
  { name: 'GreenEarth', color: '#0D9488' },
  { name: 'VisionaryBank', color: '#6366F1' },
];

const PartnersStrip = () => {
  // Duplicate array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="container">
        <h4 className="text-center text-muted mb-32" style={{ fontWeight: 500 }}>
          TRUSTED BY LEADING ORGANIZATIONS
        </h4>
        
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <span style={{ color: partner.color, fontWeight: 700, fontSize: '24px', fontFamily: 'var(--font-heading)' }}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .partners-section {
          padding: 64px 0;
          background-color: var(--color-white);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
        }

        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Fade edges for smooth entry/exit */
        .ticker-wrapper::before,
        .ticker-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
        }

        .ticker-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--color-white), transparent);
        }

        .ticker-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--color-white), transparent);
        }

        .ticker-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: ticker 20s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .partner-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          opacity: 0.7;
          filter: grayscale(100%);
          transition: var(--transition);
          cursor: default;
        }

        .partner-logo:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 32px)); /* -50% of track minus half gap */ }
        }

        @media (max-width: 768px) {
          .ticker-track { gap: 32px; }
          .partner-logo span { font-size: 18px !important; }
        }
      `}</style>
    </section>
  );
};

export default PartnersStrip;
