import { NavLink } from 'react-router-dom';
import './Header.css';
import followedUser from '../../img/user-image/followed.jpg'
import unFollowedUser from '../../img/user-image/unfollowed.jpg'
const Header = (props) =>{
    return(
        <header className='header'>
          <div className='header__content'>
          {props.isLogin
                  ? <img src = {followedUser} className='header__logo'></img>
                  
                  : <img src = {unFollowedUser} className='header__logo'></img>
                }
              <nav className='header__nav'>
                <ul className='header__list'>
                  <li className='header__item'>
                    <button className='header__link'>Link#1</button>
                  </li>
                  <li className='header__item'>
                    <button className='header__link'>Link#2</button>
                  </li>
                  <li className='header__item'>
                    <button className='header__link'>Link#3</button>
                  </li>
                </ul>
              </nav> 
              <div className='header__actions'>
              {!props.isLogin   
                ?  <NavLink to={'/login'} className='login'>Login</NavLink>
                :  <NavLink to={'/login'} className='logout' onClick={props.logout}> {props.profileLoginUser?.fullName ?? 'Loading...' }   </NavLink> 
              }
                
              </div>
          </div>
        </header>
    );
}
export default Header;