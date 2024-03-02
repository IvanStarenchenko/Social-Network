import { stopSubmit } from 'redux-form';
import { profileAPI , loginAPI } from '../Api/api';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_LOGIN_PROFILE = 'auth/SET-LOGIN-PROFILE'

let initialState = {
   userId: null,
   isLogin: false,
   email:null,
   profileLoginUser: null,
}



const authReducer = ( state = initialState , action) => { 
    switch(action.type ) {
        case SET_USER_DATA: 
            return{
                ...state,
                ...action.data,
            }
        
            case SET_LOGIN_PROFILE: 
            return{
                ...state,
                profileLoginUser: action.profileLoginUser
            }
            
            
        default:
            return state;
    }
    
}


export const setAuthUserData = (userId , email , profileLoginUser , isLogin) =>{
    return {
        type: SET_USER_DATA,
        data : {userId , email , profileLoginUser , isLogin},
    }
} 

export const setLoginUserProfile = (profileLoginUser) => {
    return {
        type:SET_LOGIN_PROFILE,
        profileLoginUser,
    }
}


export const getMyselfAuthData = () =>  async (dispatch) =>
{
    let responce = await loginAPI.myself();
    
    if (responce.data.resultCode === 0) {
        let { id, profileLoginUser, email } = responce.data.data;
        dispatch(setAuthUserData(id, email, profileLoginUser, true));

        let responceUser = await profileAPI.getUserProfile(id)
        
        dispatch(setLoginUserProfile(responceUser.data));
        
    }
}
   
    


export const login = (email, password, rememberMe) => async (dispatch) =>
{
    let responce = await loginAPI.login(email, password, rememberMe);
    if (responce.data.resultCode === 0) {
        dispatch(getMyselfAuthData());
    }
    else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Incorrect email or sosi";
            let action = stopSubmit("login" , {_error: message})
            dispatch(action)   
    }
}

export const logout = () => async (dispatch) =>
{
    let responce = await loginAPI.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null , null , null , false ));
    }
}


export default authReducer;