import React, { useState, useEffect } from 'react';

/**
 * Header.jsx
 * Sticky navigation bar with logo, section links, and theme toggle.
 * Modular and minimalist for easy updates.
 */
function Header({ theme, toggleTheme }) {
  // Track scroll state for header shadow
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section by ID
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}> {/* Sticky header */}
      <div className="container">
        {/* Logo/Brand */}
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
          <span>MyPortfolio</span>
        </div>
        {/* Navigation links */}
        <nav className="nav">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
        {/* Theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

export default Header;