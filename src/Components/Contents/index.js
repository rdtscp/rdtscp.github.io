import React, { Component } from 'react';
import './styles.css';

class Contents extends Component {

  constructor(props) {
      super(props);
      this.state = {
        visible: true
      }
  }

  toggleMenu = (e) => {
    console.log("Switching Menu");

    this.setState({
        visible: !this.state.visible
    });
  }

  render() {
    if (this.state.visible) {
        return (
            <div className="box" id="contents">
              <a className="button is-small" id="contents_minimax" onClick={this.toggleMenu}>-</a>
              <div className="content" id="contents_pane">
                <ul>
                  <li className="contents-item"><a style={{color: "black"}} href="#top" class="var">Alexander.h</a></li>
                  <li className="contents-item"><a style={{color: "black"}} href="#education"> Education </a></li>
                  <li className="contents-item"><a style={{color: "black"}} href="#work_experience"> Work Experience </a></li>
                  <li className="contents-item"><a style={{color: "black"}} href="#skills"> Skills </a></li>
                  <li className="contents-item"><a style={{color: "black"}} href="#projects"> Projects </a></li>
                </ul>
              </div>
            </div>
          );
    }
    else {
        return (
            <div className="box" id="contents">
              <a className="button is-small" id="contents_minimax" onClick={this.toggleMenu}>+</a>
              <div className="content" id="contents_pane">
              </div>
            </div>
          );
    }
  }
}

export default Contents;
