import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

// Reuse the highly attractive new components
import ZigZagAbout from '../components/home/ZigZagAbout';
import JourneyTimeline from '../components/home/JourneyTimeline';
import CTABanner from '../components/home/CTABanner';

const AboutPage = () => {
  const values = [
    { title: 'Transparency', desc: 'Every rupee donated is tracked and reported through audited annual statements.', icon: <Shield size={28} />, color: 'var(--color-primary)' },
    { title: 'Inclusivity', desc: 'We serve all communities regardless of religion, caste, or background.', icon: <Users size={28} />, color: 'var(--color-secondary)' },
    { title: 'Sustainability', desc: 'Our projects are designed to be community-led and self-sustaining over time.', icon: <Target size={28} />, color: 'var(--color-accent)' },
    { title: 'Excellence', desc: 'We maintain high standards of delivery and professional accountability.', icon: <Award size={28} />, color: 'var(--color-primary)' }
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
      {/* Premium Hero Section */}
      <PageHero 
        title="A Journey of Compassion & Action."
        subtitle="Since 2010, we have been dedicated to bridging the gap between privilege and poverty, empowering communities to build a resilient and prosperous future."
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600"
        showCTA={true}
      />

      {/* Reuse ZigZag for Mission & Vision */}
      <div style={{ marginTop: '80px' }}>
        <ZigZagAbout />
      </div>

      {/* Values Section - Redesigned */}
      <section className="section bg-bg-subtle">
        <div className="container">
          <div className="text-center mb-48">
            <span className="sub-title">Our Principles</span>
            <h2 className="section-title">The Values That Drive Us</h2>
          </div>
          <div className="grid-4">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="value-card-new card">
                  <div className="value-icon-wrapper" style={{ backgroundColor: `${v.color}15`, color: v.color }}>
                    {v.icon}
                  </div>
                  <h3 className="mb-8">{v.title}</h3>
                  <p className="text-muted text-small mb-0">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse JourneyTimeline for History */}
      <JourneyTimeline />

      {/* Team Section - Redesigned */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-48">
            <span className="sub-title">Leadership</span>
            <h2 className="section-title">The People Behind the Impact</h2>
          </div>
          <div className="grid-4">
            {team.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="team-card-new">
                  <div className="team-img-container">
                    <img src={t.img} alt={t.name} />
                    <div className="team-overlay"></div>
                  </div>
                  <div className="team-info-new">
                    <h3 className="mb-0">{t.name}</h3>
                    <p className="text-primary" style={{ fontWeight: 600, fontSize: '14px' }}>{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Compliance - Cleaned up */}
      <section className="section bg-bg-subtle" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="card" style={{ padding: '48px', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="grid-2 align-center">
              <div>
                <h2 className="section-title mb-16">Legal & Compliance</h2>
                <p className="text-muted mb-24">We are committed to the highest standards of accountability. All our financial statements are audited by independent chartered accountants and published annually.</p>
                <a href="/transparency" className="btn btn-outline">View Audited Reports</a>
              </div>
              <div className="legal-list">
                <div className="legal-item-new">
                  <div className="legal-icon"><CheckCircle size={20} color="var(--color-white)" /></div>
                  <div>
                    <strong>Registration</strong>
                    <p className="text-small text-muted mb-0">Societies Registration Act (2010)</p>
                  </div>
                </div>
                <div className="legal-item-new">
                  <div className="legal-icon"><CheckCircle size={20} color="var(--color-white)" /></div>
                  <div>
                    <strong>FCRA Status</strong>
                    <p className="text-small text-muted mb-0">Fully Compliant (No. 010230456)</p>
                  </div>
                </div>
                <div className="legal-item-new">
                  <div className="legal-icon"><CheckCircle size={20} color="var(--color-white)" /></div>
                  <div>
                    <strong>Tax Benefits</strong>
                    <p className="text-small text-muted mb-0">12A & 80G Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA at the bottom */}
      <CTABanner />

      <style>{`
        /* Values */
        .value-card-new {
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .value-icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        /* Team */
        .team-card-new {
          text-align: center;
          group: hover;
        }

        .team-img-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 3/4;
          margin-bottom: 16px;
        }

        .team-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card-new:hover .team-img-container img {
          transform: scale(1.05);
        }

        .team-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(17,24,39,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card-new:hover .team-overlay {
          opacity: 1;
        }

        .team-info-new h3 {
          font-size: 20px;
        }

        /* Legal */
        .legal-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .legal-item-new {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--color-bg-subtle);
          border-radius: var(--radius-md);
        }

        .legal-icon {
          background: var(--color-success);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .about-hero-title { font-size: 40px; }
          .about-hero-text { font-size: 18px; }
        }
      `}</style>
    </motion.div>
  );
};

export default AboutPage;
