import React from 'react';
import './App.css';

// Footer section: Social links and copyright info.
function Footer({ darkMode }) {
  return (
    <footer className="footer">
      <div className="social-links">
        {/* Add your social media links here */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add more links as needed */}
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 