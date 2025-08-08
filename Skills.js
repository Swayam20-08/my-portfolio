import React from 'react';

const Skills = () => {
  const skills = [
    'HTML5 & CSS3',
    'JavaScript',
    'React.js (basics)',
    'Responsive Design',
    'C++',
    'Python'
  ];

  return (
    <section id="skills" className="section skills" tabIndex="0">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills; 