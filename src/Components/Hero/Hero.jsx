import React from 'react'

import "./Hero.css";
import heroImage from "/assets/Hero.png";
import Vector from "/assets/Vector.png";
import Circal from "/assets/Circal.png";
import add from "/assets/add.png";
import Triangle from "/assets/Triangle.png";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <section className="hero">
      <div className="hero-content">
        <h1>
          Build Your Awesome Platform
        </h1>
        <p>
          Enver studio is a digital studio that offers several services
          such as UI/UX Design to developers, we will provide the best
          service for those of you who use our services.
        </p>

        <button className="hero-btn">
          Our Services
          <MdArrowOutward />
        </button>

      </div>

      <div className="hero-image">

        <div className="shape-bg"></div>

        <img src={heroImage} alt="Hero" />

      </div>

    
        <img className="zigzag" src={Vector} alt="Vector"/>
        <img className="circle" src={Circal} alt="Circal"/>
        <img className="plus" src={add} alt="add"/>
        {/* <img className="Triangle" src={Triangle} alt="Triangle"/>   */}
      
    </section>
    </div>
  )
}
export default Hero;