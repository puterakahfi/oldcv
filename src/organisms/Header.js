import React, { Component } from "react";

import OrbitSkill from "../molecules/OrbitSkill";

class Header extends Component {
  render() {
    return (
      <header className="container header">
        <div className="row">
          <div className="col-md-5">
            <h1 className="title">
              Putera <br /> Kahfi
            </h1>
            <h2>Web Developer</h2>

            <img src="/logo.svg" className="App-logo" alt="logo" />
            <img
              src="/vuejs.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img src="/sass.png" className="App-logo no-animation" alt="logo" />
            <img src="/php.png" className="App-logo no-animation" alt="logo" />
            <img
              src="/laravel.jpeg"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/symfony.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/codeigniter.png"
              className="App-logo no-animation"
              alt="logo"
            />
          </div>
          <div className="col-md-7">
            <OrbitSkill />
          </div>
        </div>
      </header>
    );
  }
}

<style>background: red;</style>;

export default Header;
