import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import { Progress } from "reactstrap";

class Skillset extends Component {
  render() {
    return (
      <div className="container" id="skillset">
        <h4>Skillset</h4>

        

        <div className="col-md-5">
          <FontAwesomeIcon icon={Brand.faGit} /> Git
          <Progress value="50">3 years experience</Progress>
          <FontAwesomeIcon icon={Brand.faPhp} /> PHP
          <Progress value="55">3 years experience</Progress>
        </div>
      </div>
    );
  }
}

export default Skillset;
