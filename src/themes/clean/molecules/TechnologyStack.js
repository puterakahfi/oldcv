import React, { Component } from 'react';
import './styles/TechnologyStack.css';


class TechnologyStack extends Component
{
    render()
    {
      const listStack = this.props.technologyStack.items.map(stack => 
        <a href={stack.url} target="__blank"  >
        <img src={stack.icon} className="App-logo" alt="logo" />
        </a>
     )
        return(
            <div id="technology-stack">
            {listStack}
          </div>

        );
    }
}


export default TechnologyStack;