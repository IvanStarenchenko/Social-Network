import { Field , reduxForm} from "redux-form"
import { required , maxLenghtCreator} from "../../../utils/validators"
import { Input } from '../../Common/FormsControls/FormsControls';
const maxLenght35 = maxLenghtCreator(35)
const MyPostsInput = (props) =>{
    return(
        <form className='profile__post' onSubmit={props.handleSubmit}>
            <label className='post-title'>My Posts</label>
            <Field className='post-input form-controll' placeholder='What`s new?' name = "postText" component={Input} validate = {[required , maxLenght35]}></Field>
            <button type='submit' className='post-button' >Send</button>
        </form>
    )
}

export const PostReduxForm = reduxForm({
    form: 'post'
})(MyPostsInput)

export default MyPostsInput