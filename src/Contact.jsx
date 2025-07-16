import React, { useEffect, useRef } from 'react';
import './App.css';

// Contact section: Add your email or a contact form. Edit as needed.
function Contact({ darkMode }) {
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
    <section className="contact fade-in" id="contact" ref={sectionRef}>
      <h2>Contact</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      <a href="mailto:your.email@example.com" className="contact-email">your.email@example.com</a>
    </section>
  );
}

export default Contact; 