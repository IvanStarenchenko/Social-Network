import React from "react";
import { connect } from "react-redux";
import './Login.css'
import { LoginReduxForm } from "./LoginForm";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
const Login = ({login , isLogin}) => {
   
    const onSubmit = (value) => {  
         login(value.email , value.password , value.remember)    
    }
    if(isLogin){
        return <Navigate to = "/Profile" />
    }
    return(
        <>  
            <h1 className="login-title">Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}



const mapStateToProps = (state) =>{
    return{
        isLogin: state.auth.isLogin
    }
}

// compose(
//     connect(mapStateToProps , {login}),
//     withAuthRedirect 
// )(Login)
export default connect( mapStateToProps, {login})(Login);