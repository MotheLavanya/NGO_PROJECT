import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye } from 'lucide-react';

const ZigZagAbout = () => {
  return (
    <section className="section">
      <div className="container">
        
        {/* Row 1: Image Left, Text Right (Who We Are) */}
        <div className="zigzag-row">
          <motion.div 
            className="zigzag-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Team working together" 
                className="zigzag-img"
              />
            </div>
            <div className="experience-badge bg-white shadow-md">
              <h3>15+</h3>
              <p>Years of Impact</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="zigzag-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="sub-title">Who We Are</span>
            <h2 className="section-title">Driven by Compassion, Guided by Action</h2>
            <p className="text-muted mb-24">
              Hope Rise Foundation started as a small community initiative in Hyderabad with a group of dedicated volunteers. Today, we stand as one of the most trusted NGOs in South India, working tirelessly to bridge the gap between privilege and poverty.
            </p>
            <p className="text-muted mb-32">
              We believe that every individual deserves access to quality education, basic healthcare, and a sustainable environment to thrive.
            </p>
            <Link to="/about" className="btn btn-primary">
              Discover Our Journey <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Row 2: Text Left, Image Right (Mission & Vision) */}
        <div className="zigzag-row reverse mt-64">
          <motion.div 
            className="zigzag-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="sub-title">Our Purpose</span>
            <h2 className="section-title">A Vision for an Equitable Tomorrow</h2>
            
            <div className="mission-vision-cards mt-32">
              <div className="mv-card card">
                <div className="mv-icon bg-primary-light text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p className="text-small text-muted">To empower marginalized communities through scalable education, health, and environmental programs.</p>
                </div>
              </div>
              
              <div className="mv-card card mt-16">
                <div className="mv-icon bg-secondary-light text-secondary">
                  <Eye size={24} />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p className="text-small text-muted">A world where every child and family has the resources and opportunity to reach their full potential.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="zigzag-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
                alt="Community Impact" 
                className="zigzag-img"
              />
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .zigzag-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .zigzag-row.reverse .zigzag-content {
          order: 1;
        }
        .zigzag-row.reverse .zigzag-image-container {
          order: 2;
        }

        .zigzag-image-container {
          position: relative;
        }

        .image-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4/5;
        }

        .zigzag-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          display: block;
        }



        .bg-primary-light { background-color: var(--color-primary-light); }
        .bg-secondary-light { background-color: var(--color-secondary-light); }
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }

        .experience-badge {
          position: absolute;
          bottom: -30px;
          right: -30px;
          padding: 24px;
          border-radius: var(--radius-md);
          text-align: center;
          z-index: 10;
        }

        .experience-badge h3 {
          color: var(--color-primary);
          font-size: 36px;
          margin-bottom: 4px;
        }

        .experience-badge p {
          margin: 0;
          font-weight: 600;
          color: var(--color-text-main);
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .mv-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
        }

        .mv-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mt-64 { margin-top: 64px; }

        @media (max-width: 1024px) {
          .zigzag-row, .zigzag-row.reverse {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .zigzag-row.reverse .zigzag-content { order: 2; }
          .zigzag-row.reverse .zigzag-image-container { order: 1; }
          
          .image-wrapper { aspect-ratio: 16/9; }
          .experience-badge { right: 20px; bottom: -20px; }
        }
      `}</style>
    </section>
  );
};

export default ZigZagAbout;
