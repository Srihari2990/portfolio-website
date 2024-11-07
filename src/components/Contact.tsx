import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons
import * as emailjs from 'emailjs-com'; // Explicitly import emailjs
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    (emailjs as any) // Cast emailjs as any to bypass TypeScript errors
      .send(
        'service_4m7qqaa', // EmailJS service ID
        'template_xgirysj', // EmailJS template ID
        formData,
        '5HhoS-f6001nVIsCw' // Replace with your EmailJS user ID
      )
      .then(
        (result: any) => {
          console.log('Email sent successfully', result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error: any) => {
          console.log('Error sending email', error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Contact</h1>
      
      <div className="contact-info">
        {/* Email Button */}
        <a href="mailto:sriharigt40@gmail.com" className="contact-btn">
          <FaEnvelope className="contact-icon" />
          <p>sriharigt40@gmail.com</p>
        </a>
        
        {/* Phone Button */}
        <a href="tel:+16823471827" className="contact-btn">
          <FaPhoneAlt className="contact-icon" />
          <p>+16823471827</p>
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/Srihari2990" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon github" />
        </a>
        <a href="https://www.linkedin.com/in/srihari-gutthi-009372310/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a href="https://www.instagram.com/hari.sayss/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon instagram" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
