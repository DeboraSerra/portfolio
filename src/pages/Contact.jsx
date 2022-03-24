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
    this.setState({ clicked: true }, () => {
      e.preventDefault();
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
          <FaWhatsapp className="contact-icon" />
          <FiPhone className="contact-icon" />
          +55 61 98231 1582
        </p>
        <p className="contact-info">
          <FiMail className="contact-icon" />
          debora.r.serra@gmail.com
        </p>
        <p className="contact-info">
          <FaGithub className="contact-icon" />
          https://github.com/DeboraSerra
        </p>
        <p className="contact-info">
          <FaLinkedin className="contact-icon" />
          https://www.linkedin.com/in/debora-r-serra/
        </p>
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
