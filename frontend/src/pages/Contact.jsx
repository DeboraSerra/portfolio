import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import "../styles/Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <section className='contact-sect'>
        <h1 className='contact-title'>My Contacts</h1>
        <p className='contact-info'>
          <FiPhone className='contact-icon' />
          <a
            className='contact-link contact-info'
            href='https://wa.me/+5561982311582'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp className='contact-icon' />
            +55 61 98231 1582
          </a>
        </p>
        <p className='contact-info'>
          <FiMail className='contact-icon' />
          debora.r.serra@gmail.com
        </p>
        <section className='contact-align'>
          <p className='contact-info'>
            <a
              className='contact-link contact-info'
              href='https://github.com/DeboraSerra'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='contact-icon big' />
              https://github.com/DeboraSerra
            </a>
          </p>
          <p className='contact-info'>
            <a
              className='contact-link contact-info'
              href='https://www.linkedin.com/in/debora-r-serra/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='contact-icon big' />
              https://www.linkedin.com/in/debora-r-serra/
            </a>
          </p>
        </section>
      </section>
    );
  }
}

export default Contact;
