import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu }from "react-icons/gi";

import '../css/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container2 parent-div">
        <div className="logo">
       Meenakshi Kathiresan
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
      
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
