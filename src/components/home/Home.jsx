import React from 'react';
// import Content from '../navbar/Content';
// import background from "../../assets/image.png";
import Navbar from '../navbar/Navbar';
import { useState } from "react";

import "./home.css";

function Home() {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
        }
    ]





  return (
    <div className="content">
       <Navbar />
       {/* <Content /> */}
       {/* <h2>The purpose of Agriculture Rwanda Platform is to provide easy access to agricultural products to the local farmers.</h2>
       <img src={background} alt="bg" className="background"></img> */}

      


    </div>
  )
}

export default Home