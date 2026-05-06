import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Identify Problem',
    description: 'We conduct ground-level surveys to understand the core issues facing marginalized communities.',
    icon: <Search size={32} />,
    color: '#16A34A'
  },
  {
    number: '02',
    title: 'Plan Solution',
    description: 'Collaborating with experts to design sustainable, scalable, and community-driven interventions.',
    icon: <PenTool size={32} />,
    color: '#2563EB'
  },
  {
    number: '03',
    title: 'Execute Strategy',
    description: 'Our dedicated volunteers and staff implement the programs directly on the ground.',
    icon: <Rocket size={32} />,
    color: '#F97316'
  },
  {
    number: '04',
    title: 'Measure Impact',
    description: 'We rigorously track outcomes, ensuring transparency and continuous improvement.',
    icon: <BarChart size={32} />,
    color: '#7C3AED'
  }
];

const StepProcess = () => {
  return (
    <section className="modern-process">
      <div className="container">
        <div className="text-center mb-48">
          <span className="modern-sub">Our Methodology</span>
          <h2 className="modern-title">The <span className="text-highlight">Process</span> of Change</h2>
        </div>

        <div className="process-flow">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-node"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="node-connector">
                {index !== steps.length - 1 && (
                  <div className="connector-path">
                    <motion.div 
                      className="path-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                )}
              </div>

              <div className="node-content">
                <div className="node-icon-wrapper" style={{ '--accent': step.color }}>
                  <div className="node-number">{step.number}</div>
                  <div className="node-icon">{step.icon}</div>
                </div>
                
                <h3 className="node-title">{step.title}</h3>
                <p className="node-desc">{step.description}</p>
                
                <div className="node-step-tag" style={{ color: step.color }}>
                  Phase {step.number} <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .modern-process {
          padding: 80px 0;
          background: #fff;
          position: relative;
        }

        .process-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          position: relative;
        }

        .process-node {
          position: relative;
          text-align: center;
        }

        .node-connector {
          position: absolute;
          top: 50px;
          left: 50%;
          width: 100%;
          z-index: 0;
        }

        .connector-path {
          height: 2px;
          background: var(--color-border);
          position: relative;
          width: 100%;
        }

        .path-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          width: 100%;
          background: var(--color-primary);
          transform-origin: left;
        }

        .node-content {
          position: relative;
          z-index: 1;
        }

        .node-icon-wrapper {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border: 1px solid var(--color-border);
          transition: all 0.4s ease;
        }

        .process-node:hover .node-icon-wrapper {
          transform: translateY(-10px);
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
        }

        .node-number {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 32px;
          height: 32px;
          background: var(--color-text-heading);
          color: white;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid white;
        }

        .node-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin-bottom: 16px;
        }

        .node-desc {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .node-step-tag {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-sub {
          display: block;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-primary);
          font-size: 14px;
          margin-bottom: 12px;
        }

        .modern-title {
          font-size: 36px;
          font-weight: 800;
          color: var(--color-text-heading);
        }

        .text-highlight {
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .process-flow { grid-template-columns: repeat(2, 1fr); gap: 60px 40px; }
          .node-connector { display: none; }
        }

        @media (max-width: 640px) {
          .process-flow { grid-template-columns: 1fr; }
          .modern-title { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default StepProcess;
