import React, { useEffect, useRef } from 'react';

/**
 * About.jsx
 * Minimalist About section for a fresh graduate portfolio.
 * Edit text and image as needed.
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
              Hi! I'm Jane, a fresh graduate passionate about web development and design. I enjoy learning new technologies and building projects that solve real-world problems.
            </p>
            <p>
              I'm eager to start my career, contribute to exciting teams, and grow as a developer.
            </p>
          </div>
          {/* About image placeholder (replace src with your own image for production) */}
          <div className="about-image">
            <img src="https://placehold.co/300x300?text=About+Me" alt="About me placeholder" />
          </div>
        </div>
        {/* Highlights removed for a more relevant fresh graduate portfolio */}
      </div>
    </section>
  );
}

export default About; 
