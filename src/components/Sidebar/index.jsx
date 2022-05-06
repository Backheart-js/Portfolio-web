import {  } from '@fortawesome/free-regular-svg-icons';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

import "./index.scss";

function Sidebar() {
  return (
    <div className="nav">
        <nav className="nav-bar">
            <NavLink
                exact="true"
                activeclassname="active"
                to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/About"
                className="about-link"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/Contact"
                className="contact-link"
            >
                <FontAwesomeIcon icon= {faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <ul className="social-list">
                <li className="social-item">
                    <a href="https://www.facebook.com/binhnguyen29122001/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://github.com/Backheart-js" target="_blank">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                <li className="social-item">
                    <a href="" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar