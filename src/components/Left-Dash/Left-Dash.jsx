import React from 'react'
import './Left-Dash.css'
import picx from "../../assets/Ellipse 12.png";

function LeftDash() {
  return (
  <div className='Left-seller'>
            <div className='Profile'>
                <img id='pImage' src={picx} alt=''></img>
                <p id='pName'>INEZA Karire</p>
            </div>
        <div>
            <p id ="dashboard__content">Dashboard</p>
            
            <select className='dashboard_folders'>
                <option value= "folders" className='options'>Folders</option>
                <option value="Pestcides"  className='options'>Pestcides</option>
                <option value="Fertilizers"  className='options'>Fertilizers</option>
            </select>
        </div>
        <div>
            <p id ="settings_info">Settings</p>
        </div>

        </div>

  )
}

export default LeftDash