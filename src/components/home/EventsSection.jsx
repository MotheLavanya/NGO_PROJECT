import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    date: '15',
    month: 'Aug',
    title: 'Independence Day Health Camp',
    location: 'Warangal District',
    description: 'Free comprehensive health checkups for over 500 residents.'
  },
  {
    date: '05',
    month: 'Sep',
    title: 'Teacher\'s Day Book Drive',
    location: 'Hyderabad Headquarters',
    description: 'Collecting and distributing 10,000 books for rural schools.'
  },
  {
    date: '22',
    month: 'Oct',
    title: 'Clean Water Initiative Launch',
    location: 'Nalgonda',
    description: 'Inauguration of 5 new solar-powered water filtration plants.'
  }
];

const EventsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex-header mb-48">
          <div>
            <span className="sub-title">Upcoming Events</span>
            <h2 className="section-title mb-0">Join Us on the Ground</h2>
          </div>
          <button className="btn btn-outline">View All Events</button>
        </div>

        <div className="grid-3">
          {events.map((event, index) => (
            <motion.div 
              key={index} 
              className="event-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="event-date bg-primary-light text-primary">
                <span className="date-num">{event.date}</span>
                <span className="date-month">{event.month}</span>
              </div>
              <div className="event-details">
                <h3 className="mb-8" style={{ fontSize: '20px' }}>{event.title}</h3>
                <div className="event-meta text-muted text-small mb-16">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={14} /> {event.location}
                  </span>
                </div>
                <p className="text-muted mb-24">{event.description}</p>
                <a href="#" className="event-link text-primary" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  Register Now <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .flex-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .event-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px;
        }

        .event-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          min-width: 70px;
          text-align: center;
        }

        .date-num {
          font-size: 28px;
          font-weight: 800;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .date-month {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .event-details h3 {
          margin-top: -4px;
        }

        @media (max-width: 768px) {
          .flex-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .event-card {
            flex-direction: column;
          }
          .event-date {
            flex-direction: row;
            gap: 8px;
            width: auto;
            min-width: auto;
          }
          .date-num { font-size: 24px; }
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
