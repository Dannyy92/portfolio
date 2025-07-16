import React, { useEffect, useRef } from 'react';

/**
 * Contact.jsx
 * Minimalist contact section with info only (no form).
 * Edit contact details as needed.
 */
function Contact() {
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
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          {/* Contact info only, no form */}
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate!</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:jane@example.com" className="contact-value">jane@example.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+1234567890" className="contact-value">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
