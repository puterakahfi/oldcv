import React, { Component } from 'react';
import { Progress} from 'reactstrap';


class SkillsetBar extends Component
{
    render()
    {

        return(
            <div className="skillset-bar">
                <h6>{this.props.label}</h6>
            <Progress  value={this.props.value}>{this.props.text} </Progress>
         </div>
        );
    }
}

export default SkillsetBar;