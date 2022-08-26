import React from 'react';

 import Content from '../navbar/Content';
import background from "../../assets/image.png";
import Navbar from '../navbar/Navbar';

import Card from '../navbar/card/Card';
import Content from '../navbar/Content';
import Navbar from '../navbar/Navbar';

import "./home.css";
import ImageSlider from './ImageSlider';
import { sliderData } from './ImageSliderData';

function Home() {
  return (

    <div className="content">
       <Navbar />
       
       {/* <Content /> */}
       <h2>The purpose of Agriculture Rwanda Platform is to provide easy access to agricultural products to the local farmers.</h2>
       <img src={background} alt="bg" className="background"></img>

      

    <div className="container">
        <Navbar />
        <ImageSlider slides={sliderData} />


        <Content />
        
        <Card />

    </div>
  )
}

export default Home