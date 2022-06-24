import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_75pkj8t', 'template_dj6plc8', form.current, 'rZNEKfskB6TUXPZZ6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        data-testid="user_name"
        placeholder="Name"
        name="user_name"
        type="text"
        required
      />
      <input
        data-testid="user_email"
        type="email"
        name="user_email"
        placeholder="E-mail"
        required
      />
      <textarea
        data-testid="message"
        name="message"
        placeholder="Message"
        required
      />
      <button
        type="submit"
        data-testiid="submit-btn"
      >
        Send
      </button>
    </form>
  );
};