import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Curriculum from "../pages/MyCurriculum";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Modal from "./Modal";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };
  }

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { modal } = this.state;
    return (
      <main>
        <Switch>
          <Route path='/portfolio/about' component={About} />
          <Route path='/portfolio/contact' component={Contact} />
          <Route path='/portfolio/resume' component={Curriculum} />
          <Route path='/portfolio/projects' component={Projects} />
          <Route path='/portfolio/' component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
        {modal ? <Modal closeModal={this.closeModal} /> : null}
      </main>
    );
  }
}

export default Content;
