import React, { useEffect, useRef } from 'react';
import './App.css';

// About section: Brief introduction and photo (replace with your own info and image).
function About({ darkMode }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="about fade-in" id="about" ref={sectionRef}>
      <h2>About Me</h2>
      <div className="about-content">
        {/* Replace the src with your own photo in the public or assets folder */}
        <img src="https://via.placeholder.com/150" alt="Your Name" className="about-photo" />
        <div>
          <p>
            Hello! I'm Your Name, a passionate web developer with experience in building modern, responsive websites and applications. I love turning ideas into reality using code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; 