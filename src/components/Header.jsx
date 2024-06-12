import React from 'react'
import {Link} from 'react-router-dom';

import { useState } from "react"

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div>
         <nav className="navigation" id='position'>
    <a href="/" className="brand-name">
   Vaibhav Singh
    </a>
    <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}>
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <Link to="/" className='nav-link' title=''>Home</Link>
        </li>
         <li>
          <Link to="/about-us" className='nav-link' title='qwerty'>About Us</Link>
        </li> 
        <li>
          <Link to="/blog" className='nav-link'>Blog</Link>
        </li>
        <li>
          <Link to="/techstack" className='nav-link'>Tech Stack</Link>
        </li>
        <li>

          <Link to="/contact-us" className='nav-link'>Contact Us</Link>
        </li>
      
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Header;