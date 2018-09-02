import React from 'react'
import Ionicon from 'react-ionicons'

const Awards = (props) =>
{
    return (

        <div className="section" id="awards">
        <Header title={props.title} />
        </div>
    )
}


const Header = (props) => {

    return(
        <div class="section-header">
        <hr className="section-hr"/>
         <h2> <span>{props.title}</span></h2> <hr />
        </div>
    )

}

export default Awards;