import React from "react"
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
  return{
   isLogin:state.auth.isLogin,
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render(){
      if(!this.props.isLogin){ return <Navigate to = {'/Login'} />}
      
      return <Component {...this.props}/>
    } 
  } 

  let ConnectedAuthReddirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedAuthReddirectComponent
}
