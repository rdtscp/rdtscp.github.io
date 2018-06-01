import React, { Component } from 'react';
// import { Heading, SubHeading } from '../Components/';
import { Link } from "react-router-dom";

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
            <Link to="/about">CV/Resume</Link>
            <hr />
            <Link to="/scrapbook">Scrapbook</Link>
          </div>



      </div>
    );
  }
}

export default Home;