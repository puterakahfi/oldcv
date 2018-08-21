import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import { Progress } from "reactstrap";
import './styles/Skillset.css';

class Skillset extends Component {
  render() {
    return (
      <div className="" id="skillset">

      
        <h2>Skillset</h2>
        <h4>Basic</h4>
        <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

          <h4>Frontend</h4>
        <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

          <h4>Backend</h4>
        <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

          <h4>Tools</h4>
        <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

      </div>
    );
  }
}

export default Skillset;
