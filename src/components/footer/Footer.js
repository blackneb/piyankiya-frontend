import React from 'react';
import './Footer.css';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';
import Telegram from '../icons/telegram.png';
import Twitter from '../icons/twitter.png';
import Youtube from '../icons/youtube.png';


const Footer = () => {
  return (
    <div>
      <div className='main-footer'>
        <div className='footer-one'>
          <h4>About Us</h4>
          <ul>
            <li>E-Mail: company@gmail.com</li>
            <li>Phone number: +251913124578</li>
            <li>P-BOX: 1256</li>
            <li>Address: Addis Ababa, Ethiopia</li>
            <li>FAX: 2894</li>
          </ul>
        </div>
        <div className='footer-two'>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Occasions</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className='footer-two'>
          <h4>Customer Support</h4>
          <ul>
            <li>+251912131415</li>
            <li>+251998979695</li>
            <li>Customersupport@gmail.com</li>
            <li>Telegram: @customersupport</li>
          </ul>
        </div>
        <div className='social-medias'>
          <h4>Follow us on Social medias</h4>
          <img src={Facebook} className="social-size"/>
          <img src={Instagram} className="social-size"/>
          <img src={Youtube} className="social-size"/>
          <img src={Telegram} className="social-size"/>
          <img src={Twitter} className="social-size"/>

        </div>
      </div>
    </div>
  )
}

export default Footer
