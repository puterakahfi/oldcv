import React, { Component } from "react";

import "./styles/Header.css";

import TechnologyStack from "../molecules/TechnologyStack";
import OrbitSkill from "../molecules/OrbitSkill";
import Typing from "react-typing-animation/dist/Typing";
import {Row,Container} from 'reactstrap';
import {basics} from '../profile.json';

class Header extends Component {
  render() {
    return (
     <Container className="section" id="header">
        <Row>
          <div className="col-md-12">

            <h6 id="version">ver : <strong>beta</strong></h6>

            <h1 className="title">{basics.name}</h1>

            <h2>{basics.label}</h2>
            <h5 dangerouslySetInnerHTML={{__html: basics.sublabel}}></h5>

            <p id="short-desc">
            {basics.summary}
            </p>

            <TechnologyStack />
          </div>
        </Row>

            <hr/>
        </Container>
    );
  }
}


export default Header;
