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
        <h2>Let's Connect!</h2>
        <div className="contact-content">
          {/* Contact info only, no form */}
          <div className="contact-info">
            <h3>Open to new opportunities!</h3>
            <p>I’m excited to start my career and open to new opportunities. Feel free to reach out for collaborations, job offers, or just to connect!</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:dannyyeap922@gmail.com" className="contact-value">dannyyeap922@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+60125442898" className="contact-value">+60 (12) 544-2898</a>
                </div>
              </div>
              {/* You can add another relevant contact method here if desired */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
