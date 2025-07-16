import React, { useEffect, useRef } from 'react';
import './App.css';

/**
 * Hero.jsx
 * Modern hero section with name, tagline, and call-to-action.
 * Edit name, tagline, and button as needed.
 */
function Hero() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.classList.add('fade-in');
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="container hero-content">
        {/* Hero text */}
        <div className="hero-text">
          <h1>Jane Doe</h1>
          <h2>Building beautiful, functional web experiences</h2>
          <p>Modern full-stack developer passionate about design, code, and user experience.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            {/* Button to view PDF resume (replace href with your actual PDF file) */}
            <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Resume (PDF)</a>
          </div>
        </div>
        {/* Removed profile image for a cleaner hero section */}
      </div>
    </section>
  );
}

export default Hero; 