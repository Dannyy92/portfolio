import React from 'react';
import './App.css';

/**
 * Footer.jsx
 * Minimalist footer with social links and copyright.
 * Edit social links and name as needed.
 */
function Footer() {
  const currentYear = new Date().getFullYear();
  // Social links (edit as needed)
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/dannyy92', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yihong0192a', icon: '💼' },
    { name: 'Whatsapp', url: 'https://wa.me/60125442898', icon: '📱' },
    { name: 'Email', url: 'dannyyeap922@gmail.com', icon: '📧' },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="footer-text">
            <p>&copy; {currentYear} Yi Hong. All rights reserved.</p>
          </div>
          {/* Social links */}
          <div className="social-links">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
