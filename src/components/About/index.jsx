import React from 'react'
import stock from '../../assets/stock.jpg'
import './about.css'

const About = () => {
  return (
    <div className="about">
        <section className="imageSection">
            <div className="imageContainer">
            <img src={stock} alt="" />
            </div>
            
        </section>
        <section className="aboutContent">
            <h1>About Me</h1>
            <p>
                coding student oregon
            </p>
        </section>
    </div>
  )
}

export default About