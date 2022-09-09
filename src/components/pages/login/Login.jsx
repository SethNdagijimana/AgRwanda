import React from 'react';
import "./login.css";
// import LoginB from '../../buttons/LoginB'
import Navbar from '../../navbar/Navbar';
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import { Link } from 'react-router-dom';
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
          <div className="mail">
    <input type="text" placeholder="Email" className='emailx' />

    <AiIcons.AiOutlineMail className="emaily" />
    {/* <LoginB id="logx"/> */}

    </div>
    <div className="pass_container">
    <input type='password' placeholder="Password" className='passwordx'/>
    <AiIcons.AiFillLock className='passwordy' />
    </div>
    <div className="buttons">
    <Link to='/DashSeller'><button className='log_in'>Login</button></Link>
    <Link to='/recoverPassword'><button className='Recover_Pass'>Forgot Password</button></Link>
    </div>

    </div>
    </form>


    </div>
  )
}

export default Login