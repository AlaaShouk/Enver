import React from 'react'
import logo from '/assets/Logo_Icon_1.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
         <img src={logo} alt='logo'/>
         <span>Enver</span>
        </div>
        <div className="navbar-center">
           <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Services</a></li>
            <li><a href="index.html">Our Project</a></li>
            <li><a href="index.html">About us</a></li>
          </ul>
        </div>
        <div className="navbar-right">
         <button>Contact us</button>
        </div>
    </div>
  )
}

export default Navbar