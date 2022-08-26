import React from 'react';
import Navbar from '../../navbar/Navbar';
import "./sign.css";
import bg from "../../../assets/Bg-Abt.png";
function Sign() {
  return (
    <div>
        <Navbar />
        <img src={bg} alt="" />
    </div>
  )
}

export default Sign