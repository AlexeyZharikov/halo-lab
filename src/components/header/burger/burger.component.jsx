import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import logo from '../../../assets/header/Logo.png';
import './burger.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from '../../../elements/button/button.component';

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div id="burger-inner">
        <Menu right noOverlay>
        <div className="burger-logo">
            <img src={logo} alt="logo" />
          </div>
          <Link id="home" className="menu-item" to="hero" smooth={true}  offset={-130} duration={500}>Home</Link>
          <Link id="mission" className="menu-item" to="faqs" smooth={true}  offset={-130} duration={500}>Our mission</Link>
          <Link id="footer" className="menu-item" to="footer" smooth={true}  offset={-130} duration={500}>Places</Link>
          <Link id="team" className="menu-item" to="team" smooth={true}  offset={0} duration={500}>Team</Link>
          <div className="header-btn">
            <Button className="apply" title="Apply"/>
          </div>
        </Menu>
      </div>
    );
  }
}

export default Burger;