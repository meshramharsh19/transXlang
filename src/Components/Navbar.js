// src/Components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      document.body.classList.toggle('dark-mode', isDark);
      document.body.classList.toggle('light-mode', !isDark);
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  return (
    <header>
      <nav>
        <a href="/" className="logo">Trans<span className="accent">X</span>Lang</a>
        <ul>
          <li><a href="/">Text to Speech</a></li>
          <li><a href="/">Translate Video Language</a></li>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Education</a></li>
          <li><a href="/">About</a></li>
        </ul>
        <div className="nav-buttons">
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
          <button className="try-it-button">Try It!</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
