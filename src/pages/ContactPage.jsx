import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin } from '../components/BrandIcons';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      className="contact-page"
    >
      <PageHero 
        title="Get in Touch"
        subtitle="Have questions, want to partner with us, or need assistance? We are always here to listen and help."
        bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
        showCTA={false}
      />

      <section className="section">
        <div className="container grid-2">
          <AnimatedSection>
            <div className="contact-info-wrapper">
              <h2 className="section-title">Contact Information</h2>
              <p className="mb-4">Feel free to reach out to us through any of these channels. Our team is always ready to assist you.</p>
              
              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon"><Mail size={24} /></div>
                  <div className="method-text">
                    <h3>Email Us</h3>
                    <p>info@hoperise.org</p>
                    <p>partnerships@hoperise.org</p>
                  </div>
                </div>
                <div className="method-item">
                  <div className="method-icon"><Phone size={24} /></div>
                  <div className="method-text">
                    <h3>Call Us</h3>
                    <p>+91 40 1234 5678</p>
                    <p>Mon-Sat, 9am-6pm</p>
                  </div>
                </div>
                <div className="method-item">
                  <div className="method-icon"><MapPin size={24} /></div>
                  <div className="method-text">
                    <h3>Visit Office</h3>
                    <p>123 Hope Center, Jubilee Hills,</p>
                    <p>Hyderabad, Telangana 500033</p>
                  </div>
                </div>
              </div>

              <div className="social-links-contact">
                <a href="#" className="social-btn"><Facebook size={20} /></a>
                <a href="#" className="social-btn"><Twitter size={20} /></a>
                <a href="#" className="social-btn"><Instagram size={20} /></a>
                <a href="#" className="social-btn"><Linkedin size={20} /></a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="contact-form-card glass-card">
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center" style={{ padding: '3rem 0' }}>
                  <CheckCircle size={64} color="var(--color-success)" style={{ marginBottom: '1.5rem' }} />
                  <h3>Message Sent Successfully!</h3>
                  <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Thank you for reaching out. We have received your message and will get back to you shortly.</p>
                  <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setIsSubmitted(false)}>Send Another Message</button>
                </motion.div>
              ) : (
                <>
                  <h3 className="mb-2">Send us a Message</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                      <label className="input-label">Full Name</label>
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Email Address</label>
                      <input type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Subject</label>
                      <select required>
                        <option value="">Select Subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Donation">Donation Inquiry</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label className="input-label">Message</label>
                      <textarea rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button className="btn btn-primary w-100" disabled={isLoading}>
                      {isLoading ? 'Sending Message...' : 'Send Message'} <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-box glass-card">
            <MapPin size={48} color="var(--color-primary)" />
            <h3>Find Us in Hyderabad</h3>
            <p>We are located in the heart of Jubilee Hills. Click below to view on Google Maps.</p>
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Open in Maps</a>
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

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .method-item {
          display: flex;
          gap: 1.5rem;
        }

        .method-icon {
          width: 54px;
          height: 54px;
          background: var(--color-primary-soft);
          color: var(--color-primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method-text h3 {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }

        .method-text p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .social-links-contact {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          background: white;
          border: 1px solid var(--color-bg-subtle);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-main);
          transition: var(--transition);
        }

        .social-btn:hover {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          transform: translateY(-3px);
        }

        .contact-form-card {
          padding: 3rem;
        }

        .map-section {
          height: 500px;
          background: url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .map-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.4);
        }

        .map-box {
          position: relative;
          z-index: 1;
          max-width: 450px;
          padding: 3rem;
          text-align: center;
          margin: 0 auto;
        }

        .map-box h3 {
          margin: 1.5rem 0 0.8rem;
        }

        .map-box p {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .w-100 { width: 100%; }
        .mb-4 { margin-bottom: 4rem; }
        .mb-2 { margin-bottom: 2rem; }

        @media (max-width: 1024px) {
          .contact-form-card { padding: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default ContactPage;
