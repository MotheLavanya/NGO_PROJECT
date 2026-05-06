import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const events = [
  { date: '24', mon: 'May', title: 'Annual Charity Gala 2026', loc: 'Hyderabad' },
  { date: '12', mon: 'Jun', title: 'Rural Education Workshop', loc: 'Warangal' },
  { date: '05', mon: 'Jul', title: 'Clean Water Initiative', loc: 'Adilabad' },
  { date: '18', mon: 'Aug', title: 'Health for All Camp', loc: 'Nizamabad' }
];

const EventsSection = () => {
  return (
    <section className="extreme-simple-events-v12">
      <div className="container">
        
        <div className="v12-header">
          <h2 className="v12-h2">Upcoming <span className="text-primary">Events</span></h2>
          <a href="/events" className="v12-all">View All Events</a>
        </div>

        <div className="v12-list">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              className="v12-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="v12-date-side">
                <span className="v12-day">{event.date}</span>
                <span className="v12-mon">{event.mon}</span>
              </div>

              <div className="v12-main-side">
                <h3 className="v12-title">{event.title}</h3>
                <div className="v12-loc">
                  <MapPin size={14} /> {event.loc}
                </div>
              </div>

              <div className="v12-action-side">
                <a href="/register" className="v12-btn">
                  Register <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .extreme-simple-events-v12 {
          padding: 60px 0;
          background: #fff;
        }

        .v12-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f5f5f5;
        }

        .v12-h2 {
          font-size: 28px;
          font-weight: 800;
          color: var(--color-text-heading);
          margin: 0;
        }

        .v12-all {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-muted);
          text-decoration: none;
          transition: color 0.3s;
        }

        .v12-all:hover { color: var(--color-primary); }

        .v12-list {
          display: flex;
          flex-direction: column;
        }

        .v12-item {
          display: grid;
          grid-template-columns: 100px 1fr 150px;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid #f5f5f5;
          transition: all 0.3s ease;
        }

        .v12-item:last-child { border-bottom: none; }

        .v12-date-side {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .v12-day { font-size: 28px; font-weight: 800; color: var(--color-text-heading); }
        .v12-mon { font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--color-primary); margin-top: 4px; }

        .v12-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text-heading);
          margin-bottom: 6px;
        }

        .v12-loc {
          font-size: 13px;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }

        .v12-action-side {
          display: flex;
          justify-content: flex-end;
        }

        .v12-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          color: var(--color-primary);
          text-decoration: none;
          font-size: 14px;
          transition: transform 0.3s;
        }

        .v12-item:hover .v12-btn { transform: translateX(8px); }

        @media (max-width: 768px) {
          .v12-item { grid-template-columns: 80px 1fr; gap: 10px; }
          .v12-action-side { display: none; }
          .v12-h2 { font-size: 24px; }
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
