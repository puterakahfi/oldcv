import React, { Component } from "react";
import "./styles/OrbitSkill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brands  from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";

class OrbitSkill extends Component {
  render() {
    return (
      <div className="orbit">
        <ul className="orbit-wrap">
          <li className="orbit-center">
            <i className="orbit-center__icon ">
              <FontAwesomeIcon icon={Solid.faCode} />
            </i>
          </li>

          <li>
            <ul className="ring-2">
              <li>
                <i className="orbit-icon fa-vue">
                  <FontAwesomeIcon icon={brands} />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <FontAwesomeIcon icon={brands} />
                </i>
              </li>

              <li>
                <i className="orbit-icon">
                  <FontAwesomeIcon icon={brands} />
                </i>
              </li>
            </ul>
          </li>
          <li>
            <ul className="ring-3">
              <li>
                <i className="orbit-icon fa-php">
                  <FontAwesomeIcon icon={brands.faPhp} />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <FontAwesomeIcon icon={brands.faLaravel} />
                </i>
              </li>
              <li>
                <i className="orbit-icon">
                  <FontAwesomeIcon icon={brands.faJava} />
                </i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default OrbitSkill;
