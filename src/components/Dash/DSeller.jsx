import React from 'react'
import './dSeller.css';
import picx from "../../assets/Ellipse 12.png";
import lo from "../../assets/DashLogo.png";
import l1 from "../../assets/fVec.png";
import l2 from "../../assets/sVec.png" ;
import Brands from '../brands/Brands';
import m from './../../assets/marketing.png';
import ma from './../../assets/branding.png';
import mar from './../../assets/gallery.png';
import Prodcont from '../product-cont/Prod-cont';
import p1 from './../../assets/Fertz.png'

function dSeller() {
  return (
    <div className='dSeller'>
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
        <div className="right_dashboard">
        <img src={lo} alt="dashboardLog" className="dash__log"></img>
            <input type="text" placeholder="Search something" className='search_something'></input>
            <img src={l1} alt="" id="dlx"></img>
            <img src={l2} alt="" id="dly"></img>
            </div>

            <div className="topleft">
            
        </div>
        <div className='Side_Cont'>
                <h1 id="manage">Manage Your Products</h1>
                <p className="context">Create folders to sort files and have quick access to documents</p>
            </div>
            <div className='Cut-brand'>
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
            <div className='My-products'>
                <h className='Prod-tle'>My Products</h>
        
                    <span className='Sub-tle'>
                        <h2 id='Sub-tle_left'>Pesticides</h2>
                        <h2 id='Sub-tle_right'>Fertilizers</h2>
                    </span>
        <div className='ProdContx'>
                <Prodcont id='One'
                image={p1}
                name='Herbicides'
                Qty='2 Ltr'
                Amt = '3000Rwf'
                />
                {/* <Prodcont id='Two'
                image={p1}
                name='Herbicides'
                Qty='2 Ltr'
                Amt = '3000Rwf'
                /> */}
        </div>
                

            </div>
     {/* <div className='Right-seller'>
            <img src={lo} alt=""></img>
            <div className='topleft'>
                <input type="text" placeholder='search something...' className='search' />
                <img src={l1} alt="" id='dlx'></img>
                <img src={l2} alt="" id='dly'></img>
            </div>
            <div className='Side_Cont'>
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
           
        </div> */}
    </div>
  )
}

export default dSeller