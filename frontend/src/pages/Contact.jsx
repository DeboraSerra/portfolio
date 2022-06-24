import React from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../components/Loading';
import EmailForm from '../components/EmailForm';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.state ={
      user_name: '',
      user_email: '',
      message: '',
      isValid: false,
      sent: false,
      error: '',
      clicked: false,
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validateForm());
  }

  validateForm = () => {
    const { user_email, user_name, message } = this.state;
    const areNotEmpty = user_email && user_name && message;
    const email = user_email.match(/^[^\s@]+@[^\s@]+$/);
    const emailIsValid = email ? true : false;
    this.setState({ isValid: areNotEmpty && emailIsValid });
  }

  sendForm = (e) => {
    e.preventDefault();
    this.setState({ clicked: true }, () => {
      const { user_email, user_name, message } = this.state;
      this.sendEmail({ user_email, user_name, message });
    })
  }

  sendEmail = (data) => {
    emailjs.send('service_75pkj8t', 'template_dj6plc8', data, 'rZNEKfskB6TUXPZZ6')
      .then((result) => {
          if (result) this.setState({ sent: true });
      }, (error) => {
          if (error) this.setState({ error: error.text });
      });
  }

  render() {
    const { isValid, user_name, user_email, message, sent, error, clicked } = this.state;
    return (
      <section className="contact-sect">
        <h1 className="contact-title">My Contacts</h1>
        <p className="contact-info">
          <FiPhone className="contact-icon" />
          <a
            className="contact-link contact-info"
            href="https://wa.me/+5561982311582"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FaWhatsapp className="contact-icon" />
            +55 61 98231 1582
          </a>

        </p>
        <p className="contact-info">
          <FiMail className="contact-icon" />
          debora.r.serra@gmail.com
        </p>
        <section className="contact-align">
          <p className="contact-info">
            <a
              className="contact-link contact-info"
              href="https://github.com/DeboraSerra"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub className="contact-icon big" />
              https://github.com/DeboraSerra
            </a>
          </p>
          <p className="contact-info">
            <a
              className="contact-link contact-info"
              href="https://www.linkedin.com/in/debora-r-serra/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin className="contact-icon big" />
              https://www.linkedin.com/in/debora-r-serra/
            </a>
          </p>
        </section>
        <h2 className="contact-form-title">Send me an e-mail</h2>
        {error && <p className="contact-p">Your e-mail wasn't sent...</p>}
        {clicked && !sent && <Loading />}
        {!clicked && !sent && !error && (
          <EmailForm
            handleChange={ this.handleChange }
            sendForm={ this.sendForm }
            isValid={ isValid }
            message={ message }
            user_email={ user_email }
            user_name={ user_name }
          />
        )}
        {clicked && sent && !error && <p className="contact-p">Email sent!</p>}
      </section>
    );
  }
}

export default Contact;
