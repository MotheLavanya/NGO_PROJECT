import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Identify Problem',
    description: 'We conduct ground-level surveys to understand the core issues facing marginalized communities.',
    icon: <Search size={28} />
  },
  {
    number: '02',
    title: 'Plan Solution',
    description: 'Collaborating with experts to design sustainable, scalable, and community-driven interventions.',
    icon: <PenTool size={28} />
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Our dedicated volunteers and staff implement the programs directly on the ground.',
    icon: <Rocket size={28} />
  },
  {
    number: '04',
    title: 'Measure Impact',
    description: 'We rigorously track outcomes, ensuring transparency and continuous improvement in our approach.',
    icon: <BarChart size={28} />
  }
];

const StepProcess = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-48">
          <span className="sub-title">How We Work</span>
          <h2 className="section-title">Our Approach to Change</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="mb-8">{step.title}</h3>
              <p className="text-muted text-small">{step.description}</p>
              
              {/* Connector Line (hidden on last item) */}
              {index !== steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }

        .process-step {
          text-align: center;
          position: relative;
          padding: 24px 16px;
        }

        .step-number {
          font-family: var(--font-heading);
          font-size: 64px;
          font-weight: 800;
          color: var(--color-bg-subtle);
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
          line-height: 1;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: var(--color-white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          position: relative;
          z-index: 1;
          color: var(--color-primary);
          box-shadow: var(--shadow-md);
          border: 2px solid var(--color-primary-light);
          transition: var(--transition);
        }

        .process-step:hover .step-icon {
          background: var(--color-primary);
          color: var(--color-white);
          transform: scale(1.1);
        }

        .step-connector {
          position: absolute;
          top: 64px; /* Align with center of icon */
          right: -50%;
          width: 100%;
          height: 2px;
          background: dashed 2px var(--color-border);
          z-index: 0;
        }

        @media (max-width: 1024px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 48px 24px; }
          .step-connector { display: none; } /* Hide connectors on smaller screens */
        }

        @media (max-width: 640px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default StepProcess;
