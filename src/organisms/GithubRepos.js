import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import "./styles/GithubRepos.css";


class GithubRepos extends Component {

  state = {
    githubRepositories : []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/puterakahfi/events`)
    .then(res => {
      const githubRepositories = res.data;
      this.setState({ githubRepositories });
    })
  }
  render() {
    return (
       
        <div className="container" id="github-repos">

          <h3> <FontAwesomeIcon icon={Brand.faGithub} /> Github Activities</h3>

           <ul>
        { this.state.githubRepositories.map(repo => <li>{repo.type}</li>)}
         </ul>


        </div>
    );
  }
}

export default GithubRepos;
