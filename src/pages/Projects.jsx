import React from 'react';
import projects from '../services/script';
import '../styles/Projects.css';

class Projects extends React.Component {

  renderImg = (src, name) => {
    return <img src={ src } alt={ name } />
  }

  render() {
    return (
      <section className="projects-sect">
        <h2 className="projects-title">My Projects</h2>
        <ul className="projects-list">
          {projects.map(({ id, name, link, src }) => (
            <a className="project-link" href={ link }>
              <li
                className="project-item"
                key={ id }
              >
                {src && <img className="project-img" src={ src } alt={ name } />}
                <p className="project-name">{name}</p>
              </li>
            </a>
          ))}
        </ul>
      </section>
    );
  };
}

export default Projects;
