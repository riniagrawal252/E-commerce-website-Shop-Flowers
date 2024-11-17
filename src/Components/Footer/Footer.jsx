import React from 'react'
import './Footer.css'
import footer_logo from '../assets/download (11) copy.jpg'
import footer_insta from '../assets/insta.png'
import footer_whatsapp from '../assets/whatsapp.jpg'
import footer_pinterest from '../assets/pin.png'
const Footer = () => {
  return (
    
    <div className='footer' >
        <div className='footer-logo'> 
            
            <img src={footer_logo}/>
            <p>Shopper</p>

        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={footer_insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={footer_pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={footer_whatsapp} alt="" />
            </div>
            
            
            
        </div>
        <div className="footer-copyright">
                <hr />
                <p>Copright @ 2024-All Right Reserved</p>
            </div>

    </div>
  )
}
export default Footer;
