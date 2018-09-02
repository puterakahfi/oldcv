import React, {Component} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'

import './styles/WakatimeActivity.css'

class WakatimeActivity extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            activeTab:0,
            loading: false,
            content:""  
        };

        this.toggle = this.toggle.bind(this);
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

  
      return(
        <div className="section" id="wakatime-activity">

        <hr className="section-hr" />
             <h2> 
                 <span>{this.props.title}</span>
            </h2> 
            <hr/>

   <WakatimeTabs activeTab={this.state.activeTab}  toggle={this.toggle}  wakatimeActivity={this.props.wakatimeActivity} />
   <WakatimeContent activeTab={this.state.activeTab}  wakatimeActivity={this.props.wakatimeActivity} />
           

   

            </div>
        );
      }
}


// Functional component
const WakatimeTabs = (props) => {

  const itemsss = props.wakatimeActivity.items.map((item, index)=>
  <NavItem>
  <NavLink
    className={classnames({ active: props.activeTab === index })}
    onClick={() => { props.toggle(index); }}>
    {item.label}
  </NavLink>
  </NavItem>
)

  return (   
   
    <Nav tabs>
      {itemsss}
    
    </Nav>
  )
}

// Functional component
const WakatimeContent = (props) => {

  const itemsss = props.wakatimeActivity.items.map((item, index)=>
  <TabPane tabId={index}>
    <Row>
      <Col sm="12" >
      <figure className="coding-item"><embed src={item.wakaUrl}></embed></figure>

      </Col>
    </Row>
  </TabPane>
)

  return (
   
    <TabContent activeTab={props.activeTab}>
    {itemsss}
  </TabContent>
  )
}

export default WakatimeActivity;