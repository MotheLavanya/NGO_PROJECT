import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, ShieldCheck, Sparkles, Globe } from 'lucide-react';

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1584515154018-4716f1bc3977?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section className="split-orbit-hero">
      <div className="split-bg"></div>
      
      <div className="container relative z-10">
        <div className="hero-split-layout">
          
          {/* Left: Content Block */}
          <div className="hero-split-text">
            <motion.div 
              className="split-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles size={14} />
              <span>Certified Impact NGO</span>
            </motion.div>

            <motion.h1 
              className="split-h1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building <span className="text-primary">Hope</span> <br />
              Across <span className="text-accent">Boundaries.</span>
            </motion.h1>

            <motion.p 
              className="split-p"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We are dedicated to transforming lives through innovative 
              healthcare, education, and sustainable development.
            </motion.p>

            <div className="split-actions">
              <a href="/donate" className="btn-s-primary">
                Donate Now <Heart size={18} fill="currentColor" />
              </a>
              <a href="/about" className="btn-s-outline">
                Our Story <ArrowRight size={18} />
              </a>
            </div>

            <div className="split-trust">
              <div className="t-node-s"><ShieldCheck size={14} /> <span>Transparent</span></div>
              <div className="t-node-s"><Globe size={14} /> <span>Global Reach</span></div>
            </div>
          </div>

          {/* Right: The 8-Image Exact Circle */}
          <div className="hero-split-visual">
            <div className="exact-circle-container">
              
              {/* Central Main Image */}
              <motion.div 
                className="exact-circle-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" alt="Main Mission" />
                <div className="center-img-glow"></div>
              </motion.div>

              {/* Rotating Ring of 8 Images */}
              <motion.div 
                className="exact-rotating-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="exact-ring-item"
                    style={{ transform: `rotate(${idx * 45}deg) translateY(-210px)` }}
                  >
                    <motion.div 
                      className="exact-img-box"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                      <img src={img} alt={`Impact ${idx}`} />
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Decorative Guide Rings */}
              <div className="exact-guide-ring"></div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .split-orbit-hero {
          position: relative;
          min-height: 90vh; /* Increased height for better clearance */
          background: #fff;
          display: flex;
          align-items: center;
          padding: 100px 0;
          overflow: hidden;
        }

        .split-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 80% 20%, rgba(22, 163, 74, 0.03) 0%, transparent 70%);
          z-index: 0;
        }

        .hero-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* Text Side */
        .split-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }

        .split-h1 {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          color: #1e293b;
          margin-bottom: 24px;
        }

        .text-accent { color: var(--color-accent); }

        .split-p {
          font-size: 17px;
          color: #64748b;
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 40px;
        }

        .split-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-s-primary {
          padding: 15px 32px;
          background: var(--color-primary);
          color: white;
          border-radius: 12px;
          font-weight: 800;
          font-size: 16px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px rgba(22, 163, 74, 0.15);
        }

        .btn-s-outline {
          padding: 15px 32px;
          background: white;
          border: 1px solid #e2e8f0;
          color: #1e293b;
          border-radius: 12px;
          font-weight: 800;
          font-size: 16px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .split-trust {
          display: flex;
          gap: 32px;
        }

        .t-node-s {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
        }

        /* Visual Side: Exact Circle at Right */
        .hero-split-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .exact-circle-container {
          position: relative;
          width: 600px; /* Increased to avoid clipping */
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .exact-circle-center {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid white;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .exact-circle-center img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .center-img-glow {
          position: absolute;
          inset: -15px;
          background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%);
          z-index: -1;
          opacity: 0.3;
        }

        .exact-rotating-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .exact-ring-item {
          position: absolute;
          width: 110px;
          height: 110px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .exact-img-box {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          background: white;
        }

        .exact-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .exact-guide-ring {
          position: absolute;
          width: 360px;
          height: 360px;
          border: 1px dashed rgba(0,0,0,0.05);
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .hero-split-layout { grid-template-columns: 1fr; text-align: center; }
          .hero-split-text { display: flex; flex-direction: column; align-items: center; }
          .split-actions { justify-content: center; }
          .split-trust { justify-content: center; }
          .hero-split-visual { margin-top: 60px; transform: scale(0.85); }
        }

        @media (max-width: 768px) {
          .split-h1 { font-size: 36px; }
          .exact-circle-container { width: 350px; height: 350px; }
          .exact-img-box { width: 80px; height: 80px; }
          .exact-guide-ring { width: 280px; height: 280px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
