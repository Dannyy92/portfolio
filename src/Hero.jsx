import React, { useEffect, useRef } from 'react';
import './App.css';
import resume from './assets/Yeap Yi Hong_Resume_Updated.pdf';
import { LuChevronDown, LuChevronsDown } from 'react-icons/lu';

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
      <div className="hero-background">
        <div className='hero-shape hero-teal hero-opacity-50 hero-blur'></div>
        <div className='hero-shape hero-primary hero-opacity-50 hero-blur'></div>
      </div>
      <div className="container hero-content">
        {/* Hero text */}
        <div className="hero-text">
          <h1>Yeap Yi Hong</h1>
          <h2>Digital Media Technology Graduate</h2>
          <p>Passionate about developing and designing</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            {/* Button to view PDF resume (replace href with your actual PDF file) */}
            <a href={resume} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View My Resume (PDF)</a>
          </div>
        </div>
        <div className="hero-scroll-down"><LuChevronsDown size={30}/></div>
        {/* Removed profile image for a cleaner hero section */}
      </div>
    </section>
  );
}

export default Hero; 