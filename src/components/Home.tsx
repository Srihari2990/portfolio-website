import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Home.css';
import profileImage from '../assets/coding.jpeg';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-area">
          <h3>
            <span role="img" aria-label="hello">
              👋
            </span>{' '}
            Hello, I'm
          </h3>
          <h2>Srihari</h2>
          <p className="subtitle">
            Software Developer | Java | MERN Stack | AWS Certified Developer Associate |
          </p>
          <h4>GitHub Developer Program Member</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/srihari-gutthi-009372310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://github.com/Srihari2990" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github" />
            </a>
            <a href="https://www.instagram.com/hari.sayss/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
          </div>
          <a href="#projects" className="btn work-btn">
            View My Work
          </a>
        </div>
        {/* Replace profile image */}
        <motion.div className="profile-image-container" whileHover={{ scale: 1.05 }}>
          <img src={profileImage} alt="Profile" className="profile-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
