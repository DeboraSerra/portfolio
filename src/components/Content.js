import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';
import Curriculum from '../pages/MyCurriculum';

class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/resume" component={ Curriculum } />
          <Route path="/projects" component={ Projects } />
          <Route path="/" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    )
  }
}

export default Content;
