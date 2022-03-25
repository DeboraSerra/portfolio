import React from 'react';
import Links from './Links';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="name-title">Portfolio</h1>
        <Links />
      </header>
    )
  }
}

export default Header;
