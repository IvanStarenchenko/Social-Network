import { type } from "@testing-library/user-event/dist/type"
import { usersAPI , profileAPI } from "../Api/api"
import { updateObjInArray } from "../utils/object-helper"

const SHOW_MORE = 'SHOW-MORE'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING'
const TOGGLE_FOLLOW_IN_PROGGRES = 'TOOGLE-FOLLOW-IN-PROGGRES'
const SET_TOTAL_USERS = 'SET-TOTAL-USER'

let initialState =  {
 usersData: [],
 pageSize: 5,
 totalItemsCount: 0,
 currentPage: 1,
 isFatching : true,
 followingInProggres: [],
 followed: null,
 portionSize: null, 
}

let usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateObjInArray(state.usersData , action.userId , "id" , {followed: true} )
        }
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjInArray(state.usersData , action.userId , "id" , {followed: false} )
        }

        case SET_USERS: {
            return {
                ...state,
                usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FATCHING: {
            return {
                ...state,
                isFatching: action.isFatching
            }
        }
        case TOGGLE_FOLLOW_IN_PROGGRES: {
            return{
                ...state,
                followingInProggres: action.isFetching 
                ? [...state.followingInProggres.action.userId] 
                : state.followingInProggres.filter(id => id !== action.userId)
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalItemsCount: action.totalItemsCount  
            }
            
        }
      
        
        default:
            return state
    }
}

export const usersShowMore = () => {
    return {
        type: SHOW_MORE
    }
}

export const usersFollow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}

export const usersUnFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsers = (users) => {
    return{
        type: SET_USERS,
        users,
    }
   
} 

export const setCurrentPage = (currentPage) => {
    return{
        type: SET_CURRENT_PAGE,
        currentPage,
    }
    
}
export const setIsFatching = (isFatching) => {
    return{
        type:TOGGLE_IS_FATCHING,
        isFatching,
    }
}
export const setFollowProgress = (isFatching , userId) =>{
    return{
        type: TOGGLE_FOLLOW_IN_PROGGRES,
        isFatching,
        userId
    }
}

export const setTotalItemsCount = (totalItemsCount) => {
    return{
        type: SET_TOTAL_USERS,
        totalItemsCount,
    }
    
}

export const getUsers = (page , pageSize) => async (dispatch) => {
        dispatch(setIsFatching(true))
        dispatch(setCurrentPage(page))
           let responce = await usersAPI.getUsers(page , pageSize)
            dispatch(setUsers(responce.data.items));
            dispatch(setTotalItemsCount(responce.data.totalCount));
            dispatch(setIsFatching(false));
}


const followUnfollowFlow = async (dispatch , id , apiMethod , actionCreator) => {
    dispatch(setFollowProgress(true, id));

    let responce = await apiMethod(id)
    if (responce.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    
    dispatch(setFollowProgress(false, id));
}
export const setUnFollow = (id) => async (dispatch) =>{
   followUnfollowFlow(dispatch, id , usersAPI.setUnFollow.bind(usersAPI) , usersUnFollow)
}; 
export const setFollow = (id) => async (dispatch) => { 
    followUnfollowFlow(dispatch, id ,  usersAPI.setFollow.bind(usersAPI) , usersFollow)
};
  



export default usersReducer