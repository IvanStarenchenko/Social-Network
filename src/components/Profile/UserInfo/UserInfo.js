import Preloader from '../../Common/Preloader/Preloader'
import './UserInfo.css';
import notFound from '../../../img/user-image/not-found.jpg'
import ProfileStatusHooks from './ProfileStatusHooks';
import UserAboutReduxForm from './userAboutForm';
import { useState } from 'react';
const UserInfo = (props) =>{
    const [editMode , changeEditMode] = useState(false)
    const activateMode = () => {
        changeEditMode(true)
    }
    if (!props.profile){
        return <Preloader />
    }
  
    const onMainImageSelected = (e) => {
        if (e.target.files.length){
            props.saveProfileImage(e.target.files[0])
        }    
    }
    const onSubmit = (formData) => {
    props.changeProfileInfo(formData).then(() => {
        changeEditMode(false) 
    })
    }
    return(
        <div className='profile__user user-info'>
            <div className='profile__image-block'>
                <img src ={props.profile.photos.large || notFound} className="user-info__image"></img>
                {props.isOwner && <input className='profile__change-photo' type ='file' onChange = {onMainImageSelected}/>}
            </div>
            {editMode 
                ? <UserAboutReduxForm initialValues = {props.profile} profile = {props.profile} onSubmit = {onSubmit}/>
                : <UserAbout profile = {props.profile}  activateMode = {activateMode} isOwner = {props.isOwner} updateUserStatus = {props.updateUserStatus} statusText = {props.statusText}/>
            } 
        </div> 
    );

}


export const UserAbout = (props) => {
    return(
        <>
        <div className='user-info__about'>
            <div className='user-info__main'>
                <div className='user-info__name'>{props.profile.fullName}</div>
                <div className='user-info__status'>
                    <ProfileStatusHooks statusText = {props.statusText} updateUserStatus = {props.updateUserStatus}/>
                </div>    
            </div>
    
            <div className='user-info__aboutme'><span>About Me:</span>{props.profile.aboutMe || 'Nothing'}</div>   
            <div className='user-info__details'><span>Looking For A Job:</span>{props.profile.lookingForAJob && 'Yes' || "No"}</div>
            <div className='user-info__details'><span>Descriptio:</span>{props.profile.lookingForAJobDescription || 'No Description' }</div>
            <div className='user-info__contacts'>
                <span>Contacts:</span> {Object.keys(props.profile.contacts).map(key => { return <Contacts key = {key} contactsTitle = {key} contactsValue = {props.profile.contacts[key]}/>}) }
            </div>
        </div>
        {props.isOwner && <button className='editMode' onClick={props.activateMode}>Change Info</button>}
        
        </>
    )
}



export const Contacts = ({contactsTitle , contactsValue}) => {
    return <div> {contactsTitle}: {contactsValue || " I have not this social ^_^"}</div>
}
export default UserInfo;
