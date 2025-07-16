import React, { useEffect, useRef, useState } from 'react';

/**
 * Projects.jsx
 * Minimalist project showcase with category filters and fade-in animation.
 * Edit project data as needed.
 */
function Projects() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);
  // Filter state
  const [filter, setFilter] = useState('all');

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

  // Project data (edit as needed)
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      image: 'https://placehold.co/400x250?text=Project+1', // Placeholder image
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'React-based productivity app with drag-and-drop functionality',
      image: 'https://placehold.co/400x250?text=Project+2', // Placeholder image
      technologies: ['React', 'TypeScript', 'CSS'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather API',
      description: 'RESTful API for weather data with real-time updates',
      image: 'https://placehold.co/400x250?text=Project+3', // Placeholder image
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  // Filtered projects by category
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2>Featured Projects</h2>
        {/* Project category filters */}
        <div className="project-filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'frontend' ? 'active' : ''} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={filter === 'backend' ? 'active' : ''} onClick={() => setFilter('backend')}>Backend</button>
          <button className={filter === 'fullstack' ? 'active' : ''} onClick={() => setFilter('fullstack')}>Full Stack</button>
        </div>
        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {/* Project image placeholder (replace src with your own image for production) */}
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 
