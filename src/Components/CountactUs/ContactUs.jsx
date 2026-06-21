import React from 'react'
import  "./ContactUs.css";

import Add from '/assets/add.png'
import circal from '/assets/Circal.png'


const ContactUs = () => {
  return (
    
        <div className='countact-us'>
          
          <img src={Add} alt='add' className='add-img'/>
          

          <div className='countact-us-caption'>
          <h1>Contact us for the service you want to use</h1>
          <button>Contact us</button>
          </div>
            
          <img src={circal} alt='circal' className='circal-img'/>
           
        </div>
    
  )
}

export default ContactUs