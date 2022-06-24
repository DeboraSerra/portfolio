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
          <Route path="/portfolio/about" component={ About } />
          <Route path="/portfolio/contact" component={ Contact } />
          <Route path="/portfolio/resume" component={ Curriculum } />
          <Route path="/portfolio/projects" component={ Projects } />
          <Route path="/portfolio/" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    )
  }
}

export default Content;
