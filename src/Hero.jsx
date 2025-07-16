import React, { useEffect, useRef } from 'react';
import './App.css';

// Hero section: Displays your name, tagline, and a call-to-action button.
// Edit the name, tagline, and button text as needed.
function Hero({ darkMode }) {
  // Ref for fade-in effect
  const sectionRef = useRef(null);

  useEffect(() => {
    // Add 'visible' class for fade-in on mount
    sectionRef.current.classList.add('visible');
  }, []);

  return (
    <section className="hero fade-in" ref={sectionRef}>
      <h1>Your Name</h1>
      <h2>Web Developer | Designer | Creator</h2>
      <p>Welcome to my portfolio! Explore my work and skills below.</p>
      <a href="#projects" className="cta-button">See My Projects</a>
    </section>
  );
}

export default Hero; 