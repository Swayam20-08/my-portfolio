import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mini E-Commerce Platform',
      description: 'A fully responsive and modern mini e-commerce web application built using React.js, Tailwind CSS, and Zustand for state management. Features include product listings, shopping cart functionality, user authentication, and a complete checkout process.',
      technologies: ['React.js', 'Tailwind CSS', 'Zustand', 'JavaScript'],
      link: 'https://github.com/Swayam20-08/mini-e-commerce',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Ferrari Website Redesign',
      description: 'A responsive redesign of the Ferrari car company website with modern UI/UX principles. Features smooth animations, interactive elements, and a mobile-first approach.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      link: 'https://swayamgoradiya.github.io/Ferrari-Website/',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio website built with React.js featuring smooth animations, professional design, and contact form integration.',
      technologies: ['React.js', 'CSS3', 'JavaScript', 'Formspree'],
      link: '#',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity app for managing daily tasks with features like task creation, categorization, progress tracking, and deadline reminders.',
      technologies: ['React.js', 'LocalStorage', 'CSS3', 'JavaScript'],
      link: '#',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="section projects" tabIndex="0">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects; 