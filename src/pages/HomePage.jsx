import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, Globe, Heart, ShieldCheck, Zap, BookOpen, Activity, Droplets } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ImpactStats from '../components/ImpactStats';
import FAQ from '../components/FAQ';

import heroImg from '../assets/images/hero.png';
import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';

const HomePage = () => {
  const stats = [
    { icon: <Users size={28} />, label: 'Lives Impacted', value: '15,000+' },
    { icon: <GraduationCap size={28} />, label: 'Children Educated', value: '8,000+' },
    { icon: <Globe size={28} />, label: 'Villages Served', value: '75+' },
    { icon: <Heart size={28} />, label: 'Active Volunteers', value: '2,500+' },
  ];

  const programs = [
    {
      title: 'Digital Education',
      desc: 'Bridging the digital divide by providing tablets and internet to rural schools in Telangana.',
      icon: <BookOpen size={32} />,
      color: 'var(--color-primary)',
      img: eduImg
    },
    {
      title: 'Rural Healthcare',
      desc: 'Mobile medical vans bringing doctors and life-saving medicines to remote tribal areas.',
      icon: <Activity size={32} />,
      color: 'var(--color-secondary)',
      img: healthImg
    },
    {
      title: 'Clean Water',
      desc: 'Installing solar-powered filtration systems to provide safe drinking water to fluoride-affected zones.',
      icon: <Droplets size={32} />,
      color: 'var(--color-accent)',
      img: waterImg
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span className="sub-title">Empowering Telangana's Potential</span>
            <h1 className="hero-title">
              Transforming <span className="highlight">Lives</span> Through <span className="highlight">Action</span>.
            </h1>
            <p className="hero-text">
              We are a mission-driven NGO dedicated to providing education, healthcare, and sustainable development to underprivileged communities in Telangana. Join us in building a brighter future.
            </p>
            <div className="hero-btns">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/donate" className="btn btn-primary">
                Donate Now <Heart size={18} fill="white" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/volunteer" className="btn btn-outline">
                Volunteer <ArrowRight size={18} />
              </motion.a>
            </div>
            <div className="hero-trust">
              <ShieldCheck size={20} color="var(--color-success)" />
              <span>Certified 80G/12A Non-Profit Organization</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <img 
              src={heroImg} 
              alt="Happy children in Telangana" 
              className="hero-img"
            />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="floating-badge glass-card"
            >
              <div className="badge-icon"><Zap size={20} fill="var(--color-secondary)" color="var(--color-secondary)" /></div>
              <div>
                <strong>98%</strong>
                <span>Efficiency</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <ImpactStats stats={stats} />
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section">
        <div className="container">
          <div className="text-center">
            <span className="sub-title">What We Do</span>
            <h2 className="section-title">Our Core Initiatives</h2>
            <p className="section-desc">Focused on systemic change and long-term community empowerment.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '4rem' }}>
            {programs.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="program-card">
                  <div className="program-img">
                    <img src={p.img} alt={p.title} />
                    <div className="program-icon-float" style={{ background: p.color }}>{p.icon}</div>
                  </div>
                  <div className="program-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <a href="/programs" className="link-btn">Learn More <ArrowRight size={16} /></a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container grid-2 align-center">
          <AnimatedSection>
            <div className="image-stack">
              <img src={eduImg} alt="Education" className="stack-img-1" />
              <img src={healthImg} alt="Community" className="stack-img-2 glass-card" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mission-content">
              <span className="sub-title">Our Mission</span>
              <h2 className="section-title">Rooted in Hyderabad, Focused on Telangana.</h2>
              <p className="mb-2">We believe that every citizen deserves access to basic human rights—education, health, and dignity. Our approach is community-led and data-driven.</p>
              <ul className="check-list">
                <li>Direct Impact in 15+ Districts</li>
                <li>Transparent Financial Reporting</li>
                <li>80% Staff from Local Communities</li>
              </ul>
              <a href="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>Our Full Story</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <span className="sub-title">Common Questions</span>
            <h2 className="section-title">Everything You Need to Know</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section - NEW PREMIUM STYLE */}
      <section className="section cta-section-new">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
            </div>
            <div className="cta-inner">
              <div className="cta-content-new">
                <h2 className="cta-title-new">Ready to Make a <span className="highlight-white">Difference</span>?</h2>
                <p className="cta-text-new">Your contribution can provide a month's education for a child or life-saving medicine for an elderly person.</p>
                <div className="cta-btns-new">
                  <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="/donate" className="btn btn-secondary-new">
                    Become a Donor <Heart size={18} fill="currentColor" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} href="/volunteer" className="btn btn-outline-white">
                    Join as Volunteer <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
              <div className="cta-visual-new">
                <div className="impact-circle">
                  <div className="impact-number">15k+</div>
                  <div className="impact-label">Lives Touched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding: 180px 0 100px;
          background: radial-gradient(circle at top right, var(--color-primary-soft) 0%, transparent 40%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-text {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-text-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          aspect-ratio: 1;
          object-fit: cover;
        }

        .floating-badge {
          position: absolute;
          bottom: 40px;
          left: -30px;
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .badge-icon {
          width: 44px;
          height: 44px;
          background: var(--color-secondary-soft);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .program-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          height: 100%;
        }

        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
        }

        .program-img {
          position: relative;
          height: 240px;
        }

        .program-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .program-icon-float {
          position: absolute;
          bottom: -25px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: 4px solid white;
          box-shadow: var(--shadow-md);
        }

        .program-body {
          padding: 2.5rem 2rem 2rem;
        }

        .program-body h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .program-body p {
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .image-stack {
          position: relative;
          padding: 40px;
        }

        .stack-img-1 {
          width: 80%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .stack-img-2 {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60%;
          border-radius: var(--radius-lg);
          padding: 10px;
        }

        /* NEW CTA STYLES */
        .cta-section-new {
          padding: 100px 0;
        }

        .cta-wrapper {
          background: linear-gradient(135deg, var(--color-primary) 0%, #065F46 100%);
          border-radius: var(--radius-xl);
          padding: 80px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(13, 148, 136, 0.35);
        }

        .cta-shapes .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
        }

        .shape-1 { width: 400px; height: 400px; top: -100px; right: -100px; }
        .shape-2 { width: 300px; height: 300px; bottom: -50px; left: -50px; }

        .cta-inner {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 2;
          align-items: center;
        }

        .cta-title-new {
          font-size: 3.5rem;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight-white {
          color: var(--color-secondary);
          position: relative;
        }

        .cta-text-new {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .cta-btns-new {
          display: flex;
          gap: 2rem;
        }

        .btn-secondary-new {
          background: var(--color-secondary);
          color: var(--color-text-main);
          padding: 16px 40px;
          font-size: 1.1rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
        }

        .btn-outline-white {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 16px 40px;
          font-size: 1.1rem;
          border-radius: var(--radius-full);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cta-visual-new {
          display: flex;
          justify-content: center;
        }

        .impact-circle {
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .impact-number {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .impact-label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-text { margin: 0 auto 2.5rem; }
          .hero-btns { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-title { font-size: 3rem; }
          .cta-inner { grid-template-columns: 1fr; text-align: center; }
          .cta-wrapper { padding: 40px; }
          .cta-btns-new { justify-content: center; flex-direction: column; }
          .cta-title-new { font-size: 2.5rem; }
          .impact-circle { margin-top: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
