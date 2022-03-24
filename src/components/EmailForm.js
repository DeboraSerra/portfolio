import React from 'react';

class EmailForm extends React.Component {
  render() {
    const { sendForm, handleChange, isValid, user_email, user_name, message } = this.props;
    return (
      <>
        <form className="contact-form" onSubmit={ sendForm }>
          <input
            className="contact-input"
            data-testid="user_name"
            placeholder="Name"
            name="user_name"
            type="text"
            value={ user_name }
            onChange={ handleChange }
          />
          <input
            className="contact-input"
            data-testid="user_email"
            type="email"
            name="user_email"
            placeholder="E-mail"
            value={ user_email }
            onChange={ handleChange }
          />
          <textarea
            className="contact-textarea"
            data-testid="message"
            name="message"
            placeholder="Message"
            value={ message }
            onChange={ handleChange }
          />
          <button
            className="contact-btn"
            type="submit"
            data-testid="submit-btn"
            disabled={ !isValid }
          >
            Send
          </button>
        </form>
      </>
    )
  }
}

export default EmailForm;
