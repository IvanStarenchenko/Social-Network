import profileReducer, { addPost,deletePost } from "./profile-reducer";

let state = {
    postsData: [
    {id : 1 , name : 'Ivan' , message:'There is some good words for you' , likes: '<3 = 20'},
    {id : 2 , name : 'Bogdan' , message:'Fuck off man' , likes: '<3 = 10'},
    {id : 3 , name : 'Timur' , message:'Ahahah, fucking ukranian... I`m russian ahahah' , likes: '<3 = -10'}
    ],
  
}

test('length of posts should be incremented', () => {
    let action = addPost('Hello world')
   
    let newState = profileReducer( state , action )
    expect(newState.postsData.length).toBe(4) 
  });

test('expected message was added', () => {
let action = addPost('Hello world')

let newState = profileReducer( state , action )
expect(newState.postsData[3].message).toBe('Hello world') 
});
  

test('length of posts was decrement', () => {
    let action = deletePost(1)
    
    let newState = profileReducer( state , action )
    expect(newState.postsData.length).toBe(2) 
    });
  