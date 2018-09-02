import React, { Component } from "react";
import './styles/ThemeSwitcher.css';

class ThemeSwitcher extends Component {
  render() {
    return (
      <div id="theme-switcher">
      <h6> Choose <br/> your <br/> mood </h6>
        <ul>
          <li> dark </li>
          <li> light </li>
        </ul>
      </div>
    );
  }
}

export default ThemeSwitcher;
