import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .faq-item {
          border-bottom: 1px solid var(--color-bg-subtle);
          background: white;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background: none;
          border: none;
          text-align: left;
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-main);
          cursor: pointer;
        }

        .faq-item.open .faq-question {
          color: var(--color-primary);
        }

        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--color-text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How is my donation utilized?",
      answer: "85% of your donation goes directly towards program implementation (education kits, medical supplies, water filters). 10% is used for fundraising and 5% for administrative overhead."
    },
    {
      question: "Can I choose which program to support?",
      answer: "Yes, on the donation page, you can select a specific initiative like 'Digital Education' or 'Rural Health' to direct your contribution."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, as a registered NGO in India, all donations to Hope Rise are eligible for a 50% tax deduction under Section 80G of the Income Tax Act."
    },
    {
      question: "How can I volunteer if I don't live in Hyderabad?",
      answer: "We have several remote volunteer opportunities in social media management, content writing, and digital mentorship. Check our Volunteer page for 'Flexible' opportunities."
    },
    {
      question: "Do you accept international donations?",
      answer: "Yes, we are FCRA compliant and can accept donations from international bank accounts and credit cards."
    }
  ];

  return (
    <div className="faq-container">
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
