import React, { Component } from "react";

import "./styles/Header.css";

import TechnologyStack from "../molecules/TechnologyStack";
import OrbitSkill from "../molecules/OrbitSkill";
import Typing from "react-typing-animation/dist/Typing";
import {Row,Container} from 'reactstrap';

class Header extends Component {
  render() {
    return (
     <Container id="header">
        <Row>
          <div className="col-md-6">
            <h6 id="version">ver : <strong>beta</strong></h6>
            <hr />
            <h1 className="title">Putera Kahfi</h1>

            <h2>Web Developer</h2>
            <h5>// <a href="https://en.wikipedia.org/wiki/Web_design">Web Designer </a> // <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank">Frontend</a> // Backend</h5>

            <p id="short-desc">
              <strong>Hi, </strong>
              My name is Putera Kahfi, I am a web developer, Right now i'm on the way to become a front end developer
            </p>

            <TechnologyStack />
          </div>
          <div className="col-md-5">
            <OrbitSkill />
          </div>
        </Row>
        </Container>
    );
  }
}

<style>background: red;</style>;

export default Header;
