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
        <Link to='/contact'><li>Contact Us</li></Link>
        <Link to='/login'><li>LogIn</li></Link>
        <Link to='/signup'><li>Sign Up</li></Link>

        </ul>

 
    
    </div>
  )
}

export default Navbar