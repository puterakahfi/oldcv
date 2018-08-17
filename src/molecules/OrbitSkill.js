import React, { Component } from "react";
import "./OrbitSkill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";

class OrbitSkill extends Component {
  render() {
    return (
      <div class="orbit">
        <ul class="orbit-wrap">
          <li class="orbit-center">
            <i class="orbit-center__icon fa"><FontAwesomeIcon icon={Solid.faCode} /> </i>

          </li>

          <li>
            <ul class="ring-1">
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faCss3} /> </i>
              </li>
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faCss3} /> </i>
              </li>
              <li>
                <i class="orbit-icon fa fa-html5" />
              </li>
            </ul>
          </li>
          <li>
            <ul class="ring-2">
              <li>
              <i class="orbit-icon fa"><FontAwesomeIcon icon={Brand.faVuejs} /> </i>
              </li>
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faReact} /> </i>
              </li>
              <li>
                <i class="orbit-icon fa fa-edge" />
              </li>
              <li>
                <i class="orbit-icon fa fa-linux" />
              </li>
              <li>
                <i class="orbit-icon fa fa-apple" />
              </li>
              <li>
                <i class="orbit-icon fa fa-chrome" />
              </li>
              <li>
                <i class="orbit-icon fa fa-android" />
              </li>
              <li>
                <i class="orbit-icon fa fa-firefox" />
              </li>
            </ul>
          </li>
          <li>
            <ul class="ring-3">
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faPhp} /> </i>
              </li>
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faLaravel} /> </i>
              </li>
              <li>
              <i class="orbit-icon"><FontAwesomeIcon icon={Brand.faJava} /> </i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default OrbitSkill;
