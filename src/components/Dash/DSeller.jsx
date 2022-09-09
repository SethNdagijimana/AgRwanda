import React from 'react'
import './dSeller.css';
import picx from "../../assets/User.png"
import lo from "../../assets/DashLogo.png"
import l1 from "../../assets/fVec.png"
import l2 from "../../assets/sVec.png" 
import Brands from '../brands/Brands';
import m from './../../assets/marketing.png'
import ma from './../../assets/branding.png'
import mar from './../../assets/gallery.png'

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
                <option value= "folders">Folders</option>
                <option value="Pestcides" id=" ">Pestcides</option>
                <option value="Fertilizers">Fertilizers</option>
            </select>
        </div>
        <div>
            <p id ="seTitle">Settings</p>
        </div>
;
        </div>
        <div className='Right-seller'>
            <img src={lo} alt="" id='dl'></img>
            <div className='topleft'>
                <input type="text" placeholder='search something...' className='search' />
                <img src={l1} alt="" id='dlx'></img>
                <img src={l2} alt="" id='dly'></img>
            </div>
            <div className='SideCont'>
                <h1 id="manage">Manage Your Products</h1>
                <p className="context">Create folders to sort files and have quick access to documents</p>
            </div>
            <div className='Cut-brands'>
                <Brands
                number="1"
                image= {m}
                type="Marketing"
                />
                <Brands
                number="2"
                image= {ma}
                type="Branding"
                />
                <Brands
                number="3"
                image= {mar}
                type="My gallery"
                />
            </div>
            <div className='Cart'>



                <div className='C-items'>


                </div>
            </div>
        </div>
    </div>
  )
}

export default dSeller