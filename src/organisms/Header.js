import React, { Component } from "react";

import "./styles/Header.css";

import TechnologyStack from "../molecules/TechnologyStack";
import OrbitSkill from "../molecules/OrbitSkill";
import Typing from "react-typing-animation/dist/Typing";

class Header extends Component {
  render() {
    return (
      <header className="container header">
        <div className="row">
          <div className="col-md-6">
            <h6>ver: beta</h6>
            <hr />
            <h1 className="title"><Typing speed="50">Putera Kahfi</Typing></h1>

            <h2>  <Typing speed="100">      <Typing.Delay ms={1000} />Web Developer</Typing> </h2>
            <h5>// <a href="https://en.wikipedia.org/wiki/Web_design">Web Designer </a> // <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank">Frontend</a> // Backend</h5>

            <p id="short-desc">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>

            <TechnologyStack />
          </div>
          <div className="col-md-5">
            <OrbitSkill />
          </div>
        </div>
      </header>
    );
  }
}

<style>background: red;</style>;

export default Header;
