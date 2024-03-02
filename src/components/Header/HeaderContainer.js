import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import {logout} from '../../redux/auth-reducer'



class HeaderContainer extends React.Component{

  render(){
    return(
      <Header {...this.props}/>  
    )
    
  }
   
}

let mapStateToProps = (state) => {
  return{
    isLogin: state.auth.isLogin,
    login: state.auth.login,
    profileLoginUser: state.auth.profileLoginUser,

  }
}



export default connect(mapStateToProps , {logout})(HeaderContainer);
  
