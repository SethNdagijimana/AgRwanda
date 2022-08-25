import React from 'react';
// import Content from '../navbar/Content';
import background from "../../assets/image.png";
import Navbar from '../navbar/Navbar';

import "./home.css";

function Home() {
  return (
    <div className="content">
       <Navbar />
       
       {/* <Content /> */}
       <h2>The purpose of Agriculture Rwanda Platform is to provide easy access to agricultural products to the local farmers.</h2>
       <img src={background} alt="bg" className="background"></img>

      


    </div>
  )
}

export default Home