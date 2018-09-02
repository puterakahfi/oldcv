import React, {Component, Fragment} from 'react';
import './Works.css';
import { Timeline, Event } from "react-timeline-scribble";
import Ionicon from "react-ionicons";

class Works extends Component
{

    render(){
    
        return(

            <div className="section" id="experiences">
            <hr class="section-hr" />
            <h2>{this.props.works.label}</h2>
            <hr/>
           
    <Timeline>
    <Fragment>
    <ListWorks works={this.props.works} />
      </Fragment> 
    </Timeline>
  
            </div>
        )
    }
}

const ListWorks = (props) =>{
    const works = props.works.items.map((item) =>
    <Event interval={item.startDate+" - "+item.endDate} title={item.company} subtitle={item.country}>
    <h5> {item.position}</h5>
   <p> {item.summary}</p>
    <hr/>
  </Event>)

  return(
      <span>{works}</span>
  )
}

export default Works