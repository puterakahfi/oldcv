import React, { Component } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";

import "./styles/Footer.css";
import SocialLinks from '../molecules/SocialLinks';


class Footer extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {

            loading: false,
        };
      }
  
    render()
    {
        return(
            <footer>
            <SocialLinks />
            <h6>
                Copyleft © 2018 Putera Kahfi
            </h6>
            </footer>

        );
    }
}

export default Footer;