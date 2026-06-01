import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faGlobe, faServer, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Mobile', 'Full-Stack'];

  const projectsData = [
    {
      title: 'Lanwa-iForce Mobile SFA App',
      description: 'A high-performance offline-first Sales Force Automation (SFA) mobile application for sales agents. Employs a local SQLite cache for complete offline catalogs, distributor listings, and ledger balances, automatically syncing data changes (orders, competitor tracking, payments) via background channels once online.',
      icon: faMobileScreen,
      category: 'Mobile',
      tags: ['Flutter', 'Dart', 'SQLite', 'Background Sync', 'Android'],
      github: 'https://github.com/supuntd',
      live: '#'
    },
    {
      title: 'ERP Sync & Pricing Engine',
      description: 'A secure enterprise-grade synchronization gateway integrating local system databases with RightERP. Features automated CSV/Excel uploads processing thousands of pricing records within secure MongoDB transaction blocks to ensure atomic updates and prevent database partial-state corruption.',
      icon: faServer,
      category: 'Full-Stack',
      tags: ['Node.js', 'Express', 'MongoDB Transactions', 'RightERP Sync', 'Jest'],
      github: 'https://github.com/supuntd',
      live: '#'
    },
    {
      title: 'Distributor Portal & Payments',
      description: 'An elegant web platform for managing payment limits and terms. Implements complex LiveSearch dropdown controls, responsive ledger dashboards, and strict type-validation middlewares on the API layer, eliminating BSON and model casting errors entirely.',
      icon: faGlobe,
      category: 'Full-Stack',
      tags: ['React', 'CSS Glassmorphism', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/supuntd',
      live: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of major enterprise projects and custom mobile applications engineered with a strong focus on offline capability and high reliability.
        </p>
      </div>

      {/* Categories Filter Controls */}
      <div className="filter-container">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects with Animation */}
      <motion.div 
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-card project-card"
            >
              <div className="project-card-header">
                <FontAwesomeIcon icon={project.icon} className="project-card-icon" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" title="View Source Code">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
