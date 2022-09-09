import React from 'react';
import Content from '../navbar/Content';
import Navbar from '../navbar/Navbar';
import Card from "../navbar/card/Card";
import "./home.css";
import Footer from './footer/Footer';
// import Background from './Background';
import ImageSlider from "../../components/home/ImageSlider";
import {sliderData} from "./ImageSliderData";


function Home() {

  return (      
    <div className="container">
        <Navbar />
        {/* <Background /> */}
        <ImageSlider slides={sliderData} />
        <Content />   
        <Card />
        <Footer />

    </div>

      

  )
}

export default Home