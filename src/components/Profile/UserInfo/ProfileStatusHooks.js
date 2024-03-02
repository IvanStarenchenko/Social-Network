import React , {useEffect, useState} from "react";

const ProfileStatusHooks = (props) => {

    let [editMode , setEditMode] = useState(false)

    let [statusText , setStatusText] = useState(props.statusText)

    const activateMode = () =>{
         setEditMode(true)
    }

    const deactivateMode = () =>{
        props.updateUserStatus(statusText)
        setEditMode(false)
   }

    const onStatusChange = (e) => {
        setStatusText(e.currentTarget.value)
    }

    useEffect(() => {
        setStatusText(props.statusText);
      }, [props.statusText]);
      

    return(
        <form>
            {editMode
                ? <input onBlur={deactivateMode} autoFocus ={true} onChange = {onStatusChange} value = {statusText}></input>
                : <div onDoubleClick={activateMode}>{props.statusText || "Upload your status"}</div>
            }
            {editMode
                ?   <button type = 'submit' onClick={deactivateMode}>Сохранить</button>
                :   <div></div>
            }
            
        </form>
    )
}


export default ProfileStatusHooks