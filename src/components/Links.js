import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/resume">Resume</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    )
  }
}

export default Links;
