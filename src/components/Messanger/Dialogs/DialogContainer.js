import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { setUsers } from "../../../redux/users-reducer";
import React from "react";
import axios from 'axios';



class DialogContainer extends React.Component{
     componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
          this.props.setUsers(response.data.items)
        })  
      }
    render(){
        return(
            <Dialogs {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        messangerPage: state.messangerPage
    }
}

    


export default connect(mapStateToProps , {setUsers})(DialogContainer) 
    

    
