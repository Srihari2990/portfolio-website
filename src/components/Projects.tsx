import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { VscFolder } from 'react-icons/vsc'; // For folder icons
import './Projects.css';

const projectsData = [
  {
    title: 'E-Commerce API Platform',
    description: 'An E-commerce API built with Java and Spring Boot to manage products, cart, and orders. The project includes CRUD operations, a Stripe payment integration, and authentication.',
    github: 'https://github.com/Srihari2990/ecommerce-api',
    techStack: ['Java', 'Spring Boot', 'MongoDB', 'Stripe API','Maven', 'Postman'],
  },
  {
    title: 'Expense Tracking Application',
    description: 'A backend service that allows users to track their personal or business expenses, categorize them, filters expenses by date range , sorts and generate summary reports.',
    github: 'https://github.com/Srihari2990/expense_tracker_finance',
    techStack: ['Java','Spring Boot','MySQL','Hibernate','REST API','Maven','Swagger'],
  },
  {
    title: 'Patient Appointment Scheduling System',
    description: 'A web application for patients to schedule, view, and cancel appointments with healthcare providers, featuring real-time slot updates and appointment confirmations. Built with a React frontend and a Spring Boot backend for seamless appointment management.',
    github: 'https://github.com/Srihari2990/appointment-scheduler-full-stack-project',
    techStack: ['React','JavaScript','Java','Spring Boot','MySQL','Spring Data JPA', 'HTML','CSS'],
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-header">
              <VscFolder className="folder-icon" />
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon" />
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
