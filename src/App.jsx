import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for user preference
    return localStorage.getItem('darkMode') === 'true';
  });

  // Update the root class and localStorage when darkMode changes
  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      {/* Dark mode toggle button, fixed in the top right */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? '🌙 Dark' : '☀️ Light'}
      </button>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
