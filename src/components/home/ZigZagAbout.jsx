import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Sparkles } from 'lucide-react';

const ZigZagAbout = () => {
  return (
    <section className="modern-zigzag">
      <div className="container">
        
        {/* Row 1: Who We Are */}
        <div className="zigzag-row-v2">
          <motion.div 
            className="zigzag-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="liquid-frame">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
              />
              <div className="frame-glow"></div>
            </div>
            <motion.div 
              className="impact-floating-badge"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="badge-val">15+</div>
              <div className="badge-lab">Years of Service</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="zigzag-text-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="modern-sub">Who We Are</span>
            <h2 className="modern-title">Driven by <span className="text-highlight">Compassion</span>, Guided by Action</h2>
            <p className="modern-desc">
              Hope Rise Foundation started as a small community initiative in Hyderabad. Today, we stand as a beacon of hope, working tirelessly to bridge the gap between privilege and poverty through sustainable, grassroots-level interventions.
            </p>
            <p className="modern-desc secondary">
              We believe that every individual deserves access to quality education, basic healthcare, and a sustainable environment to thrive.
            </p>
            <Link to="/about" className="modern-btn-minimal">
              Discover Our Journey <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Row 2: Mission & Vision */}
        <div className="zigzag-row-v2 reverse">
          <motion.div 
            className="zigzag-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="liquid-frame alt-shape">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200" 
                alt="Impact" 
              />
              <div className="frame-glow secondary"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="zigzag-text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="modern-sub">Our Purpose</span>
            <h2 className="modern-title">A Vision for an <span className="text-highlight">Equitable</span> Tomorrow</h2>
            
            <div className="mv-grid">
              <div className="mv-item-v2">
                <div className="mv-icon-v2 primary"><Target size={24} /></div>
                <div className="mv-info">
                  <h4>Our Mission</h4>
                  <p>To empower marginalized communities through scalable education, health, and environmental programs.</p>
                </div>
              </div>
              
              <div className="mv-item-v2">
                <div className="mv-icon-v2 secondary"><Eye size={24} /></div>
                <div className="mv-info">
                  <h4>Our Vision</h4>
                  <p>A world where every child and family has the resources and opportunity to reach their full potential.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .modern-zigzag {
          padding: 80px 0;
          background: #fff;
          overflow: hidden;
        }

        .zigzag-row-v2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-bottom: 80px;
        }

        .zigzag-row-v2.reverse .zigzag-visual { order: 2; }
        .zigzag-row-v2.reverse .zigzag-text-content { order: 1; }

        /* Liquid Frame */
        .liquid-frame {
          position: relative;
          width: 85%; /* Reduced from 100% */
          margin: 0 auto; /* Centered */
          aspect-ratio: 1;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          overflow: hidden;
          background: #f0f0f0;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
          animation: liquidMorph 10s infinite alternate ease-in-out;
        }

        .liquid-frame.alt-shape {
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 40%;
          animation: liquidMorphAlt 12s infinite alternate ease-in-out;
        }

        @keyframes liquidMorph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 40%; }
        }

        @keyframes liquidMorphAlt {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 40%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .liquid-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .frame-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%);
          z-index: -1;
          opacity: 0.5;
        }

        .frame-glow.secondary {
          background: radial-gradient(circle, var(--color-secondary-light) 0%, transparent 70%);
        }

        .impact-floating-badge {
          position: absolute;
          bottom: 20px;
          right: 0;
          background: white;
          padding: 24px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          text-align: center;
          border: 1px solid var(--color-border);
        }

        .badge-val {
          font-size: 40px;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
        }

        .badge-lab {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Text Content */
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
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .text-highlight {
          color: var(--color-primary);
        }

        .modern-desc {
          font-size: 18px;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .modern-desc.secondary {
          font-size: 16px;
          opacity: 0.8;
          margin-bottom: 24px;
        }

        .modern-btn-minimal {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          color: var(--color-primary);
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .modern-btn-minimal:hover {
          gap: 20px;
          color: var(--color-primary-dark);
        }

        /* Mission Vision v2 */
        .mv-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 40px;
        }

        .mv-item-v2 {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px;
          background: #fafafa;
          border-radius: 24px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .mv-item-v2:hover {
          background: white;
          border-color: var(--color-border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transform: translateX(10px);
        }

        .mv-icon-v2 {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mv-icon-v2.primary { background: var(--color-primary-light); color: var(--color-primary); }
        .mv-icon-v2.secondary { background: var(--color-secondary-light); color: var(--color-secondary); }

        .mv-info h4 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .mv-info p {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .zigzag-row-v2 { grid-template-columns: 1fr; gap: 60px; }
          .zigzag-visual { max-width: 500px; margin: 0 auto; }
          .zigzag-row-v2.reverse .zigzag-visual { order: 1; }
          .zigzag-row-v2.reverse .zigzag-text-content { order: 2; }
          .modern-title { font-size: 36px; }
        }

        @media (max-width: 768px) {
          .modern-zigzag { padding: 80px 0; }
          .modern-title { font-size: 32px; }
          .modern-desc { font-size: 16px; }
          .mv-item-v2 { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default ZigZagAbout;
