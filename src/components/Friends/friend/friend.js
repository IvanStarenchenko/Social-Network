import '../Friends.css'

const Friend = (props) => {
    return(
        <div>
            <li className='friend__item'>
                <div className='friend__avatar' alt='avatar'></div>
                <div className='friend__description'>
                    <div className='friend__name'>{props.name}</div>
                    <p className='friend__title'>{props.title}</p>
                </div>
                <div className='friend__status online'>{props.status}</div>
            </li>
        </div>
    );
}
export default Friend;
