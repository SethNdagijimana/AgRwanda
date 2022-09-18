import React from 'react';
import Navbar from '../../navbar/Navbar';
import "./contact.css";
import bg from "../../../assets/Bg-Abt.png";
import loc from './../../../assets/location.png' 
import eml from './../../../assets/email.png' 
import phn from './../../../assets/phone.png' 


function Contact() {
  return (
    <div >
        <Navbar />
        <img src={bg} alt="" />
        <div className='Contact-us'>
          <h id="c1">Contact Us</h>
        <div className='Contact-us-sub'>
          <img alt='' src={loc} id='l1'/>
          <h id="a1">23 Avernue de Kigali 75012 Kigali</h>
          <img alt='' src={eml} id='e1'/>
          <h id="a2">agrwanda123@gmail.com</h>
          <img alt='' src={phn} id='p1'/>
          <h id="a3">+25078841956</h>
          </div>
        </div>
        
          <h className='Gt-in-touch'>GET IN TOUCH</h>
          <h className='Feel-free'>Feel free to contact us and we will get back to you as soon as we can!</h>
          <div className='Input-contact'>
          <input type='text' value='Names' id='Tname'/>
          <input type='email' value='Email' id='Tmail'/>
          </div>
          <div className='Tell-us'>Tell us about it</div>
          <button className='Xend'>Send</button>
        
    </div>
  )
}

export default Contact