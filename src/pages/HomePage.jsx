import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, GraduationCap, Globe, BookOpen, Activity, Droplets, MapPin } from 'lucide-react';
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

// Assets
import heroImg from '../assets/images/hero.png'; // Will use as placeholder if needed
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
      title: 'Education for All',
      desc: 'Bridging the educational gap by providing resources and modern learning tools to rural schools.',
      icon: <BookOpen size={32} />,
      color: 'var(--color-primary)',
      img: eduImg
    },
    {
      title: 'Healthcare Access',
      desc: 'Mobile medical clinics bringing vital healthcare services to remote and underserved areas.',
      icon: <Activity size={32} />,
      color: 'var(--color-secondary)',
      img: healthImg
    },
    {
      title: 'Environmental Sustainability',
      desc: 'Planting trees and installing clean water systems to protect our planet for future generations.',
      icon: <Droplets size={32} />,
      color: 'var(--color-accent)',
      img: waterImg
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section (Video / Image + CTA) */}
      <section className="hero-section-new">
        <div className="hero-overlay"></div>
        {/* Placeholder for video/image background */}
        <div className="hero-bg-image" style={{ backgroundImage: `url(${heroImg})` }}></div>
        
        <div className="container hero-content-new">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title-new">Together We Can Change Lives</h1>
            <p className="hero-text-new">
              Join Hope Rise Foundation in our mission to empower communities, protect the environment, and provide essential healthcare and education to those who need it most.
            </p>
            <div className="hero-btns-new">
              <a href="/donate" className="btn btn-primary btn-large">
                Donate Now <Heart size={18} fill="white" />
              </a>
              <a href="/volunteer" className="btn btn-outline btn-outline-white btn-large">
                Join Us <Users size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stakeholder Section (Smart Routing UI) */}
      <StakeholderSection />

      {/* 3. About Section (Zig-Zag Style) */}
      <ZigZagAbout />

      {/* 4. Impact Counter (Animated) */}
      {/* 4. Impact Counter (Animated) */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="sub-title" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600' }}>Community Impact</span>
            <h2 className="section-title" style={{ color: 'white' }}>Numbers That Matter</h2>
          </div>
          <ImpactStats stats={stats} />
        </div>
      </section>

      {/* 5. Programs Section (Card Grid) */}
      <section className="section programs-section bg-bg-subtle">
        <div className="container">
          <div className="text-center mb-48">
            <span className="sub-title">Our Focus Areas</span>
            <h2 className="section-title">Programs Making a Difference</h2>
          </div>

          <div className="grid-3">
            {programs.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="program-card card p-0">
                  <div className="program-img-wrapper">
                    <img src={p.img} alt={p.title} className="program-img-new" />
                  </div>
                  <div className="program-body-new p-24">
                    <h3 className="mb-8">{p.title}</h3>
                    <p className="text-muted mb-16 text-small">{p.desc}</p>
                    <a href="/programs" className="link-btn-new" style={{ color: p.color }}>
                      Read More <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Journey Timeline (Mixed Style) */}
      <JourneyTimeline />

      {/* 7. Storytelling Section (Parallax Scroll) */}
      <ParallaxStory />

      {/* 8. Events Section (Timeline + Calendar Cards) */}
      <EventsSection />

      {/* 9. How We Work (Step Process Design) */}
      <StepProcess />

      {/* 10. Testimonials (Slider) */}
      <TestimonialsSlider />

      {/* 11. Partners / Sponsors */}
      <PartnersStrip />

      {/* 12. CTA Section (Strong Conversion) */}
      <CTABanner />

      <style>{`
        /* Hero Styles */
        .hero-section-new {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 0;
          /* Darken the image heavily so it looks like a premium background */
          filter: brightness(0.6);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(17, 24, 39, 0.4), rgba(17, 24, 39, 0.8));
          z-index: 1;
        }

        .hero-content-new {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-title-new {
          font-size: 64px;
          color: white;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-text-new {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-btns-new {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 18px;
        }

        .btn-outline-white {
          border-color: white;
          color: white;
        }

        .btn-outline-white:hover {
          background-color: white;
          color: var(--color-text-heading);
        }

        /* Program Card overrides for this page */
        .p-0 { padding: 0 !important; overflow: hidden; }
        .p-24 { padding: 24px; }
        
        .program-img-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .program-img-new {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .program-card:hover .program-img-new {
          transform: scale(1.05);
        }

        .link-btn-new {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .link-btn-new:hover {
          gap: 12px;
        }

        /* Impact Stats — removed green-bg overrides */

        @media (max-width: 768px) {
          .hero-title-new { font-size: 36px; }
          .hero-text-new { font-size: 16px; margin-bottom: 32px; }
          .hero-btns-new { flex-direction: column; gap: 12px; width: 100%; max-width: 300px; margin: 0 auto; }
          .btn-large { width: 100%; padding: 12px 24px; font-size: 16px; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
