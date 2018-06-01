import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles.css';

import About from './Views/About.js';
import Home from './Views/Home.js';
import Scrapbook from './Views/Scrapbook.js';

class App extends Component {

  render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/scrapbook" component={Scrapbook} />
          </div>
        </Router>
      );
  }
}

export default App;
