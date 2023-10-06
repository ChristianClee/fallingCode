import React from 'react';
import { Link } from 'react-router-dom';
import styleLink from "./LinkPortfolio.module.scss"
import styleMain from "./Greeting.module.scss"

const Greeting:React.FC = () => {
  return (
    <nav className={styleMain.wrapper}>
      <LinkPortfolio link={"/clocks"}>clock</LinkPortfolio>
      <LinkPortfolio link={"/fallingCode"}>falling code</LinkPortfolio>
    </nav>
  );
}
export default Greeting;


interface Ilink { children: string, link: string }

const LinkPortfolio: React.FC<Ilink> = ({ children, link }) => {
  return (
    <Link className={styleLink.wrapper} to={link}>{children}</Link>
  )
}