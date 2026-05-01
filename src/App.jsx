import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import TransparencyPage from './pages/TransparencyPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    let title = 'Hope Rise Foundation | Empowering Communities';
    
    if (path === '/about') title = 'About Us | Hope Rise Foundation';
    if (path === '/programs') title = 'Our Programs | Hope Rise Foundation';
    if (path === '/impact') title = 'Impact Stories | Hope Rise Foundation';
    if (path === '/donate') title = 'Donate Now | Hope Rise Foundation';
    if (path === '/volunteer') title = 'Join as Volunteer | Hope Rise Foundation';
    if (path === '/blog') title = 'Latest News | Hope Rise Foundation';
    if (path === '/contact') title = 'Contact Us | Hope Rise Foundation';
    if (path === '/privacy') title = 'Privacy Policy | Hope Rise Foundation';
    if (path === '/terms') title = 'Terms of Use | Hope Rise Foundation';
    if (path === '/transparency') title = 'Transparency & Accountability | Hope Rise Foundation';

    document.title = title;
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <TitleManager />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
