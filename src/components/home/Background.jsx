import React from 'react';
// import Content from '../navbar/Content';
import "./background.css";
import backImage from "../../assets/image.png";



function Background() {
  return (
    <div className="backImage">

        <img src={backImage} alt='' className="img"></img>
        <p className='p-content'><span id='purpose'>Purpose of AgRwanda</span> is to provide easy access to agricultural products to local farmers.</p>
      {/* <Content /> */}
      </div>
  )
}

export default Background;