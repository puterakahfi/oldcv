import React, { Component } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import Header from "../organisms/Header";
import Skillset from "../organisms/Skillset";
import ThemeSwticher from "../molecules/ThemeSwitcher";

import axios from "axios";
import GithubRepos from "../organisms/GithubRepos";

import { Container, Row, Col } from 'reactstrap';
import Projects from "../organisms/Projects";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        
        <Container >
            <Row>
              <Col md="6">
              <Skillset />
              </Col>

              <Col md="6">
              <Projects />

              </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default App;
