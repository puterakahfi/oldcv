import React, { Component } from 'react';
import './styles/TechnologyStack.css';


class TechnologyStack extends Component
{

    render()
    {

        return(

            <div id="technology-stack">
          
          <a href="https://reactjs.org" target="__blank">
          <img src="/react.png" className="App-logo" alt="logo" />
          </a>

          <a href="https://vuejs.org" target="__blank">
          <img
              src="/vuejs.png"
              className="App-logo no-animation"
              alt="logo" />

          </a>
           
           <a href="https://sass-lang.com" target="_blank">
           
           <img
              src="/sass.png"
              className="App-logo no-animation"
              alt="logo"
            />
           </a>

           <a href="http://php.net" target="_blank">
           
           <img
              src="/php.png"
              className="App-logo no-animation"
              alt="logo"
            />
           </a>


            <a href="https://laravel.com" target="_blank">
            <img
              src="/laravel.png"
              className="App-logo no-animation"
              alt="logo"
            />
            </a>

            <a href="https://symfony.com" target="_blank">
            <img
              src="/symfony.png"
              className="App-logo no-animation"
              alt="logo"
            />
            </a>

            <a href="https://www.codeigniter.com" target="_blank">
            <img
              src="/codeigniter.png"
              className="App-logo no-animation"
              alt="logo" 
            />
            </a>
          </div>

        );
    }
}


export default TechnologyStack;