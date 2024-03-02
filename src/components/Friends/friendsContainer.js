import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage,
        possibleFriendsData: state.possibleFriendsData
    }
}


const friendsContainer = connect(mapStateToProps)(Friends)

export default friendsContainer;