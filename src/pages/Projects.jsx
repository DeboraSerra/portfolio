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
        <h3 className="projects-module">Fundaments</h3>
        <section className="projects-list">
          {projects.map(({ id, module, name, link, src }) => {
            if (module === "fundaments") {
              return (
                <a className="project-link" href={link}>
                  <li className="project-item" key={id}>
                    {src && (
                      <img className="project-img" src={src} alt={name} />
                    )}
                    <p className="project-name">{name}</p>
                  </li>
                </a>
              );
            }
          })}
        </section>
        <h3 className="projects-module">Font End Development</h3>
        <section className="projects-list">
          {projects.map(({ id, module, name, link, src }) => {
            if (module === "frontEnd") {
              return (
                <a className="project-link" href={link}>
                  <li className="project-item" key={id}>
                    {src && (
                      <img className="project-img" src={src} alt={name} />
                    )}
                    <p className="project-name">{name}</p>
                  </li>
                </a>
              );
            }
          })}
        </section>
        <h3 className="projects-module">Personal Projects</h3>
        <section className="projects-list">
          {projects.map(({ id, module, name, link, src }) => {
            if (module === "personal") {
              return (
                <a className="project-link" href={link}>
                  <li className="project-item" key={id}>
                    {src && (
                      <img className="project-img" src={src} alt={name} />
                    )}
                    <p className="project-name">{name}</p>
                  </li>
                </a>
              );
            }
          })}
        </section>
      </section>
    );
  };
}

export default Projects;
