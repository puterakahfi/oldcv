import React, {Component, Fragment} from 'react';
import './styles/Experiences.css';
import { Timeline, Event } from "react-timeline-scribble";
import { works } from '../profile.json';

class Experiences extends Component
{
 



    render(){
      const listItems = works.items.map((item) =>
            <Event interval={"2013 – Current"} title={item.company} subtitle={"Yogyakarta, Indonesia"}>
            <h5> {item.position}</h5>
            {item.summary}
            <hr/>
          </Event>
    );
        return(
            <div className="section" id="experiences">
            <hr class="section-hr" />
            <h2>{works.company}</h2>
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

export default Experiences