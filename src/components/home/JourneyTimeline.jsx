import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flag, Users, Globe, HeartPulse, Award } from 'lucide-react';

const milestones = [
  {
    year: '2010',
    title: 'The Spark of Hope',
    description: 'Hope Rise Foundation was officially registered, starting with weekend classes for 20 street children in Hyderabad.',
    icon: <Flag size={24} />,
    color: '#16A34A',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400'
  },
  {
    year: '2015',
    title: 'Healthcare for All',
    description: 'Launched our first mobile medical van, providing basic healthcare to over 5,000 residents in rural Telangana.',
    icon: <HeartPulse size={24} />,
    color: '#2563EB',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400'
  },
  {
    year: '2020',
    title: 'Crisis Response',
    description: 'Distributed 50,000+ ration kits and set up 3 temporary isolation centers during the global pandemic.',
    icon: <Users size={24} />,
    color: '#F97316',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded programs to 5 countries, impacting 500,000+ lives through education and sustainable energy.',
    icon: <Globe size={24} />,
    color: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=400'
  }
];

const JourneyTimeline = () => {
  return (
    <section className="modern-journey">
      <div className="container">
        <div className="text-center mb-16">
          <span className="modern-sub">Our Legacy</span>
          <h2 className="modern-title">A Decade of <span className="text-highlight">Impact</span></h2>
        </div>

        <div className="story-vertical">
          <div className="story-line">
            <div className="story-progress"></div>
          </div>

          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              className="story-block"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Year Background */}
              <div className="year-bg">{item.year}</div>

              <div className={`story-flex ${index % 2 === 0 ? 'even' : 'odd'}`}>
                {/* Visual Side */}
                <div className="story-visual">
                  <div className="visual-frame" style={{ '--accent': item.color }}>
                    <img src={item.image} alt={item.title} />
                    <div className="visual-icon" style={{ backgroundColor: item.color }}>
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="story-content">
                  <div className="content-inner">
                    <div className="story-year-tag" style={{ color: item.color }}>{item.year}</div>
                    <h3 className="story-title">{item.title}</h3>
                    <p className="story-desc">{item.description}</p>
                    <div className="story-footer">
                      <div className="footer-line" style={{ backgroundColor: item.color }}></div>
                      <span>Milestone Achieved</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .modern-journey {
          padding: 20px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .story-vertical {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .story-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--color-border);
          transform: translateX(-50%);
          z-index: 0;
        }

        .story-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
          transform-origin: top;
          /* Ideally linked to scroll, but static for now */
          opacity: 0.3;
        }

        .story-block {
          position: relative;
          margin-bottom: 30px;
          z-index: 1;
        }

        .year-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 15vw;
          font-weight: 900;
          color: rgba(0,0,0,0.03);
          z-index: -1;
          pointer-events: none;
          line-height: 1;
        }

        .story-flex {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: center;
        }

        .story-flex.odd {
          direction: rtl;
        }

        .story-flex.odd .content-inner {
          direction: ltr;
          text-align: left;
        }

        /* Visual Side */
        .story-visual {
          display: flex;
          justify-content: center;
        }

        .visual-frame {
          position: relative;
          width: 100%;
          max-width: 220px;
          aspect-ratio: 1.2; /* Slightly flatter aspect ratio */
          border-radius: 20px;
          padding: 8px;
          background: white;
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }

        .visual-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .visual-icon {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 64px;
          height: 64px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          border: 4px solid white;
        }

        /* Content Side */
        .story-content {
          display: flex;
          flex-direction: column;
        }

        .story-year-tag {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 12px;
          font-family: var(--font-heading);
        }

        .story-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin-bottom: 12px;
        }

        .story-desc {
          font-size: 15px;
          line-height: 1.5;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }

        .story-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 700;
          font-size: 14px;
          color: var(--color-text-heading);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-line {
          width: 40px;
          height: 3px;
          border-radius: 2px;
        }

        .modern-sub {
          display: block;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-primary);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .modern-title {
          font-size: 36px;
          font-weight: 800;
          color: var(--color-text-heading);
        }

        .text-highlight {
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .story-flex { gap: 50px; }
          .story-title { font-size: 24px; }
          .story-desc { font-size: 16px; }
        }

        @media (max-width: 768px) {
          .modern-journey { padding: 40px 0; }
          .modern-title { font-size: 28px; }
          .story-block { padding-left: 50px; }
          .timeline-track { left: 30px; }
          .story-h3 { font-size: 18px; }
          .story-p { font-size: 14px; }
        }
      `}</style>
    </section>
  );
};

export default JourneyTimeline;
