import React, { useEffect, useRef } from 'react';

/**
 * About.jsx
 * Minimalist About section with personal summary and highlights.
 * Edit text and highlights as needed.
 */
function About() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          {/* About text */}
          <div className="about-text">
            <p>
              Hi! I'm Jane, a full-stack developer focused on building clean, user-centric web apps. I love solving problems with code and design.
            </p>
            <p>
              Outside of coding, I enjoy exploring new tech, contributing to open source, and sipping great coffee.
            </p>
          </div>
          {/* About image placeholder (replace src with your own image for production) */}
          <div className="about-image">
            <img src="https://placehold.co/300x300?text=About+Me" alt="About me placeholder" />
          </div>
        </div>
        {/* Highlights */}
        <div className="highlights">
          <div className="highlight-item">
            <h3>30+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="highlight-item">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="highlight-item">
            <h3>15+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
