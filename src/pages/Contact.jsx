import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard server/API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">Let's Collaborate</h2>
        <p className="section-subtitle">
          Have an exciting project, integration, or SFA development opportunity? Let's connect and build something extraordinary!
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Information */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Connect Directly</h3>
          <p>
            Whether you want to discuss enterprise API connections, local SQLite state models, Flutter application designs, or just chat about high-reliability coding patterns—feel free to drop a line!
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-method-details">
                <h4>Email</h4>
                <a href="mailto:supunthilakshana@example.com">supunthilakshana@example.com</a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-method-details">
                <h4>Location</h4>
                <span>Sri Lanka (Available for Remote Work Globally)</span>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="contact-method-details">
                <h4>GitHub</h4>
                <a href="https://github.com/supuntd" target="_blank" rel="noreferrer">github.com/supuntd</a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="contact-method-details">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/supun-thilakshana</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {submitSuccess ? (
            <div className="form-success-msg">
              <h4>Awesome! Your message has been sent.</h4>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Thank you for reaching out, Supun will get back to you shortly!
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className="form-input"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
