import React, { Component } from 'react';

import '../styles.css';


class Home extends Component {
  render() {
    return (
      <div className="home-container text-center test">

          <div className="title is-1 test">
            Alexander Wilson
          </div>
          <div className="subtitle test">
            <span class="icon"><i class="fa fa-terminal"></i></span>
            Software Developer
          </div>
          <br />
          <div className="link-list test">
            <a href="/about">CV/Resume</a>
            <hr />
            <a href="/scrapbook">Scrapbook</a>
          </div>



      </div>
    );
  }
}

export default Home;