import React from 'react'
import './Home.css'

import Navbar from '../../Components/Navbar/Navbar'
import Hero from "../../Components/Hero/Hero";
import VideoSection from '../../Components/VideoSection/VideoSection'
import Services from '../../Components/Services/Services'
import Portfolio from '../../Components/Portfolio/Portfolio'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
          <Navbar/>
          <Hero/>
          <VideoSection/>
          <Services/>
          <Portfolio/>
          <ContactUs/>
          <Footer/>
    </div>
  )
}

export default Home