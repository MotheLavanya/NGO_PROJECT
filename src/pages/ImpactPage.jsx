import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';

import impactHeroImg from '../assets/images/impact_hero.png';

const ImpactPage = () => {
  const stories = [
    {
      name: 'Meena\'s Digital Journey',
      location: 'Adilabad District',
      text: 'Meena, a 12-year-old from a remote tribal village, had never touched a computer. Through our Digital Education program, she is now the top student in her class and helps other children learn coding basics.',
      img: eduImg
    },
    {
      name: 'Ramu\'s Health Recovery',
      location: 'Khammam District',
      text: 'Our mobile medical van reached Ramu\'s village just in time to diagnose his severe anemia. With consistent treatment and nutritional support, he is now back in school and healthier than ever.',
      img: healthImg
    },
    {
      name: 'Clean Water for Nalgonda',
      location: 'Nalgonda District',
      text: 'After decades of drinking fluoride-affected water, the villagers now have a community-led RO plant. The incidence of water-borne diseases has dropped by 70% in just one year.',
      img: waterImg
    }
  ];

  const testimonials = [
    { name: 'Dr. Anita Rao', role: 'Partner Hospital', text: 'Hope Rise works with a level of dedication that is rare. Their community outreach is the best I have seen.' },
    { name: 'Kiran Kumar', role: 'Global Donor', text: 'I appreciate the detailed reports I receive about how my donation is being spent. Very transparent.' },
    { name: 'Laxmi Devi', role: 'Village Sarpanch', text: 'Our village has seen real change. The children are excited to go to the learning center every day.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="impact-page"
    >
      <PageHero 
        title="Impact Stories"
        subtitle="Real people, real change. Witness the tangible impact of your continued support and dedication."
        bgImage={impactHeroImg}
        showCTA={false}
      />

      <section className="section">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="story-card glass-card">
                <div className="story-img">
                  <img src={story.img} alt={story.name} />
                </div>
                <div className="story-content">
                  <Quote size={32} color="var(--color-primary)" fill="var(--color-primary-soft)" />
                  <h3>{story.name}</h3>
                  <span className="location">{story.location}</span>
                  <p>{story.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center mb-4">
            <span className="sub-title">Testimonials</span>
            <h2 className="section-title">What People Say</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="testimonial-item glass-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--color-warning)" stroke="none" />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-summary">
        <div className="container text-center">
          <Heart size={48} color="var(--color-primary)" fill="var(--color-primary-soft)" />
          <h2 className="mt-2">Every Story Begins with You.</h2>
          <p style={{ maxWidth: '700px', margin: '1rem auto 3rem' }}>The impact we create is a direct result of the generosity of our donors and the passion of our volunteers.</p>
          <div className="flex justify-center gap-2">
            <a href="/donate" className="btn btn-primary">Start Your Story</a>
            <a href="/volunteer" className="btn btn-outline">Become a Volunteer</a>
          </div>
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

        .stories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        .story-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          padding: 3rem;
          align-items: center;
        }

        .story-img {
          position: relative;
          height: 320px;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .story-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          display: block;
        }

        .story-content h3 {
          font-size: 2rem;
          margin-top: 1rem;
        }

        .location {
          display: block;
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .story-content p {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }

        .testimonial-item {
          padding: 2.5rem;
          text-align: center;
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: 5px;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          font-size: 1rem;
          font-style: italic;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .testimonial-footer strong {
          display: block;
          font-size: 1.1rem;
        }

        .testimonial-footer span {
          font-size: 0.9rem;
          color: var(--color-primary);
          font-weight: 600;
        }

        .mt-2 { margin-top: 2rem; }
        .mb-4 { margin-bottom: 4rem; }
        .bg-subtle { background: var(--color-bg-subtle); }
        .flex { display: flex; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 2rem; }

        @media (max-width: 1024px) {
          .story-card { grid-template-columns: 1fr; padding: 2rem; }
          .story-img img { height: 300px; }
        }
      `}</style>
    </motion.div>
  );
};

export default ImpactPage;
