import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Loading from '../components/Loading';
import '../styles/Projects.css';

const url = process.env.REACT_APP_API;

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      projects: {},
      modules: [],
      renderProj: [],
      loading: true,
      module: '',
    }
  }

  async componentDidMount() {
    const response = await fetch(url);
    const { projects } = await response.json();
    this.setState({
      projects,
      modules: Object.keys(projects),
      renderProj: projects.fundamentals,
      loading: false,
      module: 'Fundaments',
    });
  }

  nextImg = () => {
    const { index, renderProj } = this.state;
    this.setState((prevSt) => ({
      index: index === renderProj.length - 1 ? 0 : prevSt.index + 1,
    }))
  }

  prevImg = () => {
    const { index, renderProj } = this.state;
    this.setState((prevSt) => ({
      index: index === 0 ? renderProj.length - 1 : prevSt.index - 1
    }))
  }

  selectModule = (index, name) => {
    const { projects, modules } = this.state;
    this.setState({
      renderProj: projects[modules[index]],
      module: name,
    });
  }

  selectProj = (index) => {
    this.setState({ index });
  }

  render() {
    const { index, renderProj, loading, module } = this.state;
    if (loading) return <Loading />;
    const prevProj = renderProj[index === 0 ? renderProj.length - 1 : index - 1];
    const nextProj = renderProj[index === renderProj.length - 1 ? 0 : index + 1];
    const project = renderProj[index];
    const { name, link, image, description } = project;
    return (
      <section className="projects-sect">
        <h2 className="projects-title">My Projects</h2>
        <section className="btn-sect">
          {['Fundaments', 'Front end', 'Back end', 'Personal'].map((name, index) => (
            <button
              type="button"
              key={ index }
              id={ index }
              onClick={ () => this.selectModule(index, name) }
              className="project-btn"
            >
              {name}
            </button>
          ))}
        </section>
        <section className="projects-list">
          <FaAngleLeft className="icon" onClick={ this.prevImg } data-testid="leftArrow"/>
            <section className="project-item">
              <h3 className="small-proj">{prevProj.name}</h3>
            </section>
            <section className="project-item active">
              <h2 className="project-name">{name}</h2>
              <p className="project-module">Module: {module}</p>
              <img className="project-img" src={ image } alt={ name } />
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
                {(/^https:\/\/github.com/g).test(link)
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
          {renderProj.map(({ name, id }, index) => (
            <button
              type="button"
              key={ id }
              id={ index }
              onClick={ () => this.selectProj(index) }
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
