import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about" tabIndex="0">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate 3rd-year Information Technology student at the Institute of Advanced Research, 
            with a strong interest in web development and modern technologies. I love creating beautiful, 
            functional, and user-friendly digital experiences that solve real-world problems.
          </p>
          <p>
            Currently pursuing my B.Tech degree, I spend my time learning new technologies, building projects, 
            and contributing to the developer community. I believe in writing clean, maintainable code and 
            staying up-to-date with the latest industry trends to prepare myself for a successful career in tech.
          </p>
          <p>
            When I'm not coding or studying, you'll find me exploring new technologies, working on personal projects, 
            or participating in coding competitions and hackathons to enhance my skills and network with fellow developers.
          </p>
        </div>

        <div className="education">
          <h3>Education</h3>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h4>B.Tech in Information Technology</h4>
              <p>Institute of Advanced Research</p>
              <span className="education-year">2021 - 2025 (Expected)</span>
              <span className="education-status">Currently in 3rd Year</span>
            </div>
          </div>
        </div>

        <div className="interests">
          <h3>What I Love</h3>
          <div className="interests-grid">
            <div className="interest-item">
              <span className="interest-icon">💻</span>
              <span>Web Development</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🎨</span>
              <span>UI/UX Design</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🚀</span>
              <span>Learning New Tech</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🔧</span>
              <span>Problem Solving</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">📚</span>
              <span>Continuous Learning</span>
            </div>
            <div className="interest-item">
              <span className="interest-icon">🤝</span>
              <span>Team Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 