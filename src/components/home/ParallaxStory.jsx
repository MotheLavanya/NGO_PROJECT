import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import rameshImg from '../../assets/images/story_ramesh.png';
import meenaImg from '../../assets/images/story_meena.png';
import anilImg from '../../assets/images/story_anil.png';

const stories = [
  {
    name: "Ramesh's Journey",
    text: "Two years ago, Ramesh couldn't afford school and worked to support his family. Today, through our foundation, he is a top student with a bright future ahead.",
    image: rameshImg,
    color: "#16A34A"
  },
  {
    name: "Meena's Education",
    text: "Meena once sat outside the school gates, wishing she could join. Now, she is the lead of our girl-child education initiative in her village.",
    image: meenaImg,
    color: "#2563EB"
  },
  {
    name: "Farmer Anil's RO Plant",
    text: "Anil and his village had no clean water for decades. The RO plant we installed has reduced water-borne diseases by 90% in just one year.",
    image: anilImg,
    color: "#F97316"
  }
];

const ParallaxStory = () => {
  return (
    <section className="stories-section">
      <div className="container">
        
        <div className="text-center mb-64">
          <span className="sub-title">Success Stories</span>
          <h2 className="section-title">Lives Transformed by You</h2>
        </div>

        <div className="stories-grid">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              className="story-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Text Side (Always Left) */}
              <div className="story-text-col">
                <div className="story-tag" style={{ backgroundColor: `${story.color}15`, color: story.color }}>
                  {story.name}
                </div>
                <p className="story-quote">
                  "{story.text}"
                </p>
                <a href="/impact" className="story-link">
                  Read Full Story <ArrowRight size={16} />
                </a>
              </div>

              {/* Image Side (Always Right) */}
              <div className="story-image-col">
                <div className="story-img-container">
                  <img src={story.image} alt={story.name} className="story-img" />
                  <div className="story-img-accent" style={{ backgroundColor: story.color }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .stories-section {
          padding: 80px 0;
          background-color: var(--color-bg-subtle);
        }

        .stories-grid {
          display: flex;
          flex-direction: column;
          gap: 60px; /* Compact spacing between stories */
          max-width: 900px;
          margin: 0 auto;
        }

        .story-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 32px;
          background: white;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
        }

        .story-tag {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-quote {
          font-size: 18px;
          color: var(--color-text-main);
          line-height: 1.6;
          margin-bottom: 24px;
          font-style: italic;
        }

        .story-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-heading);
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
        }

        .story-link:hover {
          color: var(--color-primary);
          gap: 12px;
        }

        .story-image-col {
          position: relative;
        }

        .story-img-container {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 16px;
          overflow: hidden;
        }

        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-img-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 8px;
          border-radius: 4px 0 0 0;
        }

        @media (max-width: 768px) {
          .story-row {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }
          .story-quote { font-size: 16px; }
        }
      `}</style>
    </section>
  );
};

export default ParallaxStory;
