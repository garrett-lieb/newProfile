import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
import { useState } from 'react';

const Root = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // if you click away close the dropBar
        document.addEventListener("click", (e) => {
            if (e.target.className !== "menuButton") {
                setIsMenuOpen(false);
            }
        });
    };

    return (
        <div class="menu">
            <button className="menuButton" onClick={toggleMenu}>
                Menu
            </button>
  
            {isMenuOpen && (
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
            )}
  
            <Outlet />
        </div>
    );
  };

export default Root

// box-shadow: inset 0px 10px 20px #000000;