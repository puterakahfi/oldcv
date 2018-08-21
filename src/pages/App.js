import React, { Component } from "react";

import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import Header from "../organisms/Header";
import GithubRepos from "../organisms/GithubRepos";
import Skillset from "../organisms/Skillset";
import ThemeSwticher from "../molecules/ThemeSwitcher";

import axios from "axios";
import TechnologyStack from "../molecules/TechnologyStack";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <hr />

        <div className="container">
        <TechnologyStack />
          <div className="row">
           <div id="logo">
              <img src="/logo.svg" className="App-logo" alt="logo" />
              <img
                src="/vuejs.png"
                className="App-logo no-animation"
                alt="logo"
              />
              <img
                src="/sass.png"
                className="App-logo no-animation"
                alt="logo"
              />
              <img
                src="/php.png"
                className="App-logo no-animation"
                alt="logo"
              />
              <img
                src="/laravel.png"
                className="App-logo no-animation"
                alt="logo"
              />
              <img
                src="/symfony.png"
                className="App-logo no-animation"
                alt="logo"
              />
              <img
                src="/codeigniter.png"
                className="App-logo no-animation"
                alt="logo"
              />
            </div>
          <div className="col-md-6">
              <GithubRepos />
            </div>
            <div className="col-md-5">
              <Skillset />
            </div>
           
          </div>
        </div>

        <div className="container">
          <footer>
            <ul>
              <li>
                <FontAwesomeIcon icon={Brand.faGithub} /> github
              </li>
              <li>
                <FontAwesomeIcon icon={Brand.faLinkedin} /> linkedin
              </li>
              <li>
                <FontAwesomeIcon icon={Brand.faFacebook} /> facebook
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
