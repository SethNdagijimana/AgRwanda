import React from 'react';
import "./login.css";
// import LoginB from '../../buttons/LoginB'
import Navbar from '../../navbar/Navbar';
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import { Link } from 'react-router-dom'
import * as AiIcons from "react-icons/ai"; 


function Login() {
  return (
    <div>
    <Navbar/>
    <img src={bgreen}alt='' className='PartGreen'/>
    <img src={bgreenI}alt='' className='InGreen'/>
    <form className='form'> 
         <p className='Log_in'>Log in</p>
         <div className="login-form">
    <input type="text" placeholder="Email" className='emailx' />
    <AiIcons.AiOutlineMail />
    <input type='password' placeholder="Password" className='password'/>
    <Link to='/login'><button className='log'>Login</button></Link>
    <Link to='/recoverPassword'><button className='RecPass'>Forgot Password</button></Link>
    {/* <LoginB id="logx"/> */}
    </div>
    </form>


    </div>
  )
}

export default Login