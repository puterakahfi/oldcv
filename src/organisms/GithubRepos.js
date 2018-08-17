import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';


class GithubRepos extends Component {

  state = {
    githubRepositories : []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/puterakahfi/repos`)
    .then(res => {
      const githubRepositories = res.data;
      this.setState({ githubRepositories });
    })
  }
  render() {
    return (
       
        <div className="container">

          <h3> <FontAwesomeIcon icon={Brand.faGithub} /> Github Activities</h3>

           <ul>
        { this.state.githubRepositories.map(repo => <li>{repo.name}</li>)}
         </ul>


        </div>
    );
  }
}

export default GithubRepos;
