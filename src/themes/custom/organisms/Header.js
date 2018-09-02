import React, { Component } from "react";

import "./styles/Header.css";

import TechnologyStack from "../molecules/TechnologyStack";
import Typing from "react-typing-animation/dist/Typing";
import {Row,Container} from 'reactstrap';

class Header extends Component {
  render() {
    return (
     <Container className="section" id="header">
        <Row>
          <div className="col-md-12">

            <h6 id="version">ver : <strong>beta</strong></h6>

            <h1 className="title">{this.props.basics.name}</h1>

            <h2>{this.props.basics.label}</h2>
          <h5 dangerouslySetInnerHTML={{__html: this.props.basics.sublabel}}></h5>

            <p id="short-desc">
            <Typing speed={100}> <span>
            {this.props.basics.summary}
            </span></Typing>
            </p>

            <TechnologyStack technologyStack={this.props.technologyStack} />
          </div>
        </Row>

            <hr/>
        </Container>
    );
  }
}


export default Header;
