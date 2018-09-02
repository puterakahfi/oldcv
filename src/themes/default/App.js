import React, { Component } from "react";

import "./App.css";
import Header from "./organisms/Header";
import Skillset from "./organisms/Skillset";

import { Container, Row, Col } from 'reactstrap';
import WakatimeActivity from "./molecules/WakatimeActivity";
import Footer from "./organisms/Footer";
import Projects from "./organisms/Projects";
import Works from "./organisms/Works";

import { theme, works, wakatimeActivity, basics, technologyStack, skills } from '../../profile.json';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header basics={basics} technologyStack={technologyStack} /> 
        
        <Container >
            <Row>
              <Col md="6">
              <Works label="Experience" works={works} />
              </Col>
              <Col md="6">
              <WakatimeActivity wakatimeActivity={wakatimeActivity} title={wakatimeActivity.label} />
              </Col>
            </Row>
            

             <Row>
             <Col md="6">
              <Skillset title="Skillset" skills={skills} />
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
