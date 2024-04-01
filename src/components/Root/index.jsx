import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
const Root = () => {
  return (
    <div>


        <ul className="navBar">
            <li>
                <Link className="navItem" to="/">About</Link>
            </li>
            <li>
                <Link className="navItem" to="/projects">Projects</Link>
            </li>
            <li>
                <Link className="navItem" to="/contact">Contact</Link>
            </li>
            <li>
                <Link className="navItem" to="/resume">Resume</Link>
            </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Root