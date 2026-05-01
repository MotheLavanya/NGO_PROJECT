import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Hope Rise Foundation didn't just give my children books; they gave them the confidence to dream. The learning center changed our entire village.",
    author: "Lakshmi Devi",
    role: "Mother of 3, Beneficiary",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "Volunteering here has been the most fulfilling experience of my life. The organization is incredibly transparent and genuinely cares about impact.",
    author: "Rahul Sharma",
    role: "Weekend Volunteer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "As a corporate partner, we look for NGOs with measurable outcomes. Hope Rise consistently delivers transparent reports and real, tangible change.",
    author: "Sarah Jenkins",
    role: "CSR Director, TechCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section section-bg">
      <div className="container">
        <div className="text-center mb-48">
          <span className="sub-title">Voices of Impact</span>
          <h2 className="section-title">What People Say About Us</h2>
        </div>

        <div className="testimonial-container">
          <button className="slider-btn prev" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-content-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="quote-icon">
                  <Quote size={40} color="var(--color-primary-light)" />
                </div>
                <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="author-img"
                  />
                  <div>
                    <h4>{testimonials[currentIndex].author}</h4>
                    <span className="text-small text-muted">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="slider-btn next" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .testimonial-content-wrapper {
          flex: 1;
          overflow: hidden;
        }

        .testimonial-card {
          padding: 48px;
          text-align: center;
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
        }

        .testimonial-text {
          font-size: 20px;
          line-height: 1.6;
          color: var(--color-text-main);
          font-style: italic;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .author-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .testimonial-author h4 {
          margin-bottom: 0;
          font-size: 16px;
        }

        .slider-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--color-text-main);
          transition: var(--transition);
          flex-shrink: 0;
        }

        .slider-btn:hover {
          background: var(--color-primary);
          color: var(--color-white);
          border-color: var(--color-primary);
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 32px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-border);
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }

        .dot.active {
          background: var(--color-primary);
          width: 24px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .testimonial-card { padding: 32px 24px; }
          .testimonial-text { font-size: 16px; }
          .slider-btn { display: none; } /* Hide arrows on mobile, rely on dots/swipe ideally */
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
