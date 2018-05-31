import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './Views/About.js';
import Home from './Views/Home.js';

class App extends Component {

  render() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/unet/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <Route exact path="/unet/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
  }
}

export default App;
