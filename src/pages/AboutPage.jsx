import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Target, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  const values = [
    { title: 'Transparency', desc: 'Every rupee donated is tracked and reported through audited annual statements.', icon: <Shield size={24} /> },
    { title: 'Inclusivity', desc: 'We serve all communities regardless of religion, caste, or background.', icon: <Users size={24} /> },
    { title: 'Sustainability', desc: 'Our projects are designed to be community-led and self-sustaining over time.', icon: <Target size={24} /> },
    { title: 'Excellence', desc: 'We maintain high standards of delivery and professional accountability.', icon: <Award size={24} /> }
  ];

  const team = [
    { name: 'Dr. Ramesh Kumar', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Priya Sharma', role: 'Programs Head', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Anil Reddy', role: 'Community Outreach', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sita Devi', role: 'Lead Educator', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="header-title">Our Story</h1>
          <p className="header-subtitle">Building a resilient Telangana since 2010.</p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="section">
        <div className="container grid-2 align-center">
          <AnimatedSection>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Meeting" 
              className="rounded-image"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="history-content">
              <span className="sub-title">Who We Are</span>
              <h2 className="section-title">A Legacy of Service</h2>
              <p className="mb-2">
                Hope Rise started as a small community initiative in Hyderabad with a group of volunteers providing weekend classes to street children. Today, we are one of the most trusted NGOs in South India.
              </p>
              <p>
                Our mission is to create a state where poverty is not a barrier to human potential. We focus on systemic solutions that address the root causes of inequality.
              </p>
              <div className="vision-mission-grid">
                <div className="vm-item">
                  <h3>Vision</h3>
                  <p>A prosperous Telangana where every individual thrives with dignity and opportunity.</p>
                </div>
                <div className="vm-item">
                  <h3>Mission</h3>
                  <p>To provide high-quality education, healthcare, and livelihood support to marginalized groups.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="sub-title">Our Principles</span>
            <h2 className="section-title">The Values That Drive Us</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="value-card glass-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="sub-title">Leadership</span>
            <h2 className="section-title">The People Behind the Impact</h2>
          </div>
          <div className="grid-4">
            {team.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="team-card">
                <div className="team-img-wrapper">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="team-info">
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="section legal-section" style={{ borderTop: '1px solid var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="legal-box glass-card">
            <h2 className="text-center mb-2">Legal Details & Compliance</h2>
            <div className="grid-2">
              <div className="legal-info">
                <div className="legal-item">
                  <CheckCircle size={20} color="var(--color-success)" />
                  <strong>Registration:</strong> Societies Registration Act (2010)
                </div>
                <div className="legal-item">
                  <CheckCircle size={20} color="var(--color-success)" />
                  <strong>FCRA Status:</strong> Fully Compliant (No. 010230456)
                </div>
                <div className="legal-item">
                  <CheckCircle size={20} color="var(--color-success)" />
                  <strong>Tax Benefits:</strong> 12A & 80G Certified
                </div>
              </div>
              <div className="legal-info">
                <p>We are committed to the highest standards of accountability. All our financial statements are audited by independent chartered accountants and published annually.</p>
                <a href="/transparency" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>View Audited Reports</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 180px 0 100px;
          background: var(--color-primary-soft);
          text-align: center;
        }

        .header-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-size: 1.3rem;
          color: var(--color-text-muted);
        }

        .rounded-image {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .vm-item h3 {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .vm-item p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .value-card {
          padding: 2.5rem 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .value-card:hover {
          transform: translateY(-10px);
        }

        .value-icon {
          width: 60px;
          height: 60px;
          background: var(--color-primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .team-card {
          text-align: center;
        }

        .team-img-wrapper {
          height: 300px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .team-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .team-card:hover .team-img-wrapper img {
          transform: scale(1.05);
        }

        .team-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .team-info p {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .legal-box {
          padding: 4rem;
        }

        .legal-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .mb-2 { margin-bottom: 2rem; }

        @media (max-width: 1024px) {
          .grid-4 { grid-template-columns: 1fr 1fr; }
          .vision-mission-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .grid-4 { grid-template-columns: 1fr; }
          .legal-box { padding: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default AboutPage;
