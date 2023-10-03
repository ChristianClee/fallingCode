import React, {useRef} from 'react';
import logo from '../../assets/pictures/jpg/myPicture.png'
import { NavLink } from 'react-router-dom';



const Header: React.FC = () => {
  const clock1 = useRef <HTMLAnchorElement>(null!)
  const clock2 = useRef <HTMLAnchorElement>(null!)
  const clock3 = useRef<HTMLAnchorElement>(null!)
  
  function saveSection(num:string) {
    sessionStorage.setItem("active", num)
  }
  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <div className='header__logo-picture'>
            <img className='ibg' src={logo} alt="no-picture" />
          </div>
          <h4>Ilya</h4>
        </div>
        <nav className='header__nav'>
          <ul>
            <li>
              <NavLink to="/" >Welcom</NavLink>
            </li>
            <li>
              <NavLink to="/round" >Clock1</NavLink>
            </li>
            <li>
              <NavLink to="/blue">Clock2</NavLink>
            </li>
            <li>
              <NavLink to="/rectangle" ref={clock3}>Clock3</NavLink>
            </li>
          </ul>
        </nav>
      </header>

    </>
    
  );
}
export default Header;