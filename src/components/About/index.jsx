import React from 'react'
import jokebg from '../../assets/jokebg.png'
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
            <img src={jokebg} alt="purple bg from chrome tools" height="20%" width="100%"/>

            </div>
            
        </section>
    </div>
  )
}

export default About