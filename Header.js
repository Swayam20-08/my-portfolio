import React, { useState, useEffect } from 'react';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Swayam";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero" tabIndex="0">
      <div className="hero-content">
        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
              <span className="highlight">Student Developer</span>
            </h1>
            <p className="hero-subtitle">Passionate about Web Development & Learning New Technologies</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">3rd</span>
                <span className="stat-label">Year Student</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-container">
              <img 
                src="/profile-photo.jpg" 
                alt="Swayam Goradiya" 
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="nav-list">
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 