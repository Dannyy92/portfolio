import React from 'react';
import './App.css';

// Footer section: Social links and copyright info.
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "🔗"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "🐦"
    },
    {
      name: "Email",
      url: "mailto:john@example.com",
      icon: "📧"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
          
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
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
