import React, { useEffect, useRef } from 'react';
import profile from './assets/profile.jpg';

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
        <h2 className="about-title">Who am I?</h2>
        <div className="about-content">
          {/* About text */}
          <div className="about-text">
            <div className='about-text-p1'>
              <p>Hi! I'm Yi Hong, a Digital Media Technology graduate from Xiamen University Malaysia, passionate about game developments, designs, 3D modeling, and animation.</p>
            </div>
            <div className='about-text-p2'>
              <p>I enjoy learning new technologies and building projects that blend creativity with technical skills by utilizing industry-standard tools.</p>
            </div>
            <div className='about-text-p3'>
              <p>I'm motivated, adaptable, and always ready to learn—committed to supporting dynamic projects and growing as a professional in the digital media field.</p>
            </div>
          </div>
          {/* About image placeholder (replace src with your own image for production) */}
          <div className="about-image">
            <img src={profile} alt="Profile" />
          </div>
        </div>
        {/* Highlights removed for a more relevant fresh graduate portfolio */}
      </div>
    </section>
  );
}

export default About; 
