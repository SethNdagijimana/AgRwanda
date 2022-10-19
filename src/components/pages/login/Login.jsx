import React, { useState, useEffect} from 'react';
import "./login.css";
// import LoginB from '../../buttons/LoginB'
import Navbar from '../../navbar/Navbar';
import bgreen from "../../../assets/PartGreen.png";
import bgreenI from "../../../assets/InGreen.png";
import { Link, useNavigate  } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"; 
// import { toast, ToastContainer } from "react-toastify";
// import * as EmailValidator from "email-validator";

// import {SERVER_URL} from "../../../data/FetchingData"



function Login() {
  // const [allow, setAllow] = useState(false);
  // const [loading, setIsLoading] = useState(false);

  // const redirect = useNavigate();
  // useEffect (()=>{
  //   const timer = setTimeout(()=>{
  //     setAllow(true);
  //   },500);
  //   return () => clearTimeout(timer);
  // });

  // const handleLogin = (values) => {
  //   setIsLoading(true);
  //   let headersList = {
  //     Accept: "*/*",
  //     "Content-Type": "application/json",
  //   };

  //   let bodyContent = JSON.stringify({
  //     email: values.email,
  //     password: values.password,
  //   });

  //   fetch(`${SERVER_URL}/user/login`, {
  //     method: "POST",
  //     body: bodyContent,
  //     headers: headersList,
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       if (result.status === "success") {
  //         toast.info("User logged in successfully ");

  //         localStorage.setItem("token", result.token);
  //         localStorage.setItem("role", result.data.user.role);
  //         localStorage.setItem("userName", result.data.user.firstName);
  //         localStorage.setItem("userEmail", result.data.user.email);

  //         if (
  //           result.data.user.role === "admin" 
  //         ) {
  //           redirect("/AdminDashboard");
  //         }  else if(
  //           result.data.user.role === "user"
  //         ) {
  //           redirect("/UserPage")
  //         }
  //       } else {
  //         toast.error("Invalid email or password", { theme: "colored" });
  //       }
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       toast.error("Internal sever error!", { theme: "colored" });
  //       setIsLoading(false);
  //     });
  //     console.log("....", bodyContent);
  // };
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