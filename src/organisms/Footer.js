import React, { Component } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";

import "./styles/Footer.css";


class Footer extends Component
{
    render()
    {
        return(
            <footer>
                <ul>
                    <li>
                        <FontAwesomeIcon size="2x" icon={Brand.faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon size="2x" icon={Brand.faLinkedin} />
                    </li>
                    <li>
                        <FontAwesomeIcon size="2x" icon={Brand.faGithubSquare} />
                    </li>

                </ul>
            </footer>

        );
    }
}

export default Footer;