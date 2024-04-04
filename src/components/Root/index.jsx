import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
import { useState } from 'react';

const Root = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                            _About
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/projects">
                            _Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/contact">
                            _Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/resume">
                            _Resume
                        </Link>
                    </li>
                </ul>
            )}
  
            <Outlet />
        </div>
    );
  };

export default Root