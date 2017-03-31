import React from 'react'
import logo from '../images/pic01.jpg'
class Achievements extends React.Component{


	render(){
		return(
			<section className="spotlight">
				<div className="image"><img src={logo} alt="" /></div>
			<div className="content">
				<h2><i className="ion-ribbon-a"> </i> Achievements</h2>
			<p>Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.</p>

			</div>
			</section>

		)

	}
}


export default Achievements





