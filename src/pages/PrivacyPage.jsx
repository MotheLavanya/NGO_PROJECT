import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    text: 'We collect personal information you voluntarily provide when expressing interest in our services, participating in website activities (donating or volunteering), or contacting us.'
  },
  {
    title: '2. How We Use Your Information',
    text: 'We use collected information for legitimate business purposes — fulfilling contracts, complying with legal obligations, and improving our services to better serve our communities.'
  },
  {
    title: '3. Data Security',
    text: 'We have implemented appropriate technical and organizational security measures to protect your personal information. However, no internet transmission is 100% guaranteed to be secure.'
  },
  {
    title: '4. Your Rights',
    text: 'You may review, change, or request deletion of your personal information at any time by contacting us directly. We respect your right to control your own data.'
  },
  {
    title: '5. Contact Us',
    text: 'For questions about this policy, email us at privacy@hoperise.org or write to our Hyderabad office.'
  }
];

const PrivacyPage = () => {
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
            <ShieldCheck size={32} color="var(--color-primary)" />
          </div>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-sub">Last updated: April 2024</p>
          <p className="legal-hero-desc">
            How we collect, protect, and manage your personal data at Hope Rise Foundation.
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

export default PrivacyPage;
