import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

import eduImg from '../assets/images/education.png';
import healthImg from '../assets/images/healthcare.png';
import waterImg from '../assets/images/water.png';
import heroImg from '../assets/images/hero.png';

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
      <section className="page-header" style={{ background: 'var(--color-primary-soft)' }}>
        <div className="container">
          <h1 className="header-title">Latest News & Stories</h1>
          <p className="header-subtitle">Stay updated with our activities and stories from the field.</p>
        </div>
      </section>

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

      <section className="section newsletter-section" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="newsletter-box glass-card text-center">
            {subscribed ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <CheckCircle size={48} color="var(--color-success)" style={{ margin: '0 auto 1.5rem' }} />
                <h2>You're Subscribed!</h2>
                <p>Thank you for joining our community. You'll receive our next update soon.</p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubscribed(false)}>Subscribe Another Email</button>
              </motion.div>
            ) : (
              <>
                <h2>Subscribe to Our Newsletter</h2>
                <p className="mb-2">Get monthly updates on our impact and stories from the field directly in your inbox.</p>
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="yourname@example.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </form>
              </>
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
          height: 250px;
        }

        .blog-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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

        .newsletter-box {
          padding: 4rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
        }

        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr; }
          .newsletter-form { flex-direction: column; }
          .newsletter-box { padding: 2rem; }
        }
      `}</style>
    </motion.div>
  );
};

export default BlogPage;
