import React, {Component, Fragment} from 'react';
import './styles/Experiences.css';
import { Timeline, Event } from "react-timeline-scribble";

class Experiences extends Component
{
    render(){
        return(
            <div className="section" id="experiences">
            <hr class="section-hr" />
            <h2>{this.props.label}</h2>
            <hr/>


            <Fragment>

    <Timeline>
      <Event interval={"2013 – Current"} title={"PT.Visi Multimedia Aditama"} subtitle={"Yogyakarta, Indonesia"}>
        <h5> // Web Developer</h5>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. 
        <hr/>
      </Event>
      <Event interval={"2010 – 2013"} title={"PT.Gamatechno Indonesia"} subtitle={"Yogyakarta, Indonesia"}>

      <h5> // Web Developer</h5>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. 

        <hr/>
      </Event>
    </Timeline>
  </Fragment>
  
            </div>
        )
    }
}

export default Experiences