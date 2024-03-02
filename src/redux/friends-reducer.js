const FRIENDS_DATA = 'FRIENDS-DATA';
const POSSIBLE_FRIENDS_DATA = 'POSSIBLE-FRIENDS-DATA';


let initialState = {
    friendsData: [
      {id: 1 , name :'Ivan Starenchenko' ,  title : 'Hello, can you help me with ...' , status : 'Online'},
      {id: 2 , name :'XP9K_69' ,  title : 'It`s literaly me', status : 'Online'},
      {id: 3 , name :'Glory to Ukraine' ,  title : 'Wow , you know React like a ...', status : 'Online'},
      {id: 4 , name :'Vitalyi Maruha' ,  title : 'I am a duck', status : 'Offline'}
    ],
    possibleFriendsData: [
      {id: 1 , name: 'Varvar' ,   title: 'aramzamzam'},
      {id: 2 , name: 'Agutin' ,   title: 'aramzamzam'},
      {id: 3 , name: 'Leonid' ,   title: 'aramzamzam'},
      {id: 4 , name: 'Driga' ,    title: 'aramzamzam'},
      {id: 5 , name: 'Some One' , title: 'aramzamzam'},
      {id: 6 , name: 'Any Body' , title: 'aramzamzam'},
      {id: 7 , name: 'Un Known' , title: 'aramzamzam'},
    ]
  }

const friendReducer = (state = initialState , action) => {

    return state;
}


export let friendsDataActionCreator = () => {
    return {type: FRIENDS_DATA}
}

export let possibleFriendsDateActionCreator = () => {
  return {type: POSSIBLE_FRIENDS_DATA}
}


export default friendReducer;