import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="legal-page"
    >
      <section className="page-header" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <h1 className="header-title">Privacy Policy</h1>
          <p className="header-subtitle">How we protect and manage your data.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the Website (such as by donating or volunteering), or otherwise when you contact us.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            
            <h2>3. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>
            
            <h2>4. Your Rights</h2>
            <p>In some regions, such as the European Economic Area, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>
            
            <h2>5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at privacy@hoperise.org or by post to our Hyderabad office.</p>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 180px 0 80px;
          text-align: center;
        }
        .header-title { font-size: 3rem; margin-bottom: 1rem; }
        .legal-content h2 { margin: 2rem 0 1rem; color: var(--color-primary); }
        .legal-content p { line-height: 1.8; color: var(--color-text-muted); margin-bottom: 1.5rem; }
      `}</style>
    </motion.div>
  );
};

export default PrivacyPage;
