import ProfileImage from "./ProfileImage/ProfileImage";
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";
const Profile = (props) => {
  if(!props.isLogin){
    return <Navigate to = "/Login" />
}
    return(
        <div className='profile'>
          <ProfileImage />
          <UserInfo profile={props.profile} statusText = {props.statusText} updateUserStatus = {props.updateUserStatus} isOwner = {props.isOwner}  saveProfileImage = {props.saveProfileImage}  profileImage = {props.profileImage} changeProfileInfo = {props.changeProfileInfo}/>
          <MyPostsContainer />
        </div>
    );
}
export default Profile