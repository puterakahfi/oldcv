import React, { Component } from 'react';
import './styles/TechnologyStack.css';



class TechnologyStack extends Component
{

    render()
    {

        return(

            <div id="technology-stack">
            <img src="/logo.svg" className="App-logo" alt="logo" />
            <img
              src="/vuejs.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/sass.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/php.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/laravel.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/symfony.png"
              className="App-logo no-animation"
              alt="logo"
            />
            <img
              src="/codeigniter.png"
              className="App-logo no-animation"
              alt="logo"
            />
          </div>

        );
    }
}


export default TechnologyStack;