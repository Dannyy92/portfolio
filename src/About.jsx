import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm John, a passionate full-stack developer with 3+ years 
              of experience creating digital solutions. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/300x300" alt="About me" />
          </div>
        </div>
        
        <div className="highlights">
          <div className="highlight-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="highlight-item">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="highlight-item">
            <h3>20+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
