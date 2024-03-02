import MessagesContainer from './Messages/MessagesContainer';
import DialogsContainer from './Dialogs/DialogContainer';
import './Messanger.css'

const Messanger = () =>{
    return(
        <div className='messanger'>
            <DialogsContainer  />
            <MessagesContainer />
        </div>
    );
}
export default Messanger;