import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom'
import Logo from "../../assets/Vector.svg";


function Navbar() {
  return (
    <div className="nav_container">
    
    <div className="logo">
    <img src={Logo} alt="logo"></img>
    <h1>AG<span>Rwanda</span></h1>
    </div>

  
    
        <ul className="nav_list">
        <Link to='/'> <li>Home</li> </Link>
        <Link to='/AboutUs'><li>About Us</li></Link>
            <li>Contact Us</li>
            <li>LogIn</li>
            <li>Sign Up</li>

        </ul>

 
    
    </div>
  )
}

export default Navbar