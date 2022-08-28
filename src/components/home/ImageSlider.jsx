import React , {useState} from 'react';
import "./imageSlider.css";
import {sliderData} from "./ImageSliderData";
import{FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    
const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
}

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return (
    <section className="slider" >
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         <p className='p-content'><span id='purpose'>Purpose of AgRwanda</span> is to provide easy access to agricultural products to local farmers.</p>

        {sliderData.map((slide, index)=>{

            return(
                <div className={index === current ? 'slide active' : 'slide'} key ={index}>
                    {index === current && (<img src={slide.image} alt ="seeds" className="image" />)}

                    
                
                </div>
                )
        })}
        
    </section>
  )
};

export default ImageSlider;