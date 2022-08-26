import React from 'react';
import './AboutUs.css';
import Navbar from '../../navbar/Navbar';
import bg from "../../../assets/Bg-Abt.png";

function AboutUs() {
  return (
    <div>
        <Navbar/>
        <img src={bg}alt=''/>
    </div>
  )
}

export default AboutUs