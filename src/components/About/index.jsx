import React from 'react'
import jokebg from '../../assets/github-mark/githubMark.png'
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
        </div>
      </section>
      <section className="imageSection">
        <div className="imageContainer">
          <a className="imageItem" href="https://example.com">
            <img src={githubMark} height="100" alt="" />
          </a>
          <a className="imageItem" href="https://example.com">
            <img src={jokebg} height="100" alt="" />
          </a>
          <a className="imageItem" href="https://example.com">
            <img src={jokebg} height="100" alt="" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default About