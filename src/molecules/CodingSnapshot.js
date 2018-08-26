import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";
import Typing from 'react-typing-animation';
import './styles/CodingSnapshot.css';

class CodingSnapshot extends Component{

    constructor(props) {
        super(props);
    
        this.state = {wakatime: 'https://wakatime.com/share/@puterakahfi/4850fd01-3b5e-4922-b350-101d7b6378d1.svg'};
      }

    render()
    {
        return(
            <div className="section" id="coding-snapshot">
            <hr className="section-hr" />
                 <h2> 
                     <span>{this.props.title}</span>
                </h2> 
                <hr/>
                <figure><embed src={this.state.wakatime}></embed></figure>
            </div>
        );
    }
}

export default CodingSnapshot;