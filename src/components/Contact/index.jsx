import React from 'react'
import './contact.css'

const Contact = () => {
  return (
<div className="contact">  
<section className="contactContent">
    <h1 className="headerItem">Contact</h1>
    <p className="greetingContainer">
        If you would like to contact me, please use the following email address:
    </p>
    <p className="emailContainer">
        <ul>
          <li>Email: <a href="mailto:liebg08@gmail.com">liebg08@gmail.com</a></li>
        </ul>
    </p>
</section>
</div>
  )
}

export default Contact