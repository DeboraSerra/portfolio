import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import projects from '../services/script';
import '../styles/Projects.css';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    }
  }

  nextImg = () => {
    const { index } = this.state;
    this.setState((prevSt) => ({
      index: index === projects.length - 1 ? 0 : prevSt.index + 1,
    }))
  }

  prevImg = () => {
    const { index } = this.state;
    this.setState((prevSt) => ({
      index: index === 0 ? projects.length - 1 : prevSt.index - 1
    }))
  }

  selectImg = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { index } = this.state;
    const prevProj = projects[index === 0 ? projects.length - 1 : index - 1];
    const nextProj = projects[index === projects.length - 1 ? 0 : index + 1];
    const project = projects[index];
    const { name, link, module, src, description } = project;
    return (
      <section className="projects-sect">
        <h2 className="projects-title">My Projects</h2>
        <section className="projects-list">
          <FaAngleLeft className="icon" onClick={ this.prevImg } data-testid="leftArrow"/>
            <section className="project-item">
              <h3 className="small-proj">{prevProj.name}</h3>
            </section>
            <section className="project-item active">
              <h2 className="project-name">{name}</h2>
              <p className="project-module">Module: {module}</p>
              <img className="project-img" src={ src } alt={ name } />
              <section className="project-description">
                {description.split('.').map((item, index, array) => (
                  <p key={ index }>
                    {
                      index === array.length - 1
                      ? item : item + '.'
                    }
                  </p>
                ))}
              </section>
              <a className="project-link" target="_blank" href={ link } rel="noopener noreferrer">
                {link.match(/^https:\/\/github.com/g)
                  ? 'See the repository'
                  : 'See it in action'
                }
              </a>
            </section>
            <section className="project-item">
              <h3 className="small-proj">{nextProj.name}</h3>
            </section>
          <FaAngleRight className="icon" onClick={ this.nextImg } data-testid="rightArrow" />
        </section>
        <section className="btn-sect">
          {projects.map(({ name, id }, index) => (
            <button
              type="button"
              key={ id }
              id={ index }
              onClick={ () => this.selectImg(index) }
              className="project-btn"
            >
              {name}
            </button>
          ))}
        </section>
      </section>
    );
  };
}

export default Projects;
