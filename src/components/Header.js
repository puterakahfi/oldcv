import React from 'react'

class Header extends React.Component{

    render(){
        return(
            <header id="header">
                <div className="content">
                    <h1><a href="#">Putera Kahfi</a></h1>
            <p>Web Developer, Trainer </p><br />
        <ul className="actions">
            <li><a href="#" className="button special icon fa-download">Download</a></li>
            <li><a href="#one" className="button icon fa-chevron-down scrolly">Learn More</a></li>
            </ul>
            </div>
            <div className="image phone"><div className="inner"><img src="images/screen.jpg" alt="" /></div></div>
            </header>
        )
    }

}

export default Header
