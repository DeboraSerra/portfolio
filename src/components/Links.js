import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <Link className="link" to="/portfolio/">Home</Link>
        <Link className="link" to="/portfolio/about">About</Link>
        <Link className="link" to="/portfolio/resume">Resume</Link>
        <Link className="link" to="/portfolio/projects">Projects</Link>
        <Link className="link" to="/portfolio/contact">Contact</Link>
      </nav>
    )
  }
}

export default Links;
