import React from 'react';
import './footer.scss';
import './footer.mobile.scss';
import images from '../../assets/images';

const socialArr = images
  .footer
  .map(item => {
    return (
      <div className='social-link' key={item.id}>
        <a href="#" className="link"><img src={item.img} alt="social logo"/></a>
      </div>
    )
  })

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="contacts">
            <div className="contacts-header">
              Contacts
            </div>
            <div className="copyright">
              <p>2019 Rootz Foundation. All rights reserved</p>
              <p></p>
            </div>
          </div>
          <div className="headquarters-and-social">
            <div className="headquarters">
              <div className="headquarters-title">
                Headquarters
              </div>
              <div className="headquarters-address">
                <p>1234 Taliban<br/>Los Angeles, La 1234567<br/>(123) 456-7890</p>
              </div>
            </div>
            <div className="social">
              <div className="social-title">
                Social media
              </div>
              <div className="social-list">
                {socialArr}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;