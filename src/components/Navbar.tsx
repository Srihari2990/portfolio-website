import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="logo"> HARI </h1>

        {/* Navbar Links */}
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="navbar-right">
          <a 
            href="/Srihari_Developer5-2.pdf" 
            className="btn resume-btn" 
            target="_blank" 
            rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
