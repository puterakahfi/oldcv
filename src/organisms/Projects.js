import React, { Component } from 'react';
import * as Brand from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Solid  from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {

    render() {

        return (


            <div className="container">
                <h3> <FontAwesomeIcon icon={Solid.faWrench} /> Projects</h3>

            </div>


        );

    }
}

export default Projects;