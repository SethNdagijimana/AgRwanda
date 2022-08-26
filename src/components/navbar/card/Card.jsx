import React from 'react';
import "./card.css";
import card from "../../../assets/fert.png";
import card2 from "../../../assets/pest.png";



function Card() {
  return (
    <div className='card'>
    <div className="card_container">
    
    <div className="fert">
        <img src={card} alt="bg" className="back"></img>
   
         </div>
    
    <div className="fert">
      
    <img src={card2} alt="bg" className="back"></img>
   
   
    </div>

    </div>


</div>
  )
}

export default Card;