import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Mail, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import PageHero from '../components/PageHero';

import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';
import heroImg from '../assets/images/hero.png';

import blogHeroImg from '../assets/images/blog_hero.png';

const BlogPage = () => {
  const posts = [
    {
      title: 'Digital Literacy: Changing the Rural Landscape',
      excerpt: 'How tablets and internet access are transforming the way children learn in remote Telangana villages.',
      date: 'April 25, 2024',
      author: 'Priya Sharma',
      tag: 'Education',
      img: eduImg
    },
    {
      title: 'Mobile Health Camps: Reaching the Unreached',
      excerpt: 'Our mobile medical vans have served over 5,000 patients in the last quarter. Here are some impact stories.',
      date: 'April 12, 2024',
      author: 'Dr. Ramesh Kumar',
      tag: 'Healthcare',
      img: healthImg
    },
    {
      title: 'Community Water Projects: A Success Story',
      excerpt: 'The villagers of Nalgonda now have access to fluoride-free water thanks to our latest RO plant installation.',
      date: 'March 28, 2024',
      author: 'Anil Reddy',
      tag: 'Sustainability',
      img: waterImg
    },
    {
      title: 'Volunteer Spotlight: Making a Difference',
      excerpt: 'Meet our volunteer of the month, Meena, who has dedicated over 100 hours to teaching children.',
      date: 'March 15, 2024',
      author: 'Staff',
      tag: 'Community',
      img: heroImg
    }
  ];

  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-page"
    >
      <PageHero 
        title="Latest News & Stories"
        subtitle="Stay updated with our on-ground activities, success stories, and upcoming campaigns."
        bgImage={blogHeroImg}
        showCTA={false}
      />

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="blog-card glass-card">
                <div className="blog-img">
                  <img src={post.img} alt={post.title} />
                  <span className="blog-tag"><Tag size={14} /> {post.tag}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><User size={14} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="read-more">Read Full Story <ArrowRight size={16} /></a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter-compact-section">
        <div className="container">
          <div className="compact-newsletter-box glass-card">
            {subscribed ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="success-inline">
                <CheckCircle2 size={20} color="var(--color-success)" />
                <span>Success! You're subscribed to our impact updates.</span>
                <button className="btn-text-reset" onClick={() => setSubscribed(false)}>Reset</button>
              </motion.div>
            ) : (
              <div className="newsletter-flex">
                <div className="newsletter-text-side">
                  <h3>Stay Impactful</h3>
                  <p>Get monthly updates directly in your inbox.</p>
                </div>
                <form className="newsletter-form-compact" onSubmit={handleSubscribe}>
                  <div className="input-wrap-compact">
                    <Mail size={16} className="icon-compact" />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button className="btn-compact" type="submit">Subscribe</button>
                </form>
              </div>
            )}
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
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 3rem;
        }

        .blog-card {
          overflow: hidden;
          transition: var(--transition);
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
        }

        .blog-img {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .blog-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 0;
        }

        .blog-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--color-primary);
          color: white;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .blog-content {
          padding: 2rem;
        }

        .blog-meta {
          display: flex;
          gap: 1.5rem;
          color: var(--color-text-light);
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .blog-content p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .newsletter-compact-section {
          padding: 60px 0;
          background: #fafafa;
        }

        .compact-newsletter-box {
          padding: 30px 40px;
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
        }

        .newsletter-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .newsletter-text-side h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 4px;
          color: #1e293b;
        }

        .newsletter-text-side p {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .newsletter-form-compact {
          display: flex;
          gap: 12px;
          flex: 1;
          max-width: 450px;
        }

        .input-wrap-compact {
          flex: 1;
          position: relative;
        }

        .icon-compact {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .input-wrap-compact input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          background: #f8fafc;
        }

        .btn-compact {
          padding: 0 24px;
          background: var(--color-primary);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-compact:hover {
          background: #15803d;
          transform: translateY(-1px);
        }

        .success-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #1e293b;
          font-weight: 600;
          font-size: 14px;
        }

        .btn-text-reset {
          background: none;
          border: none;
          color: var(--color-primary);
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
          margin-left: 8px;
        }

        @media (max-width: 1024px) {
          .newsletter-flex { flex-direction: column; text-align: center; gap: 24px; }
          .newsletter-form-compact { width: 100%; }
        }

        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
          .compact-newsletter-box { padding: 30px 20px; }
          .newsletter-form-compact { flex-direction: column; }
          .btn-compact { padding: 14px; }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogPage;
