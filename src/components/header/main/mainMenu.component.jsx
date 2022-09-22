import React from 'react';
import images from '../../../assets/images';
import Button from '../../../elements/button/button.component';
import './mainMenu.scss';
import { Link, animateScroll as scroll } from "react-scroll";

const MainMenu = () => {
  return (

        <div className="nav">
          <Link to="hero" className="nav-link" smooth={true}  offset={-130} duration={500}>Home</Link>
          <Link to="faqs" className="nav-link" smooth={true} offset={-130} duration={500}>Our mission</Link>
          <Link to="footer" className="nav-link" smooth={true} offset={-130} duration={500}>Places</Link>
          <Link to="team" className="nav-link" smooth={true} offset={-130} duration={500}>Team</Link>
        </div>

  )
}

export default MainMenu;