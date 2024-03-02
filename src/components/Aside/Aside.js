import './Aside.css';
import { NavLink } from 'react-router-dom';
const Aside = () =>{
    return(
        <aside className='aside'>
          <nav className='aside__nav'>
            <ul className='aside__list'>
              <li className='aside__item'>
                <NavLink className='aside__link' to = '/Profile'>Home</NavLink>
              </li>
              <li className='aside__item'>
                <NavLink className='aside__link' to = '/Messanger'>Message</NavLink>
              </li>
              <li className='aside__item'>
                <NavLink className='aside__link' to = '/Friends'>Friends</NavLink>
              </li>
              <li className='aside__item'>
                <NavLink className='aside__link' to = '/Music'>Music</NavLink>
              </li>
              <li className='aside__item'>
                <NavLink className='aside__link' to = '/FindUser'>Find Users</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
    );
}
export default Aside;