import React from "react";
import BurnabyPark from "../images/Burnaby_Central_Park.jpg";
import Fred from "../images/Fred.jpg";
import "../styles/About.css";

class About extends React.Component {
  calculateAge = () => {
    const birthDate = new Date("1992-09-16"); // Replace with your actual birth date
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  render() {
    return (
      <section className='about-sect'>
        <h2 className='about-title'>About me</h2>
        <section className='city-sect'>
          <section className='brasilia'>
            <img
              className='map'
              src={BurnabyPark}
              alt='Central Park, Burnaby - BC'
            />
          </section>
          <section className='about-sect1'>
            <p className='about-p1'>
              I am Brazilian, born in Brasilia, DF. I've lived for two months in
              Itapema, SC and for one year and eight months in Andradas/MG and
              now I live in Burnaby, BC.
            </p>
            <p className='about-p2'>
              I am {this.calculateAge()} years old, I like to watch movies and
              TV series, learn new things, read, dye my hair, a little of
              everything.
            </p>
          </section>
        </section>

        <section className='fred-sect'>
          <section>
            <p className='about-p3'>
              I'm the mother of this beautiful dog called Fred Weasley.
            </p>
            <p className='about-p4'>
              My favorite music genre is Rock, but I listen a bit of almost
              everything, depending on the day (rsrs).
            </p>
          </section>
          <img className='fred' src={Fred} alt='The most beautiful dog!' />
        </section>

        <section className='skills-sect'>
          <h2>My skills</h2>
          <ul>
            <li>I tend to learn new things easily</li>
            <li>Ecletic</li>
            <li>Linux</li>
            <li>Git & GitHub</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Jest</li>
            <li>React</li>
            <li>RTL</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default About;
