import React, {Component} from 'react'

import './styles/LinksSideMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Brand from "@fortawesome/free-brands-svg-icons"


class LinksSideMenu extends Component{

    constructor(props) {
        super(props);
    
        this.state = {

            loading: false,
            links:[
                {icon:Brand.faFacebook, link:'https://www.facebook.com/codejunior'},
                {icon:Brand.faLinkedin, link:'https://www.linkedin.com/in/putera-kahfi-52663b48'},
                {icon:Brand.faGithubSquare, link:'https://github.com/puterakahfi/'}
            ],   
        };
      }
  

    render()
    {
        return(
            <div id="links-side-menu">
            <ul>
            {this.state.links.map(function(item){
                return <li>
                    <a href={item.link} target="_blank"><FontAwesomeIcon size="2x" icon={item.icon} /></a>
                </li>
            })
            }
        </ul>
            </div>

        )
    }
}

export default LinksSideMenu