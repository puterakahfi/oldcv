import React, { Component } from "react"
import './styles/Skillset.css'
import {TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames'
import SkillsetBar from '../molecules/SkillsetBar'

class Skillset extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
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
          <span>{this.props.title}</span></h2> <hr />
           <SkillTabs activeTab={this.state.activeTab}  toggle={this.toggle} skills={this.props.skills} />
           <SkillSetContent activeTab={this.state.activeTab} skills={this.props.skills } />
      </div>
    );
  }
}


// Functional component
const SkillTabs = (props) => {
  const itemsss = props.skills.items.map((item, index)=>
  <NavItem>
  <NavLink
    className={classnames({ active: props.activeTab === index })}
    onClick={() => { props.toggle(index); }}>
    {item.name}
  </NavLink>
  </NavItem>
)

  return (   
    <Nav tabs>
      {itemsss}
    </Nav>
  )
}


const SkillSetBarItems = (props) => {
  let bars = ""
  if(typeof(props.items)==="object"){
     bars = props.items.map((item,index) => <SkillsetBar value={item.value} label={item.label} />)
  }else{
    bars = ""
  }

  return(<span>{bars}</span>)
}

// Functional component
const SkillSetContent = (props) => {

  const itemsss = props.skills.items.map((item, index)=>

  <TabPane tabId={index}>
    <Row>
      <Col sm="12" >
      
      <SkillSetBarItems items={item.items} />
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



export default Skillset;
