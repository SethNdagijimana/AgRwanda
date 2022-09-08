import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar';
import bg from "../../../assets/Bg-Abt.png";
import AbtCont from '../../abt-Cont/AbtCont';

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
        
          <p className='serv'>OUR SERVICES</p>
          <div className="abt_container">
          <div className='Abt-2'>
          <AbtCont
          title = 'Purpose'
          content = "The purpose of AgRwanda Platform is to present a detailed description of this website that will be providing easy access to agricultural products to the local farmers.it will explain the purpose and features of the system. The interfaces of the system, what the system will do, the constraints under which it must operate and how the system will react to the users of the system the AgRwanda is intended for both farmers and the people who sells agricultural products like seeds, fertilizers and pesticides who belong in different cooperatives and institution 
          In Rwanda people now use the internet every day that is why AgRwanda will work hand in hand with agricultural facilities to help those in need." />
          </div>
          <div className="abt-3">
          <AbtCont 
          title = 'Product'
          content = ' 
          The AgRwanda platform is supposed to be a web app, It is a web-based system implementing server-client knowledge where users will have to sign up into our system. The AgRwanda platform is a new, self-contained website that will connect Rwandan Farmers and sellers in order to increase the production rate to the market. 
           
          AgRwanda is expected in a period of 3 weeks to increase the accessibility of agricultural products from different cooperatives in Rwanda. 
          Thus, improving agricultural productivity helps address both hunger and poverty: not only does it increase the amount of food available.  
          Thus, improving agricultural productivity helps addf food available.'
          />
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default AboutUs