import React, { Component } from 'react';
import logo from './logo.svg';
import vue from './vuejs.png';
import sass from './sass.png';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand from "@fortawesome/free-brands-svg-icons";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={vue} className="App-logo no-animation" alt="logo" />
          <img src={sass} className="App-logo no-animation" alt="logo" />

          <h1 className="App-title">Putera Kahfi</h1>
          <h2>Web Developer</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <div className="container">
          <h3> <FontAwesomeIcon icon={Brand.faGit} /> Skillset</h3>

        </div>
        <div className="container">
          <h3> <FontAwesomeIcon icon={Brand.faGithub} /> Github Activities</h3>

        </div>

        <div className="container">
          <h3> <FontAwesomeIcon icon={Brand.faGit} /> Projects</h3>

        </div>

          <div className="container">
          <h3> <FontAwesomeIcon icon={Brand.faGit} /> Coding Activities</h3>

        </div>

        <div className="container">
          <footer>
            <ul>
              <li><FontAwesomeIcon icon={Brand.faGithub} /> github</li>
              <li><FontAwesomeIcon icon={Brand.faLinkedin} /> linkedin</li>
              <li><FontAwesomeIcon icon={Brand.faFacebook} /> facebook</li>

            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
