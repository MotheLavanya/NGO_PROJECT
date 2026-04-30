import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="legal-page"
    >
      <section className="page-header" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <h1 className="header-title">Terms of Use</h1>
          <p className="header-subtitle">Guidelines for using our website and services.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="legal-content">
            <h2>1. Agreement to Terms</h2>
            <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Hope Rise Foundation, concerning your access to and use of our website.</p>
            
            <h2>2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us or licensed to us.</p>
            
            <h2>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
            
            <h2>4. Prohibited Activities</h2>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            
            <h2>5. Limitation of Liability</h2>
            <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.</p>
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

export default TermsPage;
