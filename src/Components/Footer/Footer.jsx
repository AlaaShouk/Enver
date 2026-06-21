import React from 'react'
import logo from '/assets/Logo_Icon_1.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-left">
                <img src={logo} alt='logo'/>
             <span>Enver</span>
               </div>
               <div className="footer-center">
                  <ul>
                   <li>Support</li>
                   <li>Privacy Policy</li>
                   <li>Terms and Conditions</li>
                 </ul>
               </div>
               <div className="footer-right">
                <p>@2020 Enver.All Rights Reserved</p>
               </div>
    </div>
  )
}

export default Footer