import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid from "@fortawesome/free-solid-svg-icons";

class CodingSnapshot extends Component{

    render()
    {
        return(
            <div>
                <h2> <FontAwesomeIcon small icon={ Solid.faCode }></FontAwesomeIcon>Coding Activity</h2> <hr/>
                <figure><embed src="https://wakatime.com/share/@puterakahfi/4850fd01-3b5e-4922-b350-101d7b6378d1.svg"></embed></figure>
            </div>
        );
    }
}

export default CodingSnapshot;