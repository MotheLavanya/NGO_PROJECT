import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const numValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(spring, (latest) => Math.floor(latest));

  React.useEffect(() => {
    if (isInView) {
      spring.set(numValue);
    }
  }, [isInView, numValue, spring]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const ImpactStats = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <div className="stat-icon-wrapper">{stat.icon}</div>
          <div className="stat-info">
            <h3 className="stat-value"><Counter value={stat.value} /></h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        </div>
      ))}

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
          z-index: 10;
        }

        .stat-card {
          background: #ffffff;
          padding: 2.2rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          background: #F0FDF4; /* Very light green */
          color: #16A34A;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 1.2rem;
        }

        .stat-value {
          font-size: 2.2rem;
          color: #0F172A; /* Deep Navy/Black for high contrast */
          font-weight: 800;
          margin-bottom: 4px;
          line-height: 1.1;
        }

        .stat-label {
          color: #475569; /* Slate for modern look */
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.2px;
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); margin-top: 0; }
        }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ImpactStats;
