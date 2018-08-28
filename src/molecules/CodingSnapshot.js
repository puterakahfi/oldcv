import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './styles/CodingSnapshot.css';
import axios from 'axios';

class CodingSnapshot extends Component{

    constructor(props) {
        super(props);
    
        this.state = {

            loading: false,
            activeTab: '1',
            content:"",
            wakatime: 'https://wakatime.com/share/@puterakahfi/4850fd01-3b5e-4922-b350-101d7b6378d1.svg',
            wakatime2: 'https://wakatime.com/share/@puterakahfi/f4eada33-25e6-4b04-b23c-9e3e7577c7b7.svg',      
        };
      }
  
      componentDidMount () {


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

      const { wakatime, wakatime2, loading } = this.state;
      if(loading){
        return(

        <div>Loading ... </div>

        )
      }else{  
      return(
        <div className="section" id="coding-snapshot">

       
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
          <figure className="coding-item"><embed src={wakatime}></embed></figure>

          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <Row>
          <Col sm="12">
          <figure className="coding-item"><embed src={wakatime2}></embed></figure>

        </Col>
        </Row>
      </TabPane>

    </TabContent>

            </div>
        );
      }
    }
}

export default CodingSnapshot;