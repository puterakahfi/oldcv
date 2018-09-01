import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './styles/WakatimeActivity.css';
import axios from 'axios';

class WakatimeActivity extends Component{

    constructor(props) {
        super(props);
    
        this.state = {

            loading: false,
            activeTab: '1',
            content:"",
            activity: 'https://wakatime.com/share/@puterakahfi/5c7550a6-2b53-4a80-b96f-2e60e9a5fc40.svg',
            language: 'https://wakatime.com/share/@puterakahfi/eb74a86b-3b9b-4068-aaab-95c92b1fe4fb.svg',      
        };
      }
  

    
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

    render()
    {

      const { activity, language, loading } = this.state;
      if(loading){
        return(

        <div>Loading ... </div>

        )
      }else{  
      return(
        <div className="section" id="wakatime-activity">

       
        <hr className="section-hr" />
             <h2> 
                 <span>{this.props.title}</span>
            </h2> 
            <hr/>

            <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => { this.toggle('1'); }}
        >
          Activity
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => { this.toggle('2'); }}
        >
          Language
        </NavLink>
      </NavItem>
    </Nav>

     <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12" >
          <figure className="coding-item"><embed src={activity}></embed></figure>

          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <Row>
          <Col sm="12">
          <figure className="coding-item"><embed src={language}></embed></figure>

        </Col>
        </Row>
      </TabPane>

    </TabContent>

            </div>
        );
      }
    }
}

export default WakatimeActivity;