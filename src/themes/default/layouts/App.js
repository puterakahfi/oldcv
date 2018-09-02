import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App.css"
import Header from "../organisms/Header"
import Skillset from "../organisms/Skillset"
import { Container, Row, Col } from 'reactstrap'
import WakatimeActivity from "../molecules/WakatimeActivity"
import Footer from "../organisms/Footer"
import Projects from "../organisms/Projects"
import Works from "../organisms/Works"
import Particles from 'react-particles-js'


var particleStyle = {
  position: 'absolute',
  top:'0px',
  left:'0px',
};


class App extends Component {
  render() {
    return (
      <div className="App">
            <Particles className="particle" style={particleStyle} />

        <Header basics={this.props.profile.basics} technologyStack={this.props.profile.technologyStack} /> 
        
        <Container >
            <Row>
              <Col md="6">
              <Works label="Experience" works={this.props.profile.works} />
              </Col>
              <Col md="6">
              <WakatimeActivity wakatimeActivity={this.props.profile.wakatimeActivity} title={this.props.profile.wakatimeActivity.label} />
              <Skillset title="Skillset" skills={this.props.profile.skills} />

              </Col>
            </Row>
            

             <Row>
              <Col md="12">
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
