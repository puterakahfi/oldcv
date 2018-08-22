import React, { Component } from "react";

import "./styles/Header.css";

import TechnologyStack from "../molecules/TechnologyStack";
import OrbitSkill from "../molecules/OrbitSkill";

class Header extends Component {
  render() {
    return (
      <header className="container header">
        <div className="row">
          <div className="col-md-6">

            <hr />
            <h1 className="title">Putera Kahfi</h1>

            <h2>  Web Developer </h2>
            <h5>// <a href="https://en.wikipedia.org/wiki/Web_design">Web Designer </a> // Frontend // Backend</h5>

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
