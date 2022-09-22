import React from 'react';
import images from '../../assets/images';
import Button from '../../elements/button/button.component';
import Input from '../../elements/input/input.component';
import './hero.scss';
import './hero.mobile.scss';

const Hero = () => {
  return (
    <div className="hero section" id='hero'>
      <div className="container">
        <div className="hero-inner">
          <div className="first-block">
            <div className="hero-headline">
              <img src={images.heroHeadline} alt="hero-headline"/>
            </div>
            <div className="hero-text">
              <p>The scale of the challenges facing our planet can seem daunting, but we can
                all do something.</p>
            </div>
            <div className="hero-input">
              <Input placeholder="Find the place to help"/>
              <img src={images.geo} alt="geo" />
              <Button className="hero-btn" title="search"/>
            </div>
          </div>
          <div className="second-block">
              <img className="parrot-img" src={images.heroParrot} alt="parrot-image"/>
              <img className="card-img" src={images.heroCard} alt="card-image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero