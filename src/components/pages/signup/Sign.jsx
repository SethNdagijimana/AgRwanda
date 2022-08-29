import React from 'react';
import Navbar from '../../navbar/Navbar';
import "./sign.css";
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";

function Sign() {
  return (
    <div>
        <Navbar />
        <img src={bgreen}alt='' className='PartGreen'/>
        <img src={bgreenI}alt='' className='InGreen'/>
        <p className='Sign'>SIGN UP</p>
        <div className='AllSign'>
        <input type={"text"} placeholder="Names" className='names' required/>
        <input type={"text"} placeholder="Email" className='Email'required/>
        <input type={"tel"} placeholder="Phone Number" className='phone'required/>
        <input type={"number"} placeholder="ID number" className='idnum'required/>
        <input type={"password"} placeholder="Password" className='pass'required/>
        <input type={"text"} placeholder="Category" className='category'required/>
        <input type={"Location"} placeholder="Location" className='locate'required/>
        </div>
    </div>
  )
}

export default Sign