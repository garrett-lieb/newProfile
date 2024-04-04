import React from 'react'
import stock from '../../assets/stock.jpg'
import './about.css'

const About = () => {
  return (
    <div className="about">
            <section className="aboutContent">
            <h1 class="headerItem">About Me</h1>
            <p className="textBody">
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
           </p>
        </section>
        <section className="imageSection">
            <div className="imageContainer">
            <img src={stock} alt="" />
            </div>
            
        </section>
    </div>
  )
}

export default About