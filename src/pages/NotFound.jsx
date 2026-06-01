import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="notfound-code">404</h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Lost in Space?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px' }}>
          The page you are looking for doesn't exist or has been moved to another coordinate.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
