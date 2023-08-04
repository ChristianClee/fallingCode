import React, {useRef} from 'react';
import logo from '../assets/pictures/jpg/myPicture.png'



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
              <a href="/round" ref={clock1} className={(sessionStorage.getItem("active") == "1")? "active": "" } onClick={() => saveSection("1")}>Clock1</a>
            </li>
            <li>
              <a href="/blue" ref={clock2} className={(sessionStorage.getItem("active") == "2") ? "active" : ""} onClick={() => saveSection("2")}>Clock2</a>
            </li>
            <li>
              <a href="/rectangle" ref={clock3} className={(sessionStorage.getItem("active") == "3") ? "active" : ""} onClick={() => saveSection("3")}>Clock3</a>
            </li>
          </ul>
        </nav>
      </header>

    </>
    
  );
}
export default Header;