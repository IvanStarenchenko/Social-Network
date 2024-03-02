import { connect } from 'react-redux';
import React, { useEffect,useRef } from 'react';
import Profile from './Profile';
import {getUserProfile , getUserStatus , updateUserStatus , saveProfileImage , changeProfileInfo} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import Preloader from '../Common/Preloader/Preloader';

export function withRouter(Children){
  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}

const ProfileContainer = (props) => {
  const { userId } = props.match.params;
  const prevPropsRef = useRef();

  const refreshProfile = () => {
    if (!userId) {
      props.getUserProfile(30598);
      props.getUserStatus(30598);
    } else {
      props.getUserProfile(userId);
      props.getUserStatus(userId);
    }
  };

  useEffect(() => {
    refreshProfile();
  }, [userId]); // Зависимость от userId

  // useEffect(() => {
  //   // componentDidUpdate
  //   if (prevPropsRef.current && prevPropsRef.current.match.params.userId !== userId) {
  //     refreshProfile();
  //   }
  //   prevPropsRef.current = props;
  // });

    return(
      <Profile {...props} isLogin = {props.isLogin}profile = {props.profile} statusText ={props.status} updateUserStatus = {props.updateUserStatus} isOwner = {!userId} saveProfileImage = {props.saveProfileImage} changeProfileInfo = {props.changeProfileInfo} />  
    )  
  
   
}


let mapStateToProps = (state) => {
  return{
   profile: state.profilePage.profile,
   status:  state.profilePage.statusText,
   isLogin : state.auth.isLogin,
   userId : state.auth.userId,
  }
}




export default compose(
  connect(mapStateToProps , {getUserProfile , getUserStatus , updateUserStatus , saveProfileImage, changeProfileInfo}),
  withRouter,
  // withAuthRedirect,
  
)(ProfileContainer);
  
