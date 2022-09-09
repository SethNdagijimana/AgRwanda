import React from 'react';
import Navbar from '../../navbar/Navbar';
import "./sign.css";
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import {Link} from "react-router-dom";

function Sign() {
  return (
    <div>
        <Navbar />
        <img src={bgreen}alt='' className='PartGreen'/>
        <img src={bgreenI}alt='' className='InGreen'/>
        <p className='Sign'>SIGN UP</p>
        <div className='AllSign'>
        <input type={"text"} placeholder="Names" className='names' required/>
        <input type={"email"} placeholder="Email" className='Email'required/>
        <input type={"tel"} placeholder="Phone Number" className='phone'required/>
        <input type={"number"} placeholder="ID number" className='idnum'required/>
        <input type={"number"} placeholder="Tin number" className='idnum'required/>

        <input type={"password"} placeholder="Password" className='pass'required/>
        <select class="category" id="select-option">
                                <option value="Select">Select</option>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
        <input type={"Location"} placeholder="Location" className='locate'required/>
        </div>
        <div className="signup_button">
        <Link to='/#'><button className='signing_up'>submit</button></Link>

        </div>
    </div>
  )
}

export default Sign