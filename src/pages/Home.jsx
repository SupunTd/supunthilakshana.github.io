import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="section-container" style={{ minHeight: 'calc(100vh - 160px)', display: 'flex', alignItems: 'center' }}>
      {/* Decorative Floating Particles */}
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Available for Opportunities
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Hi, I am <span className="gradient-text">Supun Thilakshana</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: '1.4rem', fontWeight: 500, lineHeight: 1.5 }}
        >
          A <strong style={{ color: 'var(--primary)' }}>Full-Stack &amp; Mobile Software Engineer</strong> dedicated to building high-performance offline-first mobile apps, secure payment systems, and seamless enterprise integrations.
        </motion.h2>

        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View My Work <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
