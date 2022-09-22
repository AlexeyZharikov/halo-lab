import React from 'react';
import HeaderH2 from '../../elements/headerH2/headerh2.component';
import Input from '../../elements/input/input.component';
import Button from '../../elements/button/button.component';
import images from '../../assets/images';
import './contact.scss';
import './contact.mobile.scss';

const Contaact = () => {
  return (
    <section className="contact section">
      <div className="container">
        <div className="contact-inner">
          <div className="header">
            <HeaderH2 title="Get started today!" text="Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. "/>
          </div>
          <div className="form">
            <h3>Log in</h3>
            <img src={images.leaf1} className="vector-img leaf1" alt="vector image" />
            <img src={images.leaf2} className="vector-img leaf2" alt="vector image" />
            <form action="/" type="submit">
              <Input placeholder="Name"/>
              <Input placeholder="Email"/>
              <Button href="/" className="contact-btn" title="Book a demo"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contaact;