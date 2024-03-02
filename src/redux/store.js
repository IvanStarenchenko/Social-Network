//   import profileReducer from "./profile-reducer";
//   import messangerReducer from "./messanger-reducer";
//   import friendsReducer from "./friends-reducer";

//   let store = {
//     _state : {
//       profilePage: {
//           postsData: [
//           {id : 1 , name : 'Ivan' , message:'There is some good words for you' , likes: '<3 = 20'},
//           {id : 2 , name : 'Bogdan' , message:'Fuck off man' , likes: '<3 = 10'},
//           {id : 3 , name : 'Timur' , message:'Ahahah, fucking ukranian... I`m russian ahahah' , likes: '<3 = -10'}
//           ],
//           newPostText: ''
//       },
//       messangerPage: {
//         dialogsData: [
//           {id: 1 , name :'Ivan Starenchenko' ,  prewiew : 'Hello, can you help me with ...'},
//           {id: 2 , name :'XP9K_69' ,  prewiew : 'It`s literaly me'},
//           {id: 3 , name :'Glory to Ukraine' ,  prewiew : 'Wow , you know React like a ...'},
//           {id: 4 , name :'Fuck Russia' ,  prewiew : 'Fuck Russia'},
//           {id: 5 , name :'Belgorod is Ukraine' ,  prewiew : 'I want to be free'},
//           {id: 6 , name :'Timur Mustafaev' ,  prewiew : 'Crimea is a shit'},
//           {id: 7 , name :'Bogdan Stadnik' ,  prewiew : 'Hello, can you give me napass'},
//           {id: 8 , name :'Vitalyi Maruha' ,  prewiew : 'I am a duck'}
//         ],
//         messagesData: [
//         {id : 1 , name : 'Ivan' , text: 'Hello, can you help me with math lab? Thx btw'},
//         {id : 2 , name : 'You' , text: 'Yeah , why not. Today at 8 pm ok?'},
//         {id : 3 , name : 'Ivan' , text: 'Offcourse , as you say , but if you can later I will take it)'},
//         {id : 4 , name : 'Ivan' , text: 'Oh, ok. Write when you want then'}
//         ],
//         newMessageText : '',
//       },
//       friendsPage: {
//         friendsData: [
//           {id: 1 , name :'Ivan Starenchenko' ,  title : 'Hello, can you help me with ...' , status : 'Online'},
//           {id: 2 , name :'XP9K_69' ,  title : 'It`s literaly me', status : 'Online'},
//           {id: 3 , name :'Glory to Ukraine' ,  title : 'Wow , you know React like a ...', status : 'Online'},
//           {id: 4 , name :'Vitalyi Maruha' ,  title : 'I am a duck', status : 'Offline'}
//           ],
//       }
//     },
//     _callSubscriber(){
//     },

//     subscribe(observer){
//       this._callSubscriber = observer;
//     },
//     getState(){
//       return this._state;
//     },

//     dispatch(action){
//       this._state.profilePage = profileReducer(this._state.profilePage , action);
//       this._state.messangerPage = messangerReducer(this._state.messangerPage , action);
//       this._state.friendsPage = friendsReducer(this._state.friendsPage , action);
//       this._callSubscriber(this._state);
//     },

//   }

 
// export default store;