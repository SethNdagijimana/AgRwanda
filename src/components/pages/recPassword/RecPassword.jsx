import React from 'react'
import './RecPassword.css'
import Navbar from '../../navbar/Navbar';
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import { Link } from 'react-router-dom'

function RecPassword() {
  return (
    <div>
        <Navbar/>
        <img src={bgreen}alt='' className='PartGreen'/>
        <img src={bgreenI}alt='' className='InGreen'/>
        <div className="reset">
        <p className='Forgot'>FORGOT YOUR PASSWORD?</p>
        <p className='Forgot-cont'>Enter your e-mail and we’ll send a link to reset your password</p>
        <input type={"text"} placeholder="Email" className='email'/>
        <div className="btn_recover">
        <Link to='/login'><button className='cancel'>Cancel</button></Link>
        <Link to='/recoverPassword'><button className='RecPass'>Reset</button></Link>
        </div>
        </div>
    </div>
  )
}

export default RecPassword