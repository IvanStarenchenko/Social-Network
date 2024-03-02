import { Contacts } from "./UserInfo";
import { Field , reduxForm} from "redux-form"
import { Input } from "../../Common/FormsControls/FormsControls"
import { required , maxLenghtCreator } from "../../../utils/validators"
const UserAboutForm = (props) =>{
    const maxValueLenght = maxLenghtCreator(20)
        return <form onSubmit={props.handleSubmit}>
            <div className='user-info__about'>
               <span>Your Name:</span> <Field className='user-info__name' name= 'fullName' component={Input} placeholder = {props.profile.fullName} validate = {[required , maxValueLenght]} ></Field>
               <span>Tell us about you:</span><Field className='user-info__about' name = 'aboutMe'component={Input} placeholder = {props.profile.aboutMe} validate = {[required , maxValueLenght]}></Field>
               <span>Looking for a job:</span> <div className='user-info__details'>{!props.profile.lookingForAJob &&  <Field type= 'checkbox' name = 'lookingForAJob'component={Input}></Field>} </div>
               <span>Description:</span> <div className='user-info__description'>  <Field name = 'lookingForAJobDescription'component={Input}></Field> </div>
                <div className='user-info__contacts'>
                    <span>Contacts:</span> {Object.keys(props.profile.contacts).map(key =>
                         { return <div key = {key} className="contacts">{key}: <Field component={Input} placeholder = {key} name = {`contacts.${key}`}></Field></div>}) }
                </div>
            </div>
            {props.error &&  <div className="form-summury-errors">{props.error}</div>}
            <button className='editMode'>Save changes</button>
        </form> 
}

const UserAboutReduxForm = reduxForm({
    form:"editProfile",
    enableReinitialize: true,
    destroyOnUnmount: false
}
)(UserAboutForm)

export default UserAboutReduxForm
