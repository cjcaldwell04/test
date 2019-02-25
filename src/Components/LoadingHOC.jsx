import React, {Component} from 'react';
 
const LoadingHOC = (WrappedState) =>{
  return(
    class LoadingHOC extends Component{
      render(){
        return this.props.recipes.length === 0 ? <img className="isLoading" src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="Spinning Circle" /> : <WrappedState {...this.props}/>
      }
    }
  )
}
 
export default LoadingHOC