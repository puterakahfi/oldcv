import React, { Component} from 'react'


const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );


  
const LoaderHOC = (loadingProp) => (WrappedComponent) => {

    return class LoaderHOC extends Component {
        
       
        render() {
            
            return isEmpty(this.props[loadingProp]) ? <div className="loader" > <h1>Loading Component...</h1> </div> : <WrappedComponent {...this.props} />;        }

    }

}

export default LoaderHOC;