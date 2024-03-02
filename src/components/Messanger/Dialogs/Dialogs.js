import "./Dialogs.css"
import { NavLink } from "react-router-dom";
import React from "react"
import followedUser from '../../../img/user-image/followed.jpg'

const Dialogs = (props) => {
    
    return(
        <div className="dialogs">
            {props.messangerPage.dialogsData.map( m => (
                <NavLink to={"/Messanger/"}>
                    <div key = {m.id} className='dialog'>
                        <img className="dialog__image" src = {followedUser}></img>
                        <div className="dialog__content">
                            <div className="dialog-item__id id-item">{m.id}</div>
                            <div className="dialog__name">{m.name}</div>
                            <div className="dialog__preview">{m.prewiew}</div> 
                        </div>
                    </div>
                </NavLink>
            ) 
            )}    
        </div>
    );
    
}

 export default Dialogs;