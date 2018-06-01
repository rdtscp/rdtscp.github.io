import React, { Component } from 'react';
import './styles.css';

class Heading extends Component {
  render() {
    return (
        <div className="heading-container heading-font centered">
            {this.props.text}
        </div>
    );
  }
}

export default Heading;