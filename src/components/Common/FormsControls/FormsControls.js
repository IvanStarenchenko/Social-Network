import React from "react"
import styles from './FormsControls.css'
export const Input = ({input , meta: {touched , error} , ...props}) => {
    const hasError = touched && error; 
    return(
        <div className = {styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <span className="error-message">{error}</span>}
            
        </div>
    )
}