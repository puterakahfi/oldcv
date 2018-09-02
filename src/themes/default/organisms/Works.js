import React, {Component, Fragment} from 'react';
import './styles/Works.css';
import { Timeline, Event } from "react-timeline-scribble";

class Works extends Component
{
 

  constructor(props) {
    super(props);
  }

    render(){
      const listItems = this.props.works.items.map((item) =>
            <Event interval={item.startDate+" - "+item.endDate} title={item.company} subtitle={item.country}>
            <h5> {item.position}</h5>
           <p> {item.summary}</p>
            <hr/>
          </Event>
    )
        return(
            <div className="section" id="experiences">
            <hr class="section-hr" />
            <h2>{this.props.works.label}</h2>
            <hr/>
           
    <Timeline>
    <Fragment>
          {listItems}
      </Fragment> 
    </Timeline>
  
            </div>
        )
    }
}

export default Works