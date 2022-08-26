import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar';
import bg from "../../../assets/Bg-Abt.png";

function AboutUs() {
  return (
    <div>
        <Navbar/>
        <img src={bg}alt=''/>
        <div className='log-cont'>
        <div className='Abt-tle'>Join us</div>
        <div className='Abt-cont'> we provide easy access
        to agricultural products 
        to local farmers.</div>
        <button className='sign'>Sign up</button>
        <Link to='/login'><button className='log'>Login</button></Link>
        </div>
    </div>
  )
}

export default AboutUs