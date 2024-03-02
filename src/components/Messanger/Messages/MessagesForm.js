import { Field , reduxForm} from "redux-form"
import { Input } from "../../Common/FormsControls/FormsControls"
import { required , maxLenghtCreator } from "../../../utils/validators"
const MessagesForm = (props) => {
    const maxMessageLenght = maxLenghtCreator(20)
    return (
        <form className="messages__input" onSubmit={props.handleSubmit}>
            <Field className="message-input" placeholder="Enter your message" name="messageText" component={Input} validate = {[required , maxMessageLenght]} ></Field>
            <button className="message-button" onClick={props.addMessage}>Send message</button>
        </form>
    ) 
}

export const MessagesReduxForm = reduxForm({
    form:"messages"
}
)(MessagesForm)
