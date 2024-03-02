import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
        statusText:this.props.statusText
    } 

    activateEditMode = () => {
        this.setState({
            editMode:true,
        })

    }
    deactivateEditMode = (e) => {
        e.preventDefault();
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.statusText);
    }
    
    onStatusChange = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.statusText !== this.props.statusText){
            this.setState({
                statusText: this.props.statusText
             })
        }
    }

    render(){
        return(
            <form>
                {this.state.editMode
                ? <input onBlur={this.deactivateEditMode} value={this.state.statusText} autoFocus ={true} onChange = {this.onStatusChange}></input>
                : <div onDoubleClick={this.activateEditMode}>{this.props.statusText || "Upload your status"}</div>
                }
                {this.state.editMode
                ?   <button type = 'submit' onClick={this.deactivateEditMode}>Сохранить</button>
                :   <div></div>
                }
                
            </form>
        )
    }
}

export default ProfileStatus