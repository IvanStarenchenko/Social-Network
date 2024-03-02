import './MyPost.css';
import React from 'react';
import { PostReduxForm } from "./MyPostsForm";

// import { addPostActionCreator , onPostChangeActionCreator } from '../../../redux/profile-reducer';


const MyPosts = React.memo(props => {

    const addNewPost = (value) => {
        props.addPost(value.postText);
    }
    // const postsRevers = [...props.profilePage.postsData]
    return (
        <div>
            <PostReduxForm onSubmit={addNewPost}/>
            <div className='profile__post-content'>
                {props.postsData.map(p => (
                        <div key = {p.id} className='post-item'>
                        <div className='post-item__image'></div>
                        <div className='post-item__text'>
                            <div className='post-item__id id-item'>{p.id}</div>
                            <div className='post-item__name'>{p.name}</div>
                            <div className='post-item__message'>{p.message}</div>
                            <div className='post-item__like'>{p.likes}</div>
                        </div>
                    </div>
                ))
                }
                
            </div> 
        </div>
    );
})


export default MyPosts;

