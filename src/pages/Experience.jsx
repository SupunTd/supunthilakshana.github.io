import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: 'Jan 2024 - Present',
      role: 'Lead Full-Stack & Mobile Engineer',
      company: 'Lanwa-iForce Ecosystem (Contract)',
      details: [
        'Designed and delivered a premium, high-performance offline-first Sales Force Automation (SFA) Flutter mobile application featuring automatic data synchronization.',
        'Engineered local SQLite caching systems enabling sales agents to run smooth, fast product searches, competitive analysis logs, and customer payment logs completely offline.',
        'Rebuilt the backend pricing upload and distributor pricing mapping layers in Node.js, safeguarding bulk database changes through robust MongoDB transactions to eliminate partial database errors.',
        'Developed robust communication gateways to interface with enterprise ERP layers (RightERP), handling cast validations to prevent BSON/cast exceptions.'
      ]
    },
    {
      date: 'Jun 2022 - Dec 2023',
      role: 'Full-Stack Developer',
      company: 'Independent Contracts & Freelance',
      details: [
        'Crafted customized web and mobile solutions using Flutter, React, Node.js, and MongoDB.',
        'Implemented secure RESTful API controllers with token authorization protocols and data filters.',
        'Developed responsive client portals with dynamic tables, searchable interfaces, and fluid user interactions.',
        'Employed Git for version control and automated release cycles, solving Gradle build conflicts and build environments.'
      ]
    }
  ];

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">My Professional Journey</h2>
        <p className="section-subtitle">
          Demonstrated history of building dependable systems, resolving severe database integrity concerns, and crafting outstanding user interfaces.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, idx) => (
          <motion.div 
            className="timeline-item" 
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <ul className="timeline-details">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
