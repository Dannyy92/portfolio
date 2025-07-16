import React, { useEffect, useRef } from 'react';
import './App.css';

// Skills section: List your technical and soft skills here.
function Skills({ darkMode }) {
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
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="skills fade-in" id="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>UI/UX Design</li>
        <li>Teamwork & Communication</li>
        {/* Add or remove skills as needed */}
      </ul>
    </section>
  );
}

export default Skills; 