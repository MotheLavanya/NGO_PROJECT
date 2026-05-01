import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Heart, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';
import heroImg from '../assets/images/hero.png';

const VolunteerPage = () => {
  const opportunities = [
    {
      title: 'Teaching Volunteer',
      commitment: '4 hours/week',
      desc: 'Teach English, Math, or Digital Literacy to students in our evening learning centers.',
      icon: <BookOpen size={24} />,
      color: 'var(--color-primary)'
    },
    {
      title: 'Community Outreach',
      commitment: 'Flexible',
      desc: 'Help us organize health camps and awareness drives in rural Telangana villages.',
      icon: <Users size={24} />,
      color: 'var(--color-secondary)'
    },
    {
      title: 'Content & Social Media',
      commitment: '2 hours/week',
      desc: 'Create impactful stories and manage our digital presence to attract more supporters.',
      icon: <MessageSquare size={24} />,
      color: 'var(--color-accent)'
    },
    {
      title: 'Event Management',
      commitment: 'Project-based',
      desc: 'Coordinate our annual fundraising events and volunteer meetups in Hyderabad.',
      icon: <Heart size={24} />,
      color: 'var(--color-error)'
    }
  ];

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="volunteer-page"
    >
      <PageHero 
        title="Join the Movement"
        subtitle="Your time, passion, and skills can change a life. Become a Hope Rise volunteer today and be the difference."
        bgImage="https://images.unsplash.com/photo-1593113512648-5c7ce1a5470c?auto=format&fit=crop&q=80&w=1600"
        showCTA={false}
      />

      <section className="section">
        <div className="container grid-2 align-center">
          <AnimatedSection>
            <div className="volunteer-hero-img">
              <img 
                src={heroImg} 
                alt="Volunteers working together" 
                className="rounded-image"
              />
              <div className="stat-overlay glass-card">
                <strong>2,500+</strong>
                <span>Active Volunteers</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="volunteer-content">
              <span className="sub-title">Why Volunteer?</span>
              <h2 className="section-title">Be the Change You Wish to See.</h2>
              <p className="mb-2">Volunteering with Hope Rise is more than just giving back; it's an opportunity to gain new perspectives, build meaningful connections, and witness the direct impact of your efforts on the ground.</p>
              <ul className="benefit-list">
                <li><CheckCircle size={18} color="var(--color-success)" /> Skill development and mentorship</li>
                <li><CheckCircle size={18} color="var(--color-success)" /> Official certificate of appreciation</li>
                <li><CheckCircle size={18} color="var(--color-success)" /> Exposure to grassroots development</li>
                <li><CheckCircle size={18} color="var(--color-success)" /> Network with like-minded changemakers</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center mb-4">
            <span className="sub-title">Opportunities</span>
            <h2 className="section-title">Current Openings</h2>
          </div>
          <div className="grid-2">
            {opportunities.map((opt, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="opportunity-card glass-card">
                <div className="opt-icon" style={{ color: opt.color }}>{opt.icon}</div>
                <div className="opt-info">
                  <h3>{opt.title}</h3>
                  <span className="commitment">{opt.commitment}</span>
                  <p>{opt.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section form-section">
        <div className="container">
          <div className="application-box glass-card">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <CheckCircle size={64} color="var(--color-success)" style={{ marginBottom: '1.5rem' }} />
                <h3>Application Received!</h3>
                <p style={{ marginTop: '1rem' }}>Thank you for your interest in volunteering. Our team will review your application and get back to you within 2-3 business days.</p>
                <button className="btn btn-outline" style={{ marginTop: '2rem' }} onClick={() => setIsSubmitted(false)}>Submit Another</button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h2 className="section-title">Application Form</h2>
                  <p>Ready to start? Fill out the form below and we'll get in touch with you.</p>
                </div>
                <form className="volunteer-form" onSubmit={handleSubmit}>
                  <div className="grid-2">
                    <div className="input-group">
                      <label className="input-label">Full Name</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Email Address</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="input-group">
                      <label className="input-label">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Area of Interest</label>
                      <select required>
                        <option value="">Select Area</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Event Management">Event Management</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="input-label">Why do you want to volunteer? (Optional)</label>
                    <textarea rows="4" placeholder="Tell us a bit about your motivation..."></textarea>
                  </div>
                  <button className="btn btn-primary w-100" disabled={isLoading}>
                    {isLoading ? 'Submitting Application...' : 'Submit Application'} <ArrowRight size={18} />
                  </button>
                </form>
              </>
            )}
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

        .header-subtitle {
          font-size: 1.3rem;
          color: var(--color-text-muted);
        }

        .volunteer-hero-img {
          position: relative;
        }

        .rounded-image {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }

        .stat-overlay {
          position: absolute;
          bottom: 30px;
          right: -20px;
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .stat-overlay strong {
          display: block;
          font-size: 2rem;
          color: var(--color-primary);
        }

        .benefit-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .opportunity-card {
          padding: 2.5rem;
          display: flex;
          gap: 2rem;
          transition: var(--transition);
        }

        .opportunity-card:hover {
          transform: translateY(-5px);
        }

        .opt-icon {
          width: 60px;
          height: 60px;
          background: var(--color-bg-subtle);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .commitment {
          display: inline-block;
          background: var(--color-primary-soft);
          color: var(--color-primary);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .application-box {
          padding: 4rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .volunteer-form {
          margin-top: 3rem;
        }

        .bg-subtle { background: var(--color-bg-subtle); }
        .mb-4 { margin-bottom: 4rem; }
        .w-100 { width: 100%; }

        @media (max-width: 1024px) {
          .application-box { padding: 2rem; }
        }

        @media (max-width: 768px) {
          .stat-overlay { right: 20px; bottom: 20px; }
          .opportunity-card { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>
    </motion.div>
  );
};

export default VolunteerPage;
