import Friend from './friend/friend';
import PossibleFriend from './friend/possible-friends';
const Friends = (props) => {
    let state = props.friendsPage;

    let friendElements = 
    state.friendsData.map(
        friendsItem => <Friend rey = {friendsItem.id} name={friendsItem.name} title={friendsItem.title} id={friendsItem.id} status={friendsItem.status} />
    );

    let possibleFriendElements = 
    state.possibleFriendsData.map(
        possibleFriendsItem => <PossibleFriend name={possibleFriendsItem.name} title={possibleFriendsItem.title} id={possibleFriendsItem.id} />
    );
    
    return (
        <div className='friends-page'>
            <div className='friends'>
                <ul className='friends__list'>
                    {friendElements}
                </ul>
            </div>
            <div className='possible-friends'>
            <div className='possible-friend__title'>Возможные друзья</div>
                <ul className='possible-friends__list'>
                    {possibleFriendElements}
                </ul>
            </div>
        </div>
    );
}
export default Friends;

