import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faMobileScreen, 
  faServer, 
  faDatabase, 
  faCalendarCheck, 
  faCheckCircle, 
  faBolt 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const techStack = [
    {
      category: 'Mobile Development',
      icon: faMobileScreen,
      skills: ['Flutter', 'Dart', 'React Native', 'SQLite local caching', 'Offline Sync Engine']
    },
    {
      category: 'Backend & APIs',
      icon: faServer,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'ERP Integrations (RightERP)', 'JSON Web Tokens']
    },
    {
      category: 'Frontend Web',
      icon: faCode,
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Databases & Tools',
      icon: faDatabase,
      skills: ['MongoDB (Replica Sets, Transactions)', 'SQL / SQLite', 'Git & GitHub', 'Webpack / Gradle']
    }
  ];

  return (
    <motion.div 
      className="section-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="section-header">
        <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>
          Passionate developer crafting resilient, high-performance solutions from backend schemas to pixel-perfect mobile animations.
        </motion.p>
      </div>

      <div className="about-grid">
        {/* Left Side: Bio and Stats */}
        <motion.div className="about-text" variants={itemVariants}>
          <h3>Engineering Reliable Systems</h3>
          <p>
            I am a Software Engineer specialized in designing and developing highly reliable full-stack and mobile applications. My passion lies in solving complex problems—whether that involves designing rock-solid offline synchronization engines for mobile apps in the field or building secure backend pricing and payment integrations connecting straight to ERP systems.
          </p>
          <p>
            I am driven by code quality, defensive programming, and optimal user experiences. I don't just build apps; I ensure they perform flawlessly in network-challenged environments, scale gracefully, and process critical operations (like transaction blocks and customized pricing uploads) without room for error.
          </p>

          <div className="about-info-cards">
            <div className="info-card">
              <FontAwesomeIcon icon={faCalendarCheck} className="info-card-icon" />
              <div className="info-card-value">3+</div>
              <div className="info-card-label">Years Experience</div>
            </div>
            <div className="info-card">
              <FontAwesomeIcon icon={faCheckCircle} className="info-card-icon" />
              <div className="info-card-value">15+</div>
              <div className="info-card-label">Projects Completed</div>
            </div>
            <div className="info-card">
              <FontAwesomeIcon icon={faBolt} className="info-card-icon" />
              <div className="info-card-value">100%</div>
              <div className="info-card-label">Offline-First Core</div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Tech Stack */}
        <motion.div className="tech-stack-container" variants={itemVariants}>
          <h3>My Tech Stack</h3>
          {techStack.map((stack, idx) => (
            <div className="tech-category" key={idx}>
              <h4>
                <FontAwesomeIcon icon={stack.icon} style={{ marginRight: '8px', color: 'var(--primary)' }} />
                {stack.category}
              </h4>
              <div className="tech-pills">
                {stack.skills.map((skill, sIdx) => (
                  <span className="tech-pill" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
