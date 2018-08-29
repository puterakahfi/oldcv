import React, { Component } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brand from "@fortawesome/free-brands-svg-icons";

import "./styles/Footer.css";


class Footer extends Component
{
    constructor(props) {
        super(props);
    
        this.state = {

            loading: false,
            links:[
                {icon:Brand.faFacebook, link:'https://www.facebook.com/codejunior'},
                {icon:Brand.faLinkedin},
                {icon:Brand.faGithubSquare}
            ],   
        };
      }
  
    render()
    {
        return(
            <footer>
                <ul>

                    {this.state.links.map(function(item){
                        return <li>
                            <a href={item.link} target="_blank"><FontAwesomeIcon size="2x" icon={item.icon} /></a>
                        </li>
                    })
                }
                  
                    
                </ul>
            </footer>

        );
    }
}

export default Footer;