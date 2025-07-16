import React, { useEffect, useRef } from 'react';
import './App.css';

// Projects section: Showcase your best work. Add more projects as needed.
function Projects({ darkMode }) {
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
    <section className="projects fade-in" id="projects" ref={sectionRef}>
      <h2>Projects</h2>
      <div className="project-list">
        {/* Example project card. Duplicate and edit for more projects. */}
        <div className="project-card">
          <img src="https://via.placeholder.com/300x200" alt="Project Title" className="project-image" />
          <h3>Project Title</h3>
          <p>Short description of the project. What technologies did you use? What problem did it solve?</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects; 