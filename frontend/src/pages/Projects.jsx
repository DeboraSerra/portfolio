import React from "react";
import "../styles/Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <section className='projects-sect'>
        <h2 className='projects-title'>My Projects</h2>
        <p className='project-name'>
          Check the full updated list in the new version!
        </p>
        <a className='project-btn' href='https://portfolio-v3-brown.vercel.app/'>
          New Portfolio
        </a>
      </section>
    );
  }
}

export default Projects;
