import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
 <div className='footer-section'>
  <div className='ft-flex'>
    <div>
        <h3>Quick Links</h3>
        <ul>
       
        <li><Link to="/about-us" className='foot-line'>About Us</Link></li>
        <li><Link to="/blog" className='foot-line'>Blog</Link></li>
        <li><Link to="/techstack" className='foot-line'>Tech Stack</Link></li>
        <li><Link to="/contact-us" className='foot-line'>Contact Us</Link></li>
            
        </ul>
    </div>
  
    <div>
    <h3>Address</h3>
        <ul>
        <li></li>
            
           
        </ul>
    </div>
   
     
    </div>
    </div>
    </div>
  )
}

export default Footer;