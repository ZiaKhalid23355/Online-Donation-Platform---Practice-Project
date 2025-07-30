import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchIcon from '../../assets/SearchIcon/SearchIcon.png'


const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-left">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/RevenueGenerated">Revenue Generated</Link></li>
            <li><Link to="/SuccessStories">Success Stories</Link></li>     
          </ul>
        </div>
        <div className="navbar-right">
            <ul>

            <li>
              <img className="icons" id="searchicon" src={SearchIcon} alt="" />
            </li>

            <li>
              <Link to="/SDLC">SDLC Model</Link></li>
            
                
             </ul>
           </div>
    </div>
  )
}

export default Navbar



