import { Field, reduxForm } from "redux-form"
import { required , maxLenghtCreator} from "../../utils/validators"
import {Input} from '../Common/FormsControls/FormsControls'
const LoginForm = ({handleSubmit , error}) => {
    const maxPassLenght = maxLenghtCreator(25) 
    const maxEmailLenght = maxLenghtCreator(25)
    return(
         <form className="form" onSubmit={handleSubmit}>
                <div className="input-block">
                    <label>Email:</label>
                    <Field className="login-input" placeholder="Enter your login" name={"email"} component={Input} validate = {[required , maxEmailLenght]}></Field>
                </div>
                <div className="input-block">
                    <label>Password:</label>
                    <Field className="login-input" placeholder="Enter your password" name={"password"} component={Input} validate = {[required , maxPassLenght]}></Field>  
                </div>
                <label className="checkbox-block"> Remember me
                    <Field className="checkbox" type='checkbox' name={"remember"} component={Input}></Field>
                </label>
                {error &&  <div className="form-summury-errors">{error}</div>}
               
                <button className="login-button">Login</button>
        </form>
        )
}
 
export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


export default LoginForm