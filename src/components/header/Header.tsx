import React, {useRef} from 'react';
import logo from '../../assets/pictures/jpg/myPicture.png'



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
          <div className='header__container-contacts'>
            <p>8-977-439-34-18</p>
            <p>ilya.mishkov@gmail.com</p>
          </div>
          
        </div>
        <nav className='header__nav'>
        </nav>
      </header>

    </>
    
  );
}
export default Header;