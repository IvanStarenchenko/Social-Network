import '../Friends.css'

const possibleFriend = (props) => {
    return(
        <div>
            <li className='possible-friend__item'>
                <div className='possible-friend__avatar' alt='avatar'></div>
                <div className='possible-friend__description'>
                    <div className='possible-friend__name'>{props.name}</div>
                    <p className='possible-friend__subtitle'>{props.title}</p>
                </div>
            </li>
        </div>
    );
}
export default possibleFriend;