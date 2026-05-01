import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Agreement to Terms',
    text: 'These Terms of Use constitute a legally binding agreement between you and Hope Rise Foundation concerning your access to and use of our website. By accessing the site, you agree to be bound by these terms.'
  },
  {
    title: '2. Intellectual Property Rights',
    text: 'Unless otherwise indicated, all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us or licensed to us.'
  },
  {
    title: '3. User Representations',
    text: 'By using the Site, you confirm that all information you submit is true, accurate, current, and complete, and that you will maintain its accuracy throughout your use of our services.'
  },
  {
    title: '4. Prohibited Activities',
    text: 'You may not use the Site for any purpose other than its intended use. Commercial use is not permitted unless specifically endorsed or approved in writing by Hope Rise Foundation.'
  },
  {
    title: '5. Limitation of Liability',
    text: 'To the fullest extent permitted by law, Hope Rise Foundation shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or services.'
  }
];

const TermsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Simple Banner Hero — No Image */}
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <div className="legal-hero-icon">
            <FileText size={32} color="var(--color-primary)" />
          </div>
          <h1 className="legal-hero-title">Terms of Use</h1>
          <p className="legal-hero-sub">Last updated: April 2024</p>
          <p className="legal-hero-desc">
            Guidelines for using the Hope Rise Foundation website and its services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          {sections.map((s, i) => (
            <div key={i} className="legal-block">
              <h2 className="legal-heading">{s.title}</h2>
              <p className="legal-text">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .legal-hero {
          background: var(--color-bg-subtle);
          padding: 120px 0 40px;
          text-align: center;
          border-bottom: 1px solid var(--color-border);
        }

        .legal-hero-inner {
          max-width: 600px;
          margin: 0 auto;
        }

        .legal-hero-icon {
          width: 64px;
          height: 64px;
          background: var(--color-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-border);
        }

        .legal-hero-title {
          font-size: 32px;
          color: var(--color-text-heading);
          margin-bottom: 8px;
        }

        .legal-hero-sub {
          font-size: 12px;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .legal-hero-desc {
          font-size: 16px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .legal-block {
          padding: 20px 0;
          border-bottom: 1px solid var(--color-border);
        }

        .legal-block:last-child {
          border-bottom: none;
        }

        .legal-heading {
          font-size: 17px;
          color: var(--color-primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .legal-text {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 0;
        }
      `}</style>
    </motion.div>
  );
};

export default TermsPage;
