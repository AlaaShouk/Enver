import React from 'react'

import "./Portfolio.css";

const projects = [
  "/assets/image28.png",
  "/assets/image29.png",
  "/assets/image30.png",
];

import Vector from "/assets/Vector.png";

const Portfolio = () => {
  return (
    <div>
         <section className="portfolio">
      <div className="portfolio-container">

        <h2>Our Awesome Portfolio</h2>

        <div className="portfolio-slider">

          <div className="portfolio-card">
            <img src={projects[0]} alt="" />
          </div>

          <div className="portfolio-card active">
            <img src={projects[1]} alt="" />
          </div>

          <div className="portfolio-card">
            <img src={projects[2]} alt="" />
          </div>

        </div>

        <div className="slider-dots">
          <span></span>
          <span className="active-dot"></span>
          <span></span>
        </div>
          <img src={Vector} alt=''/>
      </div>
    </section>
    </div>
  )
}

export default Portfolio