import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

/**
 * App.jsx
 * Main application component for the portfolio.
 * Handles theme switching and renders all modular sections.
 */
function App() {
  // Theme state: 'light' or 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // Update theme on change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app">
      {/* Header with navigation and theme toggle */}
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        {/* Hero: Introduction section */}
        <Hero />
        {/* About: Personal summary */}
        <About />
        {/* Skills: Technologies and tools */}
        <Skills />
        {/* Projects: Portfolio showcase */}
        <Projects />
        {/* Contact: Contact form and info */}
        <Contact />
      </main>
      {/* Footer: Social links and copyright */}
      <Footer />
    </div>
  );
}

export default App;
