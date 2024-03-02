import React from 'react';
import { connect } from 'react-redux';
import { addMessage  } from '../../../redux/messanger-reducer';
import Messages from "./Messages";
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class MessagesContainer extends React.Component {
    render(){
        return(
            <Messages {...this.props}  />
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        messangerPage: state.messangerPage,
        newMessageText: state.newMessageText,
    }
}



export default compose(
    connect(mapStateToProps , {addMessage}),
    withAuthRedirect 
)(MessagesContainer)
    
    


