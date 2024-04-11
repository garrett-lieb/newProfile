import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <div className="resume">
      <section className="resumeContent">
      <h1>Resume</h1>
        <h2>Experience</h2>
        <div className="job">
          <h3>Server</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <div className="job">
          <h3>Server</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <div className="job">
          <h3>Admin Assistant</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <h2>Education</h2>
        <div className="school">
          <h3>Full Stack Bootcamp</h3>
          <h4>edX via University of Oregon</h4>
          <p>2024</p>
        </div>
        <div className="school">
          <h3>Enlgish Literature</h3>
          <h4>Seattle University</h4>
          <p>2015</p>
        </div>
        <div className="school">
          <h3>Spanish</h3>
          <h4>Seattle University</h4>
          <p>2015</p>
        </div>
      </section>
      </div>
  )
}

export default Resume

