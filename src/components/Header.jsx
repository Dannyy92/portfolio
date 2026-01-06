import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LuArchive, LuMail, LuMoonStar, LuMousePointerClick, LuOrigami, LuSunMoon } from 'react-icons/lu';
import { FiX } from 'react-icons/fi';
import { LuAlignJustify, LuAlignRight, LuHouse, LuUser } from 'react-icons/lu';

/**
 * Header.jsx
 * Sticky navigation bar with logo, section links, and theme toggle.
 * Modular and minimalist for easy updates.
 * Now includes a hamburger menu for mobile (side drawer).
 */
function Header({ theme, toggleTheme }) {
  // Track scroll state for header shadow
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Section highlight logic
      const sections = [
        { id: 'hero', offset: 0 },
        { id: 'about', offset: 0 },
        { id: 'skills', offset: 0 },
        { id: 'projects', offset: 0 },
        { id: 'contact', offset: 0 },
      ];
      let found = 'hero';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            found = sections[i].id;
          }
        }
      }
      setCurrentSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section by ID
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu on link click
    setCurrentSection(sectionId);
  };

  // Close menu on overlay click or escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Determine if hover or menuOpen for icon state
  const showHoverIcon = hovered || menuOpen;

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}> {/* Sticky header */}
      <div className="container">
        {/* Logo/Brand */}
        <div className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
          <span className="logo-text"><LuOrigami/>MyPortfolio</span>
        </div>
        {/* Theme toggle button */}
        <div className="theme-toggle-container">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <LuSunMoon size={16} color="var(--icon-color)" /> : <LuMoonStar size={16} color="var(--icon-color)" />}  
          </button>
        </div>
        {/* Hamburger icon for menu */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuAlignRight
            size={28}
            className="hamburger-icon-default"
            color="var(--icon-color)"
            style={{ opacity: showHoverIcon ? 0 : 1 }}
          />
          <LuAlignJustify
            size={28}
            className="hamburger-icon-hover"
            color="var(--icon-color)"
            style={{ opacity: showHoverIcon ? 1 : 0 }}
          />
        </button>
      </div>
      {createPortal(
        <div className={`side-menu${menuOpen ? ' open' : ''}`}> 
        {/* Side drawer menu for all platforms */}
          <button className="close-menu" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <FiX size={28} color="var(--icon-color)" />
          </button>
          <nav className="side-nav">
            <button onClick={() => scrollToSection('hero')} className={currentSection === 'hero' ? 'active' : ''}><LuHouse size={20} style={{marginRight:8}}/>Home</button>
            <button onClick={() => scrollToSection('about')} className={currentSection === 'about' ? 'active' : ''}><LuUser size={20} style={{marginRight:8}}/>About</button>
            <button onClick={() => scrollToSection('skills')} className={currentSection === 'skills' ? 'active' : ''}><LuMousePointerClick size={20} style={{marginRight:8}}/>Skills</button>
            <button onClick={() => scrollToSection('projects')} className={currentSection === 'projects' ? 'active' : ''}><LuArchive size={20} style={{marginRight:8}}/>Projects</button>
            <button onClick={() => scrollToSection('contact')} className={currentSection === 'contact' ? 'active' : ''}><LuMail size={20} style={{marginRight:8}}/>Contact</button>
          </nav>
        </div>, 
      document.body)}
      {/* Overlay for side menu */}
      {/* {menuOpen && <div className="side-menu-overlay" onClick={() => setMenuOpen(false)}></div>} */}
    </header>
  );
}

export default Header;