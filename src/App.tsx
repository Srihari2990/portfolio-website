import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Importing Footer component
import { Element } from 'react-scroll';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navbar with dark/light mode toggle */}
      <Navbar />
      
      {/* Smooth scrolling sections using react-scroll */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      {/* Footer added here */}
      <Footer />
    </div>
  );
};

export default App;
