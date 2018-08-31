import React, { Component } from "react";
import './styles/Skillset.css';
import { Progress, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SkillsetBar from '../molecules/SkillsetBar';

class Skillset extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
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
              <SkillsetBar value="60" label="PHP" text="Not Bad"/>
              <SkillsetBar value="60" label="HTML" text="Not Bad"/>
              <SkillsetBar value="60" label="CSS" text="Not Bad"/>
              <SkillsetBar value="60" label="Javascript" text="Not Bad"/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <SkillsetBar value="50" label="Git" text=""/>
              <SkillsetBar value="50" label="SVN" text=""/>
              <SkillsetBar value="50" label="Docker" text=""/>

              </Col>
            </Row>
          </TabPane>

           <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <SkillsetBar value="60" label="Symfony" text=""/>
              <SkillsetBar value="40" label="Codeigniter" text=""/>
              <SkillsetBar value="20" label="Laravel" text=""/>
              <SkillsetBar value="50" label="CSS Bootstrap" text=""/>
              <SkillsetBar value="5" label="ReactJS" text=""/>
              <SkillsetBar value="8" label="VueJS" text=""/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        

      </div>
    );
  }
}

export default Skillset;
