import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, Users, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const stakeholders = [
  {
    id: 'donors',
    title: 'Donors',
    subtitle: 'Fuel the Mission',
    description: 'Empowering change through strategic financial support. Every contribution is tracked with 100% transparency.',
    icon: <HeartHandshake size={32} />,
    color: '#16A34A',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'volunteers',
    title: 'Volunteers',
    subtitle: 'Lend a Hand',
    description: 'Join a global network of dedicated change-makers. Your talent is the fuel for our community projects.',
    icon: <Users size={32} />,
    color: '#2563EB',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'beneficiaries',
    title: 'Beneficiaries',
    subtitle: 'Access Growth',
    description: 'Unlocking potential through education and healthcare. Enrolling individuals into sustainable cycles of growth.',
    icon: <GraduationCap size={32} />,
    color: '#F97316',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200'
  }
];

const StakeholderSection = () => {
  const [activeTab, setActiveTab] = useState(stakeholders[0]);

  return (
    <section className="engagement-portal-v3">
      <div className="container">
        <div className="portal-wrapper">
          
          {/* Left: Interactive Menu */}
          <div className="portal-menu">
            <div className="menu-header">
              <span className="portal-tag">Engagement Portal</span>
              <h2 className="portal-title">Join the <span className="text-primary">Movement</span></h2>
            </div>

            <div className="menu-items">
              {stakeholders.map((item) => (
                <div 
                  key={item.id}
                  className={`menu-item ${activeTab.id === item.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveTab(item)}
                >
                  <div className="item-icon" style={{ '--accent': item.color }}>
                    {item.icon}
                  </div>
                  <div className="item-text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <ArrowRight className="item-arrow" size={20} />
                  
                  {activeTab.id === item.id && (
                    <motion.div layoutId="menu-bg" className="menu-bg" />
                  )}
                </div>
              ))}
            </div>

            <div className="portal-footer">
              <div className="trust-pill">
                <ShieldCheck size={14} /> <span>Transparent Reporting</span>
              </div>
            </div>
          </div>

          {/* Right: Cinematic Showcase */}
          <div className="portal-showcase">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab.id}
                className="showcase-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="showcase-image">
                  <img src={activeTab.image} alt={activeTab.title} />
                  <div className="showcase-overlay" style={{ background: `linear-gradient(to top, ${activeTab.color}cc, transparent)` }}></div>
                </div>
                
                <div className="showcase-content">
                  <p className="showcase-desc">{activeTab.description}</p>
                  <Link to={`/${activeTab.id === 'beneficiaries' ? 'programs' : activeTab.id}`} className="showcase-btn" style={{ '--accent': activeTab.color }}>
                    Become a {activeTab.title.slice(0, -1)}
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        .engagement-portal-v3 {
          padding: 40px 0 60px; /* Reduced top padding */
          background: #fafafa;
          overflow: hidden;
        }

        .portal-wrapper {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          align-items: center;
          min-height: 400px;
        }

        .portal-menu {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .portal-tag {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-primary);
          margin-bottom: 12px;
          display: block;
        }

        .portal-title {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin: 0;
          letter-spacing: -0.02em;
        }

        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .menu-item {
          position: relative;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          border-radius: 20px;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .item-icon {
          width: 44px;
          height: 44px;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-heading);
          transition: all 0.3s ease;
        }

        .menu-item.active .item-icon {
          background: var(--accent);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .item-text h3 {
          font-size: 16px;
          font-weight: 800;
          margin: 0;
          color: var(--color-text-heading);
        }

        .item-text p {
          font-size: 13px;
          color: var(--color-text-muted);
          margin: 0;
          font-weight: 600;
        }

        .item-arrow {
          margin-left: auto;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: var(--color-text-heading);
        }

        .menu-item.active .item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .menu-bg {
          position: absolute;
          inset: 0;
          background: white;
          border: 1px solid var(--color-border);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
          border-radius: 20px;
          z-index: -1;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0,0,0,0.03);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 800;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        /* Showcase Side */
        .portal-showcase {
          position: relative;
          height: 400px;
        }

        .showcase-card {
          position: absolute;
          inset: 0;
          background: white;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.12);
        }

        .showcase-image {
          height: 65%;
          position: relative;
          overflow: hidden;
        }

        .showcase-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .showcase-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.6;
        }

        .showcase-content {
          padding: 24px 32px;
          height: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .showcase-desc {
          font-size: 14px;
          line-height: 1.5;
          color: var(--color-text-main);
          margin-bottom: 16px;
        }

        .showcase-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          color: var(--accent);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .showcase-btn:hover {
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .portal-wrapper { grid-template-columns: 1fr; gap: 40px; }
          .portal-showcase { height: 450px; }
          .portal-title { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default StakeholderSection;
