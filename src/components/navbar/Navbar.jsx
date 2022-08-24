import React from 'react';
import "./navbar.css";
import Logo from "../../assets/Vector.svg";


function Navbar() {
  return (
    <div className="nav_container">
    
    <div className="logo">
    <img src={Logo} alt="logo"></img>
    <h1>AG<span>Rwanda</span></h1>
    </div>

  
    
        <ul className="nav_list">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>LogIn</li>
            <li>Sign Up</li>

        </ul>

 
    
    </div>
  )
}

export default Navbar