import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, Users, Globe, Award } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Hope Rise Foundation was officially registered, starting with weekend classes for 20 street children in Hyderabad.',
    icon: <Flag size={20} />,
    color: 'var(--color-primary)'
  },
  {
    year: '2015',
    title: 'Healthcare Initiative',
    description: 'Launched our first mobile medical van, providing basic healthcare to over 5,000 residents in rural Telangana.',
    icon: <HeartPulseIcon />, // I will use a custom SVG here or fallback
    iconName: 'heart',
    color: 'var(--color-secondary)'
  },
  {
    year: '2020',
    title: 'COVID-19 Response',
    description: 'Distributed 50,000+ ration kits and set up 3 temporary isolation centers during the peak of the pandemic.',
    icon: <Users size={20} />,
    color: 'var(--color-accent)'
  },
  {
    year: '2023',
    title: 'National Expansion',
    description: 'Expanded our educational and environmental programs to 3 neighboring states, impacting 100,000+ lives globally.',
    icon: <Globe size={20} />,
    color: 'var(--color-primary)'
  }
];

// Simple fallback icon component since lucide HeartPulse might not be available
function HeartPulseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
    </svg>
  );
}


const JourneyTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="section section-bg">
      <div className="container">
        <div className="text-center mb-48">
          <span className="sub-title">Our History</span>
          <h2 className="section-title">The Journey of Hope</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div 
                key={index}
                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Center Node */}
                <div className="timeline-node" style={{ borderColor: item.color }}>
                  <div className="timeline-node-inner" style={{ backgroundColor: isHovered ? item.color : 'white', color: isHovered ? 'white' : item.color }}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="timeline-content card">
                  <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                  <h3 className="mb-8">{item.title}</h3>
                  <motion.div 
                    className="timeline-description text-muted"
                    initial={{ height: 'auto' }}
                    animate={{ height: isHovered ? 'auto' : '60px' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p>{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: var(--color-border);
          top: 0;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 20px 40px;
          margin-bottom: 20px;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
        }

        .timeline-node {
          position: absolute;
          top: 30px;
          width: 48px;
          height: 48px;
          background: var(--color-bg-subtle);
          border: 4px solid;
          border-radius: 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .timeline-item.left .timeline-node {
          right: -24px;
        }

        .timeline-item.right .timeline-node {
          left: -24px;
        }

        .timeline-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .timeline-content {
          position: relative;
          transition: var(--transition);
        }

        .timeline-item.left .timeline-content {
          transform-origin: right center;
        }
        
        .timeline-item.right .timeline-content {
          transform-origin: left center;
        }

        .timeline-year {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 24px;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .timeline-description {
          position: relative;
        }

        /* Fade out effect when collapsed */
        .timeline-item:not(:hover) .timeline-description::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 30px;
          }
          
          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding: 20px 0 20px 80px;
            text-align: left !important;
          }

          .timeline-node {
            left: 6px !important;
          }
          
          .timeline-item.left .timeline-content {
            transform-origin: left center;
          }
        }
      `}</style>
    </section>
  );
};

export default JourneyTimeline;
