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
      activeTab: '1',
      skills:[
        {

        },
        {

        },
        {

        }
      ]
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
      <div className="section" id="skillset">
      <hr className="section-hr"/>
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
              
        <div className="skill-item"> PHP
        <Progress  animated value="60">3 years experience still noob </Progress>
        </div>

        <div className="skill-item"> HTML
        <Progress  animated value="70">3 years experience still noob </Progress>
        </div>

           <div className="skill-item">CSS
        <Progress  animated value="60">3 years experience still noob </Progress>
        </div>

        <div className="skill-item">Javascript
        <Progress  animated value="50">3 years experience still noob </Progress>
        </div>

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

              </Col>
            </Row>
          </TabPane>

           <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <div className="skill-item">Symfony 
                 <Progress  animated value="50">3 years experience still noob </Progress>
              </div>
              <div className="skill-item">Laravel 
                 <Progress  animated value="30">3 years experience still noob </Progress>
              </div>
              <div className="skill-item">Codeigniter 
                 <Progress  animated value="50">3 years experience still noob </Progress>
              </div>
              <div className="skill-item">CSS Bootstrap 
                 <Progress  animated value="60">3 years experience still noob </Progress>
              </div>

              </Col>
            </Row>
          </TabPane>
        </TabContent>
        

      </div>
    );
  }
}

export default Skillset;
