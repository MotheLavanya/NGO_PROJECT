import React from 'react';
import { motion as fMotion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Globe, BookOpen, Activity, Droplets, MapPin, Sparkles, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ImpactStats from '../components/ImpactStats';

// Import New Components
import StakeholderSection from '../components/home/StakeholderSection';
import ZigZagAbout from '../components/home/ZigZagAbout';
import JourneyTimeline from '../components/home/JourneyTimeline';
import ParallaxStory from '../components/home/ParallaxStory';
import StepProcess from '../components/home/StepProcess';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import PartnersStrip from '../components/home/PartnersStrip';
import CTABanner from '../components/home/CTABanner';
import EventsSection from '../components/home/EventsSection';
import Hero from '../components/home/Hero';

// Assets
import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';

const HomePage = () => {
  const stats = [
    { icon: <Users size={28} />, label: 'Lives Changed', value: '10000+' },
    { icon: <Heart size={28} />, label: 'Volunteers', value: '500+' },
    { icon: <Globe size={28} />, label: 'Projects', value: '120+' },
    { icon: <MapPin size={28} />, label: 'Villages Reached', value: '200+' },
  ];

  const programs = [
    {
      id: 'edu',
      title: 'Digital Education',
      tag: 'Learning',
      desc: 'Bridging the educational gap by providing modern learning tools and smart classes to rural schools.',
      icon: <BookOpen size={24} />,
      color: '#16A34A',
      img: eduImg,
      stats: '45+ Schools'
    },
    {
      id: 'health',
      title: 'Healthcare Reach',
      tag: 'Wellness',
      desc: 'Mobile medical clinics and specialized health camps bringing vital services to remote tribal areas.',
      icon: <Activity size={24} />,
      color: '#2563EB',
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      stats: '12k Patients'
    },
    {
      id: 'eco',
      title: 'Sustainable Eco',
      tag: 'Environment',
      desc: 'Community-led reforestation and solar-powered water filtration systems for long-term health.',
      icon: <Droplets size={24} />,
      color: '#F97316',
      img: waterImg,
      stats: '85 Systems'
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Modern Hero Section */}
      <Hero />

      {/* Organic Divider */}
      <div className="section-divider divider-top">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 52.5C120 45 240 30 360 22.5C480 15 600 15 720 22.5C840 30 960 45 1080 52.5C1200 60 1320 75 1380 82.5L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V60Z" fill="white"/>
        </svg>
      </div>

      {/* 2. Stakeholder Section */}
      <StakeholderSection />

      {/* 3. About Section (Zig-Zag Style) */}
      <ZigZagAbout />

      {/* 4. Cinematic Impact Counter */}
      <section className="cinematic-stats">
        <div className="stats-bg-text">IMPACT</div>
        <div className="container relative z-10">
          <div className="text-center mb-40">
            <fMotion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="stats-sub"
            >
              Our Global Footprint
            </fMotion.span>
            <fMotion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="stats-title"
            >
              Numbers That <span className="text-white">Tell Our Story</span>
            </fMotion.h2>
          </div>
          
          <div className="stats-grid-v2">
            {stats.map((s, i) => (
              <fMotion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="stat-card-v2"
              >
                <div className="stat-icon-v2">{s.icon}</div>
                <div className="stat-value-v2">{s.value}</div>
                <div className="stat-label-v2">{s.label}</div>
              </fMotion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern "Action Area" Showcase */}
      <section className="action-area-v4">
        <div className="container">
          <div className="header-flex mb-48">
            <div className="left">
              <span className="modern-sub-v4">Action Areas</span>
              <h2 className="modern-title-v4">Programs <span className="text-primary">Changing Reality</span></h2>
            </div>
            <div className="right">
              <Link to="/programs" className="view-all-v4">
                View All Initiatives <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="programs-scroll-v4">
            {programs.map((p, i) => (
              <fMotion.div 
                key={p.id}
                className="program-panel-v4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="panel-visual">
                  <img src={p.img} alt={p.title} />
                  <div className="panel-tag-v4" style={{ backgroundColor: p.color }}>
                    {p.tag}
                  </div>
                </div>
                
                <div className="panel-content">
                  <div className="panel-icon-v4" style={{ color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="panel-title">{p.title}</h3>
                  <p className="panel-desc">{p.desc}</p>
                  
                  <div className="panel-footer-v4">
                    <div className="panel-stat">
                      <Target size={14} /> <span>{p.stats}</span>
                    </div>
                    <Link to="/programs" className="panel-link-v4">
                      Explore <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </fMotion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Journey Timeline */}
      <JourneyTimeline />

      {/* 7. Storytelling Section */}
      <ParallaxStory />

      {/* 8. Events Section */}
      <EventsSection />

      {/* 9. How We Work */}
      <StepProcess />

      {/* 10. Testimonials */}
      <TestimonialsSlider />

      {/* 11. Partners Strip */}
      <PartnersStrip />

      {/* 12. CTA Section */}
      <CTABanner />

      <style>{`
        .home-page {
          background-color: #fff;
        }

        .section-divider {
          width: 100%;
          line-height: 0;
          margin-top: -1px;
        }

        /* Cinematic Stats */
        .cinematic-stats {
          position: relative;
          padding: 60px 0;
          background: var(--color-primary-dark);
          overflow: hidden;
          color: white;
        }

        .stats-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 25vw;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          z-index: 0;
          pointer-events: none;
        }

        .stats-sub {
          display: block;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-primary-light);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .stats-title {
          font-size: 36px;
          font-weight: 800;
          color: rgba(255,255,255,0.8);
        }

        .stats-grid-v2 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card-v2 {
          text-align: center;
          padding: 32px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-card-v2:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-8px);
        }

        .stat-icon-v2 {
          color: var(--color-accent);
          margin-bottom: 16px;
          display: flex;
          justify-content: center;
        }

        .stat-value-v2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .stat-label-v2 {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase;
        }

        /* Action Area v4 */
        .action-area-v4 {
          padding: 60px 0;
          background: #fff;
        }

        .header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 24px;
        }

        .modern-sub-v4 {
          display: block;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-primary);
          font-size: 13px;
          margin-bottom: 8px;
        }

        .modern-title-v4 {
          font-size: 36px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin: 0;
        }

        .view-all-v4 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--color-text-main);
          text-decoration: none;
          font-size: 15px;
          transition: color 0.3s;
        }

        .view-all-v4:hover { color: var(--color-primary); }

        .programs-scroll-v4 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 40px;
        }

        .program-panel-v4 {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          transition: all 0.4s ease;
        }

        .program-panel-v4:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--color-primary-light);
        }

        .panel-visual {
          height: 180px;
          position: relative;
        }

        .panel-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .panel-tag-v4 {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 4px 12px;
          color: white;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .panel-content {
          padding: 24px;
        }

        .panel-icon-v4 {
          margin-bottom: 16px;
        }

        .panel-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin-bottom: 12px;
        }

        .panel-desc {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 24px;
          height: 63px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .panel-footer-v4 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
        }

        .panel-stat {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-main);
        }

        .panel-link-v4 {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .programs-scroll-v4 { grid-template-columns: 1fr; }
          .header-flex { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
