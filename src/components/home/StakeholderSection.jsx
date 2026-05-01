import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stakeholders = [
  {
    title: 'For Donors',
    description: 'See exactly where your money goes. Fund projects that match your passion.',
    icon: <HeartHandshake size={32} />,
    link: '/donate',
    color: 'var(--color-primary)'
  },
  {
    title: 'For Volunteers',
    description: 'Join our on-ground teams. Your time can change a community forever.',
    icon: <Users size={32} />,
    link: '/volunteer',
    color: 'var(--color-secondary)'
  },
  {
    title: 'For Beneficiaries',
    description: 'Need help or looking for program enrollments? Find resources here.',
    icon: <GraduationCap size={32} />,
    link: '/programs',
    color: 'var(--color-accent)'
  }
];

const StakeholderSection = () => {
  return (
    <section className="section section-bg">
      <div className="container">
        <div className="text-center mb-48">
          <span className="sub-title">Get Involved</span>
          <h2 className="section-title">How You Can Be Part of the Change</h2>
        </div>
        
        <div className="grid-3">
          {stakeholders.map((item, index) => (
            <motion.div
              key={index}
              className="stakeholder-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="icon-wrapper" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                {item.icon}
              </div>
              <h3 className="mb-16">{item.title}</h3>
              <p className="mb-24 text-muted">{item.description}</p>
              <Link to={item.link} className="stakeholder-link" style={{ color: item.color }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .stakeholder-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .stakeholder-link {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-family: var(--font-heading);
        }
        .stakeholder-link:hover {
          gap: 12px;
        }
      `}</style>
    </section>
  );
};

export default StakeholderSection;
