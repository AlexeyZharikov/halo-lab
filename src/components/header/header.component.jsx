import React, {useState} from 'react';
import MainMenu from './main/mainMenu.component';
import Burger from './burger/burger.component';
import images from '../../assets/images';
import Button from '../../elements/button/button.component';
import './header.scss';
import './header.mobile.scss';

const Header = () => {
  
  const [hover, setHover] = useState(false)

  const hoverStyle = { "transform": "scale(1.2)", "transition" : "1s",};
  const normalStyle = {"transition" : "1s",}

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <img src={images.logo} alt="logo" style={hover ? hoverStyle : normalStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
          </div>
          <MainMenu/>
          <Burger/>
          <div className="header-btn">
            <Button className="apply" title="Apply"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
