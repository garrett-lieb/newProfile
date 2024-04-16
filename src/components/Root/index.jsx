import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
// import { useState } from 'react';

const Root = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(true);
    // // if user clicks on the menu button, the menu will open and close
    // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    // // if the menu is open and the user clciks somewhere on the page the menu will close
    // window.onclick = function(event) {
    //     if (!event.target.matches('.menuButton')) {
    //         setIsMenuOpen(false);
    //     }
    // }
    // // if the user scrolls down 50px the menu will close
    // window.onscroll = function() {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         setIsMenuOpen(false);
    //     }
    // }
    
    

    

    return (
        <div className="menu">
            {/* <button className="menuButton" onClick={toggleMenu}>
                Menu
            </button>
  
            {isMenuOpen && ( */}
                <div className="navBar">
                <ul className="dropBar">
                    <li>
                        <Link className="navItem" to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/resume">
                            Resume
                        </Link>
                    </li>
                </ul>
                </div>
            {/* )} */}
  
            <Outlet />
        </div>
    );
  };

export default Root
