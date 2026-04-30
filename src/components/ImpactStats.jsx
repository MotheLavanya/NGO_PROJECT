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
          gap: 2rem;
          margin-top: -60px; /* Overlap with hero */
          position: relative;
          z-index: 10;
        }

        .stat-card {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition);
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-icon-wrapper {
          width: 60px;
          height: 60px;
          background: var(--color-primary-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }

        .stat-value {
          font-size: 2.2rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--color-text-muted);
          font-weight: 500;
          font-size: 1rem;
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
