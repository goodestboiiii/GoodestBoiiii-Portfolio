import React from 'react';
import './Projects.css';
import proj2 from '../img/project2.png';
import proj3 from '../img/project3.png';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Title */}
        <div className="project-title">
          <h1>Projects</h1>
          <hr className="divider" />
        </div>

        <div className="projects-top">
          <div className="project-card">
            <a href= "https://www.figma.com/design/Y9HeXRHVEW5sb3id6oyqHt/Test-V.-Create-a-Prototype-in-Figma?node-id=0-1&t=ZCRqz88CoI5SQaXq-1" target = "_blank"><img src={proj2} alt="Project 2" className="project-img" /></a>
            <div className="project-tags">
              <span>UI/UX Design</span>
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* Projects bottom row (1 column) */}
        <div className="projects-bottom">
          <div className="project-card project-large">
            <a href= "https://www.figma.com/design/6LrCjA3aBRdR1nSk6yE1gq/Techlympic-Contest?node-id=0-1&t=EsNGCnHOd0OkZZJb-1" target="_blank" ><img src={proj3} alt="Project 3" className="project-img" /></a>
            <div className="project-tags">
              <span>UI/UX Design</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
