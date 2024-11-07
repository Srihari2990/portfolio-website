import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>sriharigt40@gmail.com</p>
        </div>
        <div className="footer-middle">
          <p>This Website was made with</p>
          <SiReact size={24} className="react-icon" />
        </div>
        <div className="footer-right">
          <a href="https://github.com/Srihari2990" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} className="social-icon github" />
          </a>
          <a href="https://www.linkedin.com/in/srihari-gutthi-009372310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/hari.sayss/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={30} className="social-icon instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
