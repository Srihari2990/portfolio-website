import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import {
  FaPython, FaJs, FaReact, FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaJava, FaGithub
} from 'react-icons/fa';
import { SiSpringboot, SiSpring, SiPostman, SiOracle, SiNextdotjs, SiFirebase, SiMongodb, SiMysql, SiTypescript, SiGit } from 'react-icons/si';
import profileImage from '../assets/digital-passport.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi there! I'm Srihari, a highly motivated Software Developer with a passion for Full Stack Development and solving complex coding challenges. I specialize in building scalable Web, API, and Backend applications and enjoy contributing my skills to the tech industry.
          </p>
          <p>
            Let's connect and explore the possibilities together! 🚀
          </p>
          <h3>Here are my main skills:</h3>
          <div className="skills-icons">
            {/* Skills Logos with Original Colors */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaJava className="skill-icon" style={{ color: '#007396' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiSpringboot className="skill-icon" style={{ color: '#6DB33F' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiSpring className="skill-icon" style={{ color: '#6DB33F' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaPython className="skill-icon" style={{ color: '#306998' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaJs className="skill-icon" style={{ color: '#F7DF1E' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaHtml5 className="skill-icon" style={{ color: '#E34F26' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaCss3 className="skill-icon" style={{ color: '#1572B6' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaBootstrap className="skill-icon" style={{ color: '#7952B3' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaNodeJs className="skill-icon" style={{ color: '#68A063' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiPostman className="skill-icon" style={{ color: '#FF6C37' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiOracle className="skill-icon" style={{ color: '#F80000' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiNextdotjs className="skill-icon" style={{ color: 'white' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiFirebase className="skill-icon" style={{ color: '#FFCA28' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiMongodb className="skill-icon" style={{ color: '#47A248' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiMysql className="skill-icon" style={{ color: '#4479A1' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiTypescript className="skill-icon" style={{ color: '#3178C6' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <SiGit className="skill-icon" style={{ color: '#F05032' }} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaGithub className="skill-icon" style={{ color: 'white' }} />
            </motion.div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Srihari" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
