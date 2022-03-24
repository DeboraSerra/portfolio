import React from 'react';
import ProfileImg from '../images/Perfil.jpeg';
import '../styles/Home.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home-sect">
        <h1 className="home-title">Hello world!</h1>
        <h2 className="my-name">My name is <span>Débora Serra</span></h2>
        <img className="profile-img" src={ ProfileImg } alt="Débora Serra" />
        <p className="profile-p">Web developer student in Trybe | Masters degree in Chemistry by UnB</p>
        <p className="profile-p">Cosmetologist by iCosmetologia | Post-graduated in Gastronomy in PUC-RS</p>
        <p className="profile-p">See my <a href="https://github.com/DeboraSerra" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </section>
    );
  };
}

export default Home;
