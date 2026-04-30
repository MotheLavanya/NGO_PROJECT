import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, PieChart, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TransparencyPage = () => {
  const reports = [
    { year: '2023-24', title: 'Annual Impact Report', size: '4.2 MB' },
    { year: '2022-23', title: 'Audited Financial Statement', size: '2.1 MB' },
    { year: '2022-23', title: 'Annual Impact Report', size: '3.8 MB' },
    { year: '2021-22', title: 'FCRA Quarterly Returns', size: '1.2 MB' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="transparency-page"
    >
      <section className="page-header" style={{ background: '#0F172A', color: 'white' }}>
        <div className="container">
          <h1 className="header-title" style={{ color: 'white' }}>Transparency & Trust</h1>
          <p className="header-subtitle" style={{ color: '#94A3B8' }}>Our commitment to financial integrity and measurable impact.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2 align-center">
          <AnimatedSection>
            <div className="trust-content">
              <span className="sub-title">Accountability</span>
              <h2 className="section-title">Open Books, Open Heart.</h2>
              <p className="mb-2">We believe that every donor has the right to know exactly how their contribution is being utilized. Our financial records are audited by independent certified auditors annually and are available for public review.</p>
              <div className="trust-pillars">
                <div className="pillar-item">
                  <ShieldCheck size={24} color="var(--color-primary)" />
                  <div>
                    <strong>85% Efficiency</strong>
                    <p>85 paise of every rupee goes directly to program implementation.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <PieChart size={24} color="var(--color-secondary)" />
                  <div>
                    <strong>Real-time Tracking</strong>
                    <p>We use digital monitoring tools to track field activity in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="chart-visual glass-card">
              <h3>Fund Allocation (FY 2023-24)</h3>
              <div className="chart-item">
                <div className="chart-label"><span>Digital Education</span><span>45%</span></div>
                <div className="chart-bar"><div className="bar-fill" style={{ width: '45%', background: '#0D9488' }}></div></div>
              </div>
              <div className="chart-item">
                <div className="chart-label"><span>Rural Healthcare</span><span>25%</span></div>
                <div className="chart-bar"><div className="bar-fill" style={{ width: '25%', background: '#F59E0B' }}></div></div>
              </div>
              <div className="chart-item">
                <div className="chart-label"><span>Clean Water</span><span>15%</span></div>
                <div className="chart-bar"><div className="bar-fill" style={{ width: '15%', background: '#6366F1' }}></div></div>
              </div>
              <div className="chart-item">
                <div className="chart-label"><span>Administration</span><span>15%</span></div>
                <div className="chart-bar"><div className="bar-fill" style={{ width: '15%', background: '#94A3B8' }}></div></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center mb-4">
            <span className="sub-title">Documents</span>
            <h2 className="section-title">Reports & Downloads</h2>
          </div>
          <div className="grid-2">
            {reports.map((report, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="report-card glass-card">
                <div className="report-icon"><FileText size={32} /></div>
                <div className="report-info">
                  <span className="report-year">{report.year}</span>
                  <h3>{report.title}</h3>
                  <span className="report-size">{report.size} • PDF</span>
                </div>
                <button className="download-btn"><Download size={20} /></button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section certification-section">
        <div className="container">
          <div className="certification-grid">
            <div className="cert-card">
              <CheckCircle size={40} color="var(--color-success)" />
              <h3>12A Certified</h3>
              <p>Income tax exemption for the organization under Section 12A.</p>
            </div>
            <div className="cert-card">
              <CheckCircle size={40} color="var(--color-success)" />
              <h3>80G Certified</h3>
              <p>Donors are eligible for 50% tax deduction on contributions.</p>
            </div>
            <div className="cert-card">
              <CheckCircle size={40} color="var(--color-success)" />
              <h3>FCRA Compliant</h3>
              <p>Authorized to receive and utilize international funding.</p>
            </div>
          </div>
          <div className="external-links mt-4 text-center">
            <p>Verify our status on official government portals:</p>
            <div className="flex justify-center gap-2 mt-1">
              <a href="#" className="link-item">NGO Darpan <ExternalLink size={14} /></a>
              <a href="#" className="link-item">Income Tax Dept <ExternalLink size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          padding: 180px 0 100px;
          text-align: center;
        }

        .header-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .header-subtitle {
          font-size: 1.3rem;
        }

        .trust-pillars {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .pillar-item {
          display: flex;
          gap: 1.5rem;
        }

        .pillar-item strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .pillar-item p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .chart-visual {
          padding: 3rem;
        }

        .chart-visual h3 {
          margin-bottom: 2rem;
          text-align: center;
        }

        .chart-item {
          margin-bottom: 1.5rem;
        }

        .chart-label {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .chart-bar {
          height: 10px;
          background: var(--color-bg-subtle);
          border-radius: 5px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 5px;
        }

        .report-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          transition: var(--transition);
        }

        .report-card:hover {
          transform: translateY(-5px);
        }

        .report-icon {
          color: var(--color-primary);
        }

        .report-year {
          display: block;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 0.3rem;
        }

        .report-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .report-size {
          color: var(--color-text-light);
          font-size: 0.85rem;
        }

        .download-btn {
          margin-left: auto;
          width: 44px;
          height: 44px;
          background: var(--color-primary-soft);
          color: var(--color-primary);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .download-btn:hover {
          background: var(--color-primary);
          color: white;
        }

        .certification-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .cert-card {
          text-align: center;
          padding: 2rem;
        }

        .cert-card h3 {
          margin: 1.5rem 0 0.8rem;
        }

        .cert-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .link-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--color-primary);
          font-weight: 600;
          text-decoration: underline;
        }

        .mt-4 { margin-top: 4rem; }
        .mt-1 { margin-top: 1rem; }
        .justify-center { justify-content: center; }
        .gap-2 { gap: 2rem; }
        .flex { display: flex; }

        @media (max-width: 768px) {
          .certification-grid { grid-template-columns: 1fr; gap: 1rem; }
          .report-card { flex-direction: column; text-align: center; }
          .download-btn { margin: 1rem auto 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default TransparencyPage;
