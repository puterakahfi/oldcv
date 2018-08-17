import React, { Component } from 'react';

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand from "@fortawesome/free-brands-svg-icons";
import Header from '../organisms/Header';
import GithubRepos from "../organisms/GithubRepos";
import Skillset from  '../organisms/Skillset';

import axios from 'axios';


class App extends Component {

  render() {
    return (
      <div className="App">
      
      <Header />
      <Skillset />
      <GithubRepos />
       

          

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
