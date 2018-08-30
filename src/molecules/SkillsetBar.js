import React, { Component } from 'react';
import { Progress} from 'reactstrap';


class SkillsetBar extends Component
{
    render()
    {

        return(

        <div className="skill-item">{this.props.label}
            <Progress  animated value={this.props.value}>{this.props.text} </Progress>
         </div>
        );
    }
}

export default SkillsetBar;