import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import { Progress } from "reactstrap";
import './styles/Skillset.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import classnames from 'classnames';

class Skillset extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="" id="skillset">
       <h2> 
                     <span>{this.props.title}</span>
                </h2> 
                <hr />

           <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Basic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Tools
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Frameworks and libraries
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              
        <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress  animated value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">

                      <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress  animated value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

              </Col>
            </Row>
          </TabPane>

           <TabPane tabId="3">
            <Row>
              <Col sm="12">

                      <FontAwesomeIcon icon={Brand.faGit} /> Git
        <Progress  animated value="50">3 years experience still noob </Progress>
        <FontAwesomeIcon icon={Brand.faPhp} /> PHP
        <Progress value="55">3 years experience</Progress>
        <FontAwesomeIcon icon={Brand.faCss3Alt} /> CSS
        <Progress value="60">Not Bad</Progress>

              </Col>
            </Row>
          </TabPane>
        </TabContent>
        

      </div>
    );
  }
}

export default Skillset;
