import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import Profile from '../images/Perfil.jpeg';
import Resume from '../images/Resume-Débora-Serra.pdf';
import '../styles/MyCurriculum.css';

class Curriculum extends React.Component {
  render() {
    return (
      <section className="resume">
        <section className="resume-sect">
          <section className="resume-subsect">
            <h1 className="resume-title">Débora Rodrigues Serra</h1>
          </section>

          <section className="resume-subsect">
            <h2 className="resume-subtitle">Contact</h2>
            <p className="resume-p contact">
              <FaWhatsapp className="resume-icon" />
              <FiPhone className="resume-icon" />
              +55 61 98231 1582
            </p>
            <p className="resume-p contact">
              <FiMail className="resume-icon" />
              debora.r.serra@gmail.com
            </p>
            <p className="resume-p contact">
              <FaGithub className="resume-icon" />
              https://github.com/DeboraSerra
            </p>
            <p className="resume-p contact">
              <FaLinkedin className="resume-icon" />
              https://www.linkedin.com/in/debora-r-serra/
            </p>
          </section>

          <section className="resume-subsect">
            <h2 className="resume-subtitle">Academic graduation</h2>

            <section className="resume-subsect2">
              <p className="resume-p year">2021 - 2022</p>
              <p className="resume-p">Web development - Trybe</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">2018 - 2019</p>
              <p className="resume-p">Specialization in gastronomy and authorial cook - PUCRS</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">2014 - 2016</p>
              <p className="resume-p">Masters degree in chemistry - UnB</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">2014 - 2016</p>
              <p className="resume-p">MBA in cosmetics technology - ICosmetologia</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">2010 - 2014</p>
              <p className="resume-p">Graduation in chemistry - UnB</p>
            </section>
          </section>

          <section className="resume-subsect">
            <h2 className="resume-subtitle">Professional history</h2>
            <section className="resume-subsect2">
              <p className="resume-p year">05/2021 - 10/2021</p>
              <p className="resume-p">Health agent in Andradas/MG</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">02/2020 - 12/2020</p>
              <p className="resume-p">Chemistry technitian in Andradas/MG</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">01/2018 - 08/2018</p>
              <p className="resume-p">Sales assistant in Comunhão Espírita de Brasília, Brasília/DF</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">10/2014 - 10/2016</p>
              <p className="resume-p">Intern in EMBRAPA - Agroenergy, Brasília/DF</p>
            </section>
          </section>

          <section className="resume-subsect">
            <h2 className="resume-subtitle">Languages</h2>

            <section className="resume-subsect2">
              <p className="resume-p year">English</p>
              <p className="resume-p">Level: Intermediary</p>
            </section>
            <section className="resume-subsect2">
              <p className="resume-p year">Portuguese</p>
              <p className="resume-p">Level: Native</p>
            </section>
          </section>
          <p className="resume-p date">Brasília, march, 13th, 2022.</p>
        </section>
        <a
          className="resume-link"
          href={ Resume }
          download="Resume-Débora-Serra.pdf"
        >
          Download resume
        </a>
      </section>

    )
  }
}

export default Curriculum;
