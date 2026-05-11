import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Hope Rise Foundation didn't just give my children books; they gave them the confidence to dream. The learning center changed our entire village's perspective on education.",
    author: "Lakshmi Devi",
    role: "Mother of 3, Village Beneficiary",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    text: "Volunteering here has been the most fulfilling experience of my life. The organization is incredibly transparent and genuinely cares about grassroots impact.",
    author: "Rahul Sharma",
    role: "Impact Volunteer",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
    rating: 5
  },
  {
    text: "As a corporate partner, we look for NGOs with measurable outcomes. Hope Rise consistently delivers transparent reports and real, tangible change in remote sectors.",
    author: "Sarah Jenkins",
    role: "CSR Director, Global Tech",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    rating: 5
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="cinematic-testimonials">
      <div className="container">
        <div className="testimonial-grid">
          {/* Left Side: Large Portrait */}
          <div className="portrait-side">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="main-portrait"
              >
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
                <div className="portrait-overlay"></div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Floating Buttons */}
            <div className="floating-nav">
              <button onClick={handlePrev} className="nav-btn"><ChevronLeft size={20} /></button>
              <button onClick={handleNext} className="nav-btn"><ChevronRight size={20} /></button>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="content-side">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="testimonial-info"
            >
              <span className="modern-sub">Voices of Impact</span>
              <h2 className="modern-title">Community <span className="text-highlight">Stories</span></h2>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="quote-block"
                >
                  <div className="stars-row">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                    ))}
                  </div>
                  
                  <Quote size={40} className="quote-icon-v2" />
                  <p className="main-quote">"{testimonials[currentIndex].text}"</p>
                  
                  <div className="author-details">
                    <h4 className="author-name">{testimonials[currentIndex].author}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="progress-bar-container">
                {testimonials.map((_, i) => (
                  <div 
                    key={i} 
                    className={`progress-pill ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(i)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .cinematic-testimonials {
          padding: 80px 0;
          background: #fff;
          overflow: hidden;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
        }

        .portrait-side {
          position: relative;
        }

        .main-portrait {
          width: 80%; /* Reduced from 100% */
          margin: 0 auto; /* Centered */
          aspect-ratio: 4/5;
          border-radius: 30px; /* Tighter radius for smaller size */
          overflow: hidden;
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.15);
        }

        .main-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portrait-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(22, 163, 74, 0.2), transparent);
          mix-blend-mode: overlay;
        }

        .floating-nav {
          position: absolute;
          bottom: 40px;
          right: -30px;
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .nav-btn {
          width: 60px;
          height: 60px;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-lg);
        }

        .nav-btn:hover {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          transform: translateY(-5px);
        }

        .content-side {
          position: relative;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .quote-icon-v2 {
          color: var(--color-primary-light);
          margin-bottom: 20px;
          opacity: 0.6;
        }

        .main-quote {
          font-size: 24px;
          font-weight: 600;
          line-height: 1.4;
          color: var(--color-text-heading);
          margin-bottom: 24px;
          font-family: var(--font-heading);
        }

        .author-details {
          border-left: 4px solid var(--color-primary);
          padding-left: 24px;
        }

        .author-name {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .author-role {
          font-size: 14px;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .progress-bar-container {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .progress-pill {
          height: 6px;
          width: 40px;
          background: var(--color-border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .progress-pill.active {
          background: var(--color-primary);
          width: 80px;
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
          margin-bottom: 32px;
        }

        .text-highlight {
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .portrait-side {
            max-width: 500px;
            margin: 0 auto;
          }
          .floating-nav {
            right: 20px;
            bottom: -30px;
          }
          .main-quote {
            font-size: 22px;
          }
        }

        @media (max-width: 768px) {
          .cinematic-testimonials { padding: 60px 0; }
          .modern-title { font-size: 28px; }
          .main-quote { font-size: 18px; }
          .text-side { padding: 0 20px; text-align: center; }
          .author-info { justify-content: center; text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
