import React from 'react';
import '../styles/Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <section data-testid="loading" className="load-sect">
        <p className="loading" />
      </section>
    );
  }
}

export default Loading;
