import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar';
import bg from "../../../assets/Bg-Abt.png";

function AboutUs() {
  return (
    <div className="about">
        <Navbar/>
        <img src={bg} alt='' className="bg" />
        <div className='log-cont'>
        <div className='Abt-tle'>Join us</div>
        <div className='Abt-cont'> we provide easy access
        to agricultural products 
        to local farmers.</div>

        <div className="btn">
        <Link to="/signup"><button className='sign'>Sign up</button></Link>
        <Link to='/login'><button className='login'>Login</button></Link>

        </div>


        </div>
    </div>
  )
}

export default AboutUs