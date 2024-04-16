import React from 'react'
import jokebg from '../../assets/jokebg.png'
import githubMark from '../../assets/githubMark.png'
import linkdinMark from '../../assets/linkdinMark.png'
import './about.css'

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
          <a className="imageItem" href="https://example.com">
            <img src={linkdinMark} height="100" alt="" />
          </a>
          <a className="imageItem" href="https://example.com">
            <img src={githubMark} height="100" alt="silhoutted github logo on a 'cadetblue (95, 168, 150)' background" />
          </a>
          <a className="imageItem" href="https://example.com">
            <img src={jokebg} height="100" alt="" />
          </a>
        </div>
      </section>
        </div>
        
      </section>

    </div>
  )
}

export default About