import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, ChevronUp, ChevronDown } from 'lucide-react';

const stories = [
  {
    name: "Ramesh's Journey",
    title: "From Street to Science Lab",
    text: "Two years ago, Ramesh couldn't afford school and worked to support his family. Today, through our foundation, he is a top student with a bright future ahead.",
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80&w=1200",
    color: "#16A34A"
  },
  {
    name: "Meena's Education",
    title: "A Voice for the Voiceless",
    text: "Meena once sat outside the school gates, wishing she could join. Now, she is the lead of our girl-child education initiative in her village.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    color: "#2563EB"
  },
  {
    name: "Farmer Anil's Hope",
    title: "Clean Water, Healthy Future",
    text: "Anil and his village had no clean water for decades. The RO plant we installed has reduced water-borne diseases by 90% in just one year.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200",
    color: "#F97316"
  }
];

const ParallaxStory = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % stories.length);
  const prev = () => setIndex((prev) => (prev - 1 + stories.length) % stories.length);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="vertical-stories-section">
      <div className="container">
        <div className="vertical-story-grid">
          
          {/* Left: Content Area */}
          <div className="vertical-story-content">
            <div className="dot-header mb-32">
              <h2 className="modern-title-v5">
                <span className="dot-accent"></span>
                Voices of Hope: <span className="text-highlight">Impact</span>
              </h2>
            </div>

            <div className="story-display-area">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={index}
                  className="story-slide-v3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="story-tag-v3" style={{ color: stories[index].color }}>
                    {stories[index].name}
                  </div>
                  <h3 className="story-h3-v3">{stories[index].title}</h3>
                  <Quote size={32} className="quote-v3" />
                  <p className="story-p-v3">"{stories[index].text}"</p>
                  
                  <Link to="/impact" className="impact-link-v3">
                    Learn More <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertical Controls */}
            <div className="vertical-nav-v3">
              <button onClick={prev} className="v-nav-btn"><ChevronUp size={20} /></button>
              <div className="v-indicator">
                {stories.map((_, i) => (
                  <div key={i} className={`v-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
                ))}
              </div>
              <button onClick={next} className="v-nav-btn"><ChevronDown size={20} /></button>
            </div>
          </div>

          {/* Right: Large Vertical Image */}
          <div className="vertical-story-visual">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                className="visual-frame-v3"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              >
                <img src={stories[index].image} alt={stories[index].name} />
                <div className="visual-overlay-v3"></div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        .vertical-stories-section {
          padding: 80px 0;
          background: #fafafa;
          overflow: hidden;
        }

        .vertical-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 500px;
        }

        .vertical-story-content {
          position: relative;
          padding-right: 40px;
        }

        .dot-header {
          display: flex;
          align-items: center;
        }

        .dot-accent {
          width: 10px;
          height: 10px;
          background: var(--color-primary);
          border-radius: 50%;
          margin-right: 12px;
          box-shadow: 0 0 10px var(--color-primary-light);
        }

        .modern-title-v5 {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin: 0;
        }

        .story-display-area {
          height: 300px;
          position: relative;
        }

        .story-slide-v3 {
          position: absolute;
          inset: 0;
        }

        .story-tag-v3 {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .story-h3-v3 {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .quote-v3 {
          color: var(--color-primary-light);
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .story-p-v3 {
          font-size: 18px;
          line-height: 1.6;
          color: var(--color-text-main);
          font-style: italic;
          margin-bottom: 24px;
        }

        .impact-link-v3 {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--color-primary);
          text-decoration: none;
        }

        /* Vertical Nav */
        .vertical-nav-v3 {
          position: absolute;
          left: -60px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .v-nav-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .v-nav-btn:hover {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .v-indicator {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .v-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-border);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .v-dot.active {
          height: 20px;
          border-radius: 3px;
          background: var(--color-primary);
        }

        /* Visual Side */
        .vertical-story-visual {
          position: relative;
          height: 420px; /* Reduced from 550px */
          width: 90%; /* Added to reduce width */
          margin-left: auto; /* Aligned to right within its column */
          border-radius: 30px; /* Slightly tighter radius */
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
        }

        .visual-frame-v3 {
          width: 100%;
          height: 100%;
        }

        .visual-frame-v3 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .visual-overlay-v3 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
        }

        @media (max-width: 1024px) {
          .vertical-story-grid { grid-template-columns: 1fr; gap: 40px; }
          .vertical-story-visual { height: 400px; }
          .vertical-nav-v3 { left: auto; right: 0; flex-direction: row; top: -40px; }
          .v-indicator { flex-direction: row; }
          .v-dot.active { width: 20px; height: 6px; }
          .story-display-area { height: auto; min-height: 300px; }
          .story-slide-v3 { position: relative; }
        }

        @media (max-width: 768px) {
          .story-h3-v3 { font-size: 28px; }
          .story-p-v3 { font-size: 16px; }
        }
      `}</style>
    </section>
  );
};

export default ParallaxStory;
