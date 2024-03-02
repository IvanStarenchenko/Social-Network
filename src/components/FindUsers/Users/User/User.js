import React from "react"
import unFollowedUser from '../../../../img/user-image/unfollowed.jpg'
import followedUser from '../../../../img/user-image/followed.jpg'
import '../Users'
import { NavLink } from "react-router-dom"
const User = ({ usersData, followingInProggres, setUnFollow, setFollow }) => (
  <>
    {usersData.map(u => (
      <div key={u.id} className='user'>
        <div className="user-left">
          <NavLink to={'/Profile/' + u.id}>
            <img className="user-image" src={u.followed ? followedUser : unFollowedUser} alt="avatar"></img>
          </NavLink>
          {u.followed
            ? <button disabled={followingInProggres.some(id => id === u.id)} onClick={() => { setUnFollow(u.id) }} className="unfollow-button">Unfollow</button>
            : <button disabled={followingInProggres.some(id => id === u.id)} onClick={() => { setFollow(u.id) }} className="follow-button">Follow</button>
          }
        </div>
        <div className="user-body">
          <div className="user-body__left">
            <div className="user__name">{u.name}</div>
            <div className="user__status">{u.status}</div>
          </div>
          <div className="user-body__right">
            <div className="user__country">{"u.location.country"}</div>
            <div className="user__city">{"u.location.city"}</div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default User