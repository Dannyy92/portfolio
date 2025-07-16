import React, { useEffect, useRef, useState } from 'react';

/**
 * Contact.jsx
 * Minimalist contact section with info and a simple form.
 * Edit contact details and form logic as needed.
 */
function Contact() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);
  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., email service)
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          {/* Contact info */}
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
          {/* Contact form */}
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 
