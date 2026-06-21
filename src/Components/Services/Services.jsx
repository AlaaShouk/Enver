import React from 'react'
import "./Services.css";
import add from "/assets/add.png";
import {
  FaCode,
  FaPaintBrush,
  FaPalette,
  FaVideo,
  FaCamera,
  FaFilm,
} from "react-icons/fa";

const servicesData= [
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Create a platform with the best and coolest quality from us.",
    color: "#6c63ff",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Designer",
    desc: "We provide UI/UX Design services, and of course with the best quality",
    color: "#ff4d4d",
  },
  {
    icon: <FaPalette />,
    title: "Graphic Designer",
    desc: "We provide Graphic Design services, with the best designers",
    color: "#f4c542",
  },
  {
    icon: <FaVideo />,
    title: "Motion Graphik",
    desc: "Create a platform with the best and coolest quality from us.",
    color: "#f4c542",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    desc: "We provide Photography services, and of course with the best quality",
    color: "#6c63ff",
  },
  {
    icon: <FaFilm />,
    title: "Videography",
    desc: "Create a platform with the best and coolest quality from us.",
    color: "#ff4d4d",
  },
];


const services = () => {
  return (
    <div className='services-header'>
       <h1>The Service We Porovide For You</h1>
       <section className="services">
      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div className="service-card" key={index}>
            <div
              className="icon-box"
              style={{
                "--clr": item.color,
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
        <img src={add} alt='add'/>
      </div>
    </section>
    </div>
  )
}

export default services