import React from 'react';
import "./content.css";
import "./navbar.css";
import background2 from "../../assets/Ellipse 10.png";
import background3 from "../../assets/Ellipse 11.png";



function Content() {
  return (
    <div className='content'>
        <div className="welcome">
        <h4>Welcome To AgRwanda</h4>
        </div>

        <div className="pics">
      
        
        <div className="seed">
          
        <img src={background2} alt="bg" className="background"></img>
        <div className="description">
        <h3>Pestcides</h3>
        <p>All the pestcides are available for you </p>
        </div>
        </div>
        
        <div className="seed">
        <img src={background3} alt="bg" className="background"></img>
        <div className="description">
        <h3>Fertilizer</h3>
        <p>Best fertilizer </p>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Content