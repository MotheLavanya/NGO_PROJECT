import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, Droplets, Leaf, GraduationCap, HeartPulse } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';

const ProgramsPage = () => {
  const allPrograms = [
    {
      id: 'edu',
      title: 'Vidyodaya: Digital Education',
      category: 'Education',
      desc: 'Our flagship program providing rural students with high-quality digital learning resources and computer literacy training.',
      impact: '8,000+ Students',
      icon: <BookOpen size={32} />,
      color: '#0D9488',
      img: eduImg
    },
    {
      id: 'health',
      title: 'Arogya: Mobile Healthcare',
      category: 'Health',
      desc: 'Brings diagnostic tools, specialist doctors, and essential medicines directly to remote tribal hamlets in Adilabad and Khammam.',
      impact: '120 Villages',
      icon: <HeartPulse size={32} />,
      color: '#F59E0B',
      img: healthImg
    },
    {
      id: 'water',
      title: 'Jala: Safe Water Initiative',
      category: 'Sustainability',
      desc: 'Installing RO filtration units and solar pumps in fluoride-affected regions of Nalgonda to provide safe drinking water.',
      impact: '50,000+ People',
      icon: <Droplets size={32} />,
      color: '#6366F1',
      img: waterImg
    },
    {
      id: 'green',
      title: 'Haritha: Reforestation',
      category: 'Environment',
      desc: 'A community-led tree plantation drive focusing on native species to restore local ecosystems and provide fruit-bearing trees.',
      impact: '100k+ Trees',
      icon: <Leaf size={32} />,
      color: '#10B981',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'skill',
      title: 'Kaushal: Skill Development',
      category: 'Livelihood',
      desc: 'Vocational training in tailoring, organic farming, and digital services for rural youth and women to foster financial independence.',
      impact: '1,200 Women',
      icon: <GraduationCap size={32} />,
      color: '#EC4899',
      img: 'https://images.unsplash.com/photo-1513258496099-48168024adb0?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="programs-page"
    >
      <section className="page-header dark" style={{ background: '#0F172A', color: 'white' }}>
        <div className="container">
          <h1 className="header-title" style={{ color: 'white' }}>Our Programs</h1>
          <p className="header-subtitle" style={{ color: '#94A3B8' }}>Systemic solutions for community empowerment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-list">
            {allPrograms.map((p, i) => (
              <AnimatedSection key={p.id} className="program-row" delay={i * 0.1}>
                <div className={`program-flex ${i % 2 !== 0 ? 'reverse' : ''}`}>
                  <div className="program-media">
                    <img src={p.img} alt={p.title} className="program-main-img" />
                    <div className="impact-tag" style={{ background: p.color }}>{p.impact}</div>
                  </div>
                  <div className="program-text">
                    <span className="category-label" style={{ color: p.color }}>{p.category}</span>
                    <h2>{p.title}</h2>
                    <p className="program-desc">{p.desc}</p>
                    <div className="program-features">
                      <div className="p-feature">
                        <strong>Model:</strong> Community-Led
                      </div>
                      <div className="p-feature">
                        <strong>Focus:</strong> Sustainable Impact
                      </div>
                    </div>
                    <div className="program-actions">
                      <a href="/donate" className="btn btn-primary">Support This Program</a>
                      <a href="/volunteer" className="btn btn-outline">Join as Volunteer</a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section transparency-cta" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container text-center">
          <h2>Our Impact is Measurable.</h2>
          <p style={{ maxWidth: '700px', margin: '1rem auto 2.5rem' }}>We use real-time monitoring and external audits to ensure every program delivers on its promise. Our annual reports provide a detailed breakdown of outcomes and finances.</p>
          <a href="/transparency" className="btn btn-outline">View Annual Reports</a>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 180px 0 100px;
          text-align: center;
        }

        .header-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-size: 1.3rem;
        }

        .program-row {
          margin-bottom: 8rem;
        }

        .program-row:last-child {
          margin-bottom: 0;
        }

        .program-flex {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .program-flex.reverse {
          direction: rtl;
        }

        .program-flex.reverse .program-text {
          direction: ltr;
        }

        .program-media {
          position: relative;
        }

        .program-main-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }

        .impact-tag {
          position: absolute;
          bottom: 30px;
          right: -20px;
          padding: 1rem 2rem;
          border-radius: var(--radius-lg);
          color: white;
          font-weight: 800;
          font-size: 1.2rem;
          box-shadow: var(--shadow-lg);
        }

        .program-text h2 {
          font-size: 2.5rem;
          margin: 1rem 0 1.5rem;
        }

        .category-label {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
        }

        .program-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .program-features {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .p-feature {
          background: white;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          font-size: 0.9rem;
        }

        .program-actions {
          display: flex;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .program-flex { grid-template-columns: 1fr; gap: 3rem; }
          .program-flex.reverse { direction: ltr; }
          .program-main-img { height: 400px; }
          .impact-tag { right: 20px; bottom: 20px; }
          .program-row { margin-bottom: 5rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default ProgramsPage;
