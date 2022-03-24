import React from 'react';
import { projectLink, projectText, projectId } from '../services/script';
import '../styles/Projects.css';

class Projects extends React.Component {

  render() {
    return (
      <section className="projects-sect">
        <h2 className="projects-title">My Projects</h2>
        <ul className="projects-list">
          {projectLink.map((project, index) => (
            <a className="project-link" href={ project }>
              <li className="project-item" key={ projectId[index] }>
                  {projectText[index]}
              </li>
            </a>
          ))}
        </ul>
      </section>
    );
  };
}

export default Projects;
