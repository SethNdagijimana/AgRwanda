import React from 'react'
import './dSeller.css';
import picx from "../../assets/User.png"


function dSeller() {
  return (
    <div className='dSeller'>
        <div className='Left-seller'>
            <div className='Profile'>
                <img id='pImage' src={picx} alt=''></img>
                <p id='pName'>INEZA Karire</p>
            </div>
        <div>
            <p id ="daTitle">Dashboard</p>
            
            <select className='folders'>
                
                <option value="Pestcides">Pestcides</option>
                <option value="Fertilizers">Fertilizers</option>
            </select>
        </div>
        <div>
            <p id ="seTitle">Settings</p>
        </div>
;
        </div>
        <div className='Right-seller'>

        </div>
    </div>
  )
}

export default dSeller