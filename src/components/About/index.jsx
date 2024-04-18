import React from 'react'
import './about.css'
import githubMark from '../../assets/githubMarkW.png'
import linkdinMark from '../../assets/linkdinMark.png'
import tba from '../../assets/Tba.png'


const About = () => {
  return (
    <div className="about">
      <section className="aboutContent">
        <div>
          <h1 className="headerItem">Garrett Lieb</h1>
        </div>
        <div>
          <p className="textBody">
            About me: I am a 31 yr old coding student in the 
            EdX Bootcamp via the University of Oregon.
          </p>
          <section className="imageSection">
        <div className="imageContainer">
          <a className="imageItem" href="https://www.linkedin.com/in/garrett-lieb-2a38682a2/">
            <img src={linkdinMark} height="100" 
            alt="an 'in' white  LinkdIn logo on a 'cadetblue (95, 168, 150)' background" />
          </a>
          <a className="imageItem" href="https://github.com/garrett-lieb">
            <img src={githubMark} height="100" 
            alt="black github cat logo on a 'cadetblue (95, 168, 150)' background" />
          </a>
          <a className="imageItem" href="">
            <img src={tba} height="100" 
            alt="" />
          </a>
        </div>
      </section>
        </div>
        
      </section>

    </div>
  )
}

export default About