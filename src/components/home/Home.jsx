import React from 'react';
import Card from '../navbar/card/Card';
import Content from '../navbar/Content';
import Navbar from '../navbar/Navbar';
import "./home.css";
import ImageSlider from './ImageSlider';
import { sliderData } from './ImageSliderData';

function Home() {
  return (
    <div className="container">
        <Navbar />
        <ImageSlider slides={sliderData} />

        <Content />
        
        <Card />

    </div>
  )
}

export default Home