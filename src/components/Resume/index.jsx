import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <div class="resume">
      <section class="resumeContent">
      <h1>Resume</h1>
        <h2>Experience</h2>
        <div class="job">
          <h3>Job Title</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <div class="job">
          <h3>Job Title</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <div class="job">
          <h3>Job Title</h3>
          <h4>Company Name</h4>
          <p>Job Description</p>
        </div>
        <h2>Education</h2>
        <div class="school">
          <h3>Degree</h3>
          <h4>School Name</h4>
          <p>Graduation Year</p>
        </div>
        <div class="school">
          <h3>Degree</h3>
          <h4>School Name</h4>
          <p>Graduation Year</p>
        </div>
        <div class="school">
          <h3>Degree</h3>
          <h4>School Name</h4>
          <p>Graduation Year</p>
        </div>
      </section>
      </div>
  )
}

export default Resume

