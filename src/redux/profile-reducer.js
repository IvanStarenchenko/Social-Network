import {profileAPI } from "../Api/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_PROFILE_IMAGE = 'SET-PROFILE-IMAGE'
const SET_STATUS = 'SET-STATUS';
const SET_PROFILE = 'SET-PROFILE';
const DELETE_POST = 'DELETE-POST'
// import store from "./state";

let initialState = {
    postsData: [
    {id : 1 , name : 'Ivan' , message:'There is some good words for you' , likes: '<3 = 20'},
    {id : 2 , name : 'Bogdan' , message:'Fuck off man' , likes: '<3 = 10'},
    {id : 3 , name : 'Timur' , message:'Ahahah, fucking ukranian... I`m russian ahahah' , likes: '<3 = -10'}
    ],
    newPostText: '',
    statusText: '',
    profile: null,
}



const profileReducer = ( state = initialState , action) => {
       
    switch(action.type ) {
        case ADD_POST: 
        return{
            ...state,
            postsData: [...state.postsData , {id : 4 , name : 'SirGay' , message: action.postText , likes: '<3 = -30'} ],
        }
          
        case SET_STATUS:
            return{
                ...state,
                statusText : action.status
        }
        case SET_PROFILE: 
            return{
                ...state,
               profile: action.profile
            }
        case DELETE_POST:
            return{
                ...state,
                postsData: state.postsData.filter( p => p.id !== action.id),
            }
            
        case SET_PROFILE_IMAGE: {
            return {
                ...state,
                profile: {...state.profile , photos: action.photos}   
            }
        }   
        default:
            return state;
    }   
}

export const addPost = (postText) => { // ФУНКЦИЯ КОТОРАЯ ВОЗВРАЩАЕТ ОДНО ЛИШЬ ЗНАЧЕНИЕ, МОЖНО ПИСАТЬ БЕЗ RETURN, А ФИГУРНЫЕ СКОБОЧКИ ОБВОРАЧИВАЕМ В КРУГЛЫЕ. НО Я ОСТАВЛЮ КАК ЕСТЬ
    return { 
        type: ADD_POST,
        postText
    }
}

export const deletePost = (id) => { // ФУНКЦИЯ КОТОРАЯ ВОЗВРАЩАЕТ ОДНО ЛИШЬ ЗНАЧЕНИЕ, МОЖНО ПИСАТЬ БЕЗ RETURN, А ФИГУРНЫЕ СКОБОЧКИ ОБВОРАЧИВАЕМ В КРУГЛЫЕ. НО Я ОСТАВЛЮ КАК ЕСТЬ
    return { 
        type: DELETE_POST,
        id
    }
}
   
export const setUserProfile = (profile) => {
    return {
        type:SET_PROFILE,
        profile,
    }
}

export const setStatusText = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}


// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         profileAPI.getUserProfile(userId).then(data => {
//             dispatch(setUserProfile(data));
//         })
//     }
// }
export const getUserProfile = (userId) => async (dispatch) =>{
    let responce = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(responce.data));
}

export const getUserStatus = (id) => async dispatch => {
    let responce = await profileAPI.getStatus(id)
    dispatch(setStatusText(responce.data));  
}

export const updateUserStatus = (status) => async (dispatch) => {
    try{
        let responce = await profileAPI.updateStatus(status)
        if(responce.data.resultCode === 0){
            dispatch(setStatusText(status));
        }
    }
    catch(error){
        
    }
  
}

export const setProfileImage = (photos) => {
    return{
        type: SET_PROFILE_IMAGE,
        photos
    }
    
}

export const saveProfileImage = (image) => async (dispatch) =>{
    let responce = await profileAPI.setProfileImage(image)
    if(responce.data.resultCode === 0){
        dispatch(setProfileImage(responce.data.data.photos))
    }
}

export const changeProfileInfo = (profile) => async (dispatch , getState) => {
    const userId = getState().auth.userId
    let responce = await profileAPI.saveProfileChanges(profile)
    if (responce.data.resultCode === 0){
        dispatch(getUserProfile(userId))
    }
    else{
        let parsedArray = responce.data.messages[0].split('->')
        let action = stopSubmit("editProfile" , {_error:  responce.data.messages[0]})
        dispatch(action)   
        return Promise.reject(responce.data.messages[0])
    }
}


export default profileReducer;