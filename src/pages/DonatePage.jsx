import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Landmark, IndianRupee, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DonatePage = () => {
  const [amount, setAmount] = useState('1000');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const presets = ['500', '1000', '2500', '5000'];

  const impactMessages = {
    '500': 'Provides a school kit for one child.',
    '1000': 'Covers medical checkup for a family of four.',
    '2500': 'Sponsors a student\'s digital education for a quarter.',
    '5000': 'Supports clean water access for a whole village for a month.'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="donate-page">
        <section className="section text-center" style={{ padding: '200px 0' }}>
          <div className="container">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card" style={{ padding: '5rem', maxWidth: '600px', margin: '0 auto' }}>
              <Heart size={80} color="var(--color-primary)" fill="var(--color-primary-soft)" style={{ marginBottom: '2rem' }} />
              <h2>Thank You for Your Generosity!</h2>
              <p style={{ margin: '1.5rem 0 2.5rem', color: 'var(--color-text-muted)' }}>
                Your donation of ₹{amount} has been received. A receipt has been sent to your email. Your support makes a world of difference.
              </p>
              <a href="/" className="btn btn-primary">Back to Home</a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="donate-page"
    >
      <section className="page-header" style={{ background: 'var(--color-secondary-soft)' }}>
        <div className="container">
          <h1 className="header-title">Every Rupee Counts</h1>
          <p className="header-subtitle">Your support fuels the transformation of underprivileged lives in Telangana.</p>
        </div>
      </section>

      <section className="section">
        <div className="container donation-grid">
          <div className="donation-card glass-card">
            <div className="card-header">
              <div className="toggle-container">
                <button 
                  type="button"
                  className={`toggle-btn ${!isRecurring ? 'active' : ''}`}
                  onClick={() => setIsRecurring(false)}
                >
                  One-time
                </button>
                <button 
                  type="button"
                  className={`toggle-btn ${isRecurring ? 'active' : ''}`}
                  onClick={() => setIsRecurring(true)}
                >
                  Monthly
                </button>
              </div>
            </div>

            <form className="donation-body" onSubmit={handleSubmit}>
              <h3 className="mb-1">Select Amount (INR)</h3>
              <div className="preset-grid">
                {presets.map((p) => (
                  <button 
                    key={p} 
                    type="button"
                    className={`preset-btn ${amount === p ? 'active' : ''}`}
                    onClick={() => setAmount(p)}
                  >
                    ₹{p}
                  </button>
                ))}
                <div className="custom-input-wrapper">
                  <span className="currency-prefix">₹</span>
                  <input 
                    type="number" 
                    placeholder="Custom" 
                    value={presets.includes(amount) ? '' : amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              {impactMessages[amount] && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={amount}
                  className="impact-highlight"
                >
                  <Heart size={20} fill="var(--color-primary)" color="var(--color-primary)" />
                  <span>{impactMessages[amount]}</span>
                </motion.div>
              )}

              <div className="donor-info">
                <div className="grid-2">
                  <div className="input-group">
                    <label className="input-label">Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">PAN Number (For 80G Receipt)</label>
                  <input type="text" placeholder="ABCDE1234F" required />
                </div>
              </div>

              <button className="btn btn-primary donate-submit" disabled={isLoading}>
                {isLoading ? 'Processing Securely...' : `Donate ₹${amount} Now`} <ArrowRight size={20} />
              </button>

              <div className="trust-badges">
                <div className="trust-item">
                  <ShieldCheck size={18} color="var(--color-success)" />
                  <span>SSL Secured Payment</span>
                </div>
                <div className="trust-item">
                  <Landmark size={18} color="var(--color-text-muted)" />
                  <span>80G Tax Benefit</span>
                </div>
              </div>
            </form>
          </div>

          <div className="donation-sidebar">
            <AnimatedSection>
              <div className="transparency-card glass-card">
                <h3>Where Your Money Goes</h3>
                <div className="breakdown-item">
                  <div className="breakdown-head">
                    <span>Program Expenses</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '85%', background: 'var(--color-primary)' }}></div></div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-head">
                    <span>Fundraising</span>
                    <span>10%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '10%', background: 'var(--color-secondary)' }}></div></div>
                </div>
                <div className="breakdown-item">
                  <div className="breakdown-head">
                    <span>Administration</span>
                    <span>5%</span>
                  </div>
                  <div className="progress-bar"><div className="progress" style={{ width: '5%', background: 'var(--color-text-light)' }}></div></div>
                </div>
                <p className="mt-2 text-muted">We maintain the highest standards of financial efficiency in India. Our overhead is kept minimal to maximize impact on the ground.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="tax-benefit-card">
                <IndianRupee size={32} color="var(--color-primary)" />
                <h4>Donations are 50% Tax Deductible</h4>
                <p>As a registered NGO with 80G certification, you can claim a deduction of 50% of your donation amount from your taxable income.</p>
              </div>
            </AnimatedSection>
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
          color: var(--color-text-muted);
          max-width: 800px;
          margin: 0 auto;
        }

        .donation-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .donation-card {
          padding: 3rem;
        }

        .toggle-container {
          background: var(--color-bg-subtle);
          padding: 6px;
          border-radius: var(--radius-full);
          display: inline-flex;
          margin-bottom: 2.5rem;
        }

        .toggle-btn {
          padding: 10px 30px;
          border-radius: var(--radius-full);
          border: none;
          background: transparent;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .toggle-btn.active {
          background: var(--color-primary);
          color: white;
          box-shadow: var(--shadow-sm);
        }

        .preset-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }

        .preset-btn {
          padding: 15px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-bg-subtle);
          background: white;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
        }

        .preset-btn:hover {
          border-color: var(--color-primary);
          background: var(--color-primary-soft);
        }

        .preset-btn.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .custom-input-wrapper {
          position: relative;
        }

        .currency-prefix {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          color: var(--color-text-muted);
        }

        .custom-input-wrapper input {
          padding-left: 25px;
        }

        .impact-highlight {
          background: var(--color-primary-soft);
          padding: 1.2rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 2.5rem;
          color: var(--color-primary);
          font-weight: 600;
        }

        .donor-info {
          border-top: 1px solid var(--color-bg-subtle);
          padding-top: 2rem;
          margin-bottom: 2rem;
        }

        .donate-submit {
          width: 100%;
          padding: 18px;
          font-size: 1.1rem;
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .transparency-card {
          padding: 2.5rem;
          margin-bottom: 2rem;
        }

        .breakdown-item {
          margin-top: 1.5rem;
        }

        .breakdown-head {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .progress-bar {
          height: 8px;
          background: var(--color-bg-subtle);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
        }

        .tax-benefit-card {
          padding: 2.5rem;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-primary);
          text-align: center;
        }

        .tax-benefit-card h4 {
          margin: 1rem 0;
          font-size: 1.2rem;
        }

        .tax-benefit-card p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .mt-2 { margin-top: 2rem; }
        .mb-1 { margin-bottom: 1rem; }
        .text-muted { color: var(--color-text-muted); font-size: 0.9rem; }

        @media (max-width: 1024px) {
          .donation-grid { grid-template-columns: 1fr; gap: 4rem; }
          .preset-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 640px) {
          .donation-card { padding: 1.5rem; }
          .preset-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </motion.div>
  );
};

export default DonatePage;
