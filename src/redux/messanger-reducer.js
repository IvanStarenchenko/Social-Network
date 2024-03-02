const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_USERS = 'SET-USERS';
let initialState = {
  dialogsData: [
  ],
  messagesData: [
  {id : 1 , name : 'Ivan' , text: 'Hello, can you help me with math lab? Thx btw'},
  {id : 2 , name : 'You' , text: 'Yeah , why not. Today at 8 pm ok?'},
  {id : 3 , name : 'Ivan' , text: 'Offcourse , as you say , but if you can later I will take it)'},
  {id : 4 , name : 'Ivan' , text: 'Oh, ok. Write when you want then'}
  ],
 
}

const messangerReducer = (state = initialState, action) => {
    switch (action.type){
     
      case ADD_MESSAGE:
        return  {
          ...state,
          messagesData: [...state.messagesData , {id : 5 , name : 'SirGay' , text: action.messageText} ],
        } 

        case SET_USERS: {
          return {
              ...state,
              dialogsData: [...action.users]
          }
      }
      
      default:
            return state
    }
}

export const addMessage = (messageText) => {
    return {
      type: ADD_MESSAGE,
      messageText
    }
  }
  

export const setUsersActionCreator = (users) => {
    return{
        type: SET_USERS,
        users,
    }
   
}

export default messangerReducer;