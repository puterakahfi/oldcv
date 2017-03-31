import React, { Component } from 'react';
import Header from './components/Header';
import Achievements from './components/Achievements'
import './App.css';
import './css/main.css';
import './css/ionicons.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
      return (
      <div className="App">
            
          <Header />

<section id="two" className="wrapper">

				<div className="inner alt">

			<Achievements />      
	</div>
</section>
</div>
    );
  }
}

export default App;
