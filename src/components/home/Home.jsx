import React from 'react';
import Navbar from '../navbar/Navbar';
import "./home.css";
import ImageSlider from './ImageSlider';
import { sliderData } from './ImageSliderData';

function Home() {
  return (
    <div className="container">
        <Navbar />
        <ImageSlider slides={sliderData} />

    </div>
  )
}

export default Home