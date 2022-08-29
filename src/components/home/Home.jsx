import React from 'react';
 import Content from '../navbar/Content';
import Navbar from '../navbar/Navbar';

import Card from "../navbar/card/Card";



import "./home.css";
import ImageSlider from './ImageSlider';
import { sliderData } from './ImageSliderData';
import Footer from './footer/Footer';

function Home() {

  return (      

 

      


    <div className="container">
        <Navbar />
        <ImageSlider slides={sliderData} />
        <Content />   
        <Card />
        <Footer />

    </div>

      

  )
}

export default Home