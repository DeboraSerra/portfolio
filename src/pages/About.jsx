import React from 'react';
import Fred from '../images/Fred.jpg';
import '../styles/About.css';
import { Map, Marker } from 'pigeon-maps';

class About extends React.Component {
  render() {
    return (
      <section className="about-sect">
        <h2 className="about-title">About me</h2>
        <section className="city-sect">
          <section className="brasilia">
            <Map defaultCenter={[-15.75240, -47.75379]} defaultZoom={10}>
              <Marker color='#76394B' width={50} anchor={[-15.75240, -47.75379]} />
            </Map>
          </section>
          <section className="about-sect1">
            <p className="about-p1">I am brazilian, born in Brazilia - DF. I've lived for two months in Itapema/SC and for one year and eight months in Andradas/MG.</p>
            <p className="about-p2">I am 29 years old, I like to watch movies and TV series, learn new things, read, dye my hair, a little of everything.</p>
          </section>
        </section>

        <section className="fred-sect">
          <section>
            <p className="about-p3">I'm the mother of this beautiful dog called Fred Weasley.</p>
            <p className="about-p4">My favorite music genre is Rock, but I listen a bit of almost everything, depending on the day (rsrs).</p>
          </section>
          <img className="fred" src={ Fred } alt="The most beautiful dog!" />
        </section>

        <section className="skills-sect">
          <h2>My skills</h2>
          <ul>
            <li>I tend to learn new things easily</li>
            <li>Ecletic</li>
            <li>Starting Linux</li>
            <li>Starting Git & GitHub</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Starting Jest</li>
            <li>Starting React</li>
            <li>Starting RTL</li>
          </ul>
        </section>
      </section>
    );
  };
}

export default About;
