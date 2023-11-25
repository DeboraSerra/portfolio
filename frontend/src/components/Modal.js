import React from "react";
import '../styles/Modal.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    const { closeModal } = this.props;
    if (event.target.className === "modal") {
      closeModal();
    }
  }
  render() {
    const { closeModal } = this.props;
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h1 className="modal-title">Check out the new and improved version!</h1>
          <a className="modal-btn" href="https://portfolio-v3-brown.vercel.app/">New Portfolio</a>
        </div>
      </div>
    )
  }
}

export default Modal;
