import "./Messages.css"
import React from 'react';
import {MessagesReduxForm} from './MessagesForm'
import {addMessage} from '../../../redux/messanger-reducer'
const Messages = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.messageText)
     }
    return(
        <div className='messages'>
            {props.messangerPage.messagesData.map(m => (
                <div className="messages__content">
                    <div className='message'>
                        <div className="message__image"></div>
                        <div className="message__content">
                            <div className='message-item__id id-item'>{m.id}</div>
                            <div className="message__name">{m.name}</div>
                            <div className="message__text">{m.text}</div>
                        </div>
                    </div>                
                </div>
            ) )}
           <MessagesReduxForm onSubmit={addNewMessage} addMessage = {addMessage}/>
        </div>
        );
}


export default Messages;