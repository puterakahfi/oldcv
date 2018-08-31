import React, { Component } from 'react';
import './styles/TechnologyStack.css';


class TechnologyStack extends Component
{

  constructor(props) {
    super(props);
    var stack = [
      {icon:'react.png',url:'https://reactjs.org/'},
      {icon:'vuejs.png',url:'https://vuejs.org'},
      {icon:'sass.png',url:'https://sass-lang.com/'},
      {icon:'php.png',url:'http://php.net/'},
      {icon:'laravel.png',url:'https://laravel.com/'},
      {icon:'symfony.png',url:'https://symfony.com/'},
      {icon:'codeigniter.png',url:'https://codeigniter.com/'},
      
    ];
    this.state = {message: 'Hello!', stack};
    // This line is important!
    this.handleHover = this.handleHover.bind(this);
  }


  handleHover() {
   // alert(this.state.stack[0].icon);
  }


    render()
    {

        return(

            <div id="technology-stack">

        { this.state.stack.map(stack => 
           <a href={stack.url} target="__blank" onMouseOver={this.handleHover} >
           <img src={stack.icon} className="App-logo" alt="logo" />
           </a>
        )}

          </div>

        );
    }
}


export default TechnologyStack;