import React, { Component } from "react";


import "./App.css";
import Header from "../organisms/Header";
import Skillset from "../organisms/Skillset";

import { Container, Row, Col } from 'reactstrap';
import CodingSnapshot from "../molecules/CodingSnapshot";
import Footer from "../organisms/Footer";
import Projects from "../organisms/Projects";
import Experiences from "../organisms/Experiences";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        
        <Container >
            <Row>
              <Col md="6">
              <Experiences label="Experience" />
              </Col>
              <Col md="6">
              <CodingSnapshot title="Coding Activity" />
              </Col>
            </Row>
            

             <Row>
             <Col md="6">
              <Skillset title="Skillset" />
              </Col>
              <Col md="6">
              <Projects />
              </Col>
            </Row>

            <Row>
            </Row>
            <Row>
              <Footer />
              </Row>
        </Container>
      </div>
    );
  }
}

export default App;
