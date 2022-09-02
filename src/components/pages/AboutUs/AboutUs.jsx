import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar';
import bg from "../../../assets/Bg-Abt.png";
import AbtCont from '../../abt-Cont/AbtCont';

function AboutUs() {
  return (
    <div className="about">
        <Navbar/>
        <img src={bg} alt='' className="bg" />
        <div className='log-cont'>
        <div className='Abt-tle'>Join us</div>
        <div className='Abt-cont'> we provide easy access
        to agricultural products 
        to local farmers.</div>

        <div className="btn">
        <Link to="/signup"><button className='sign'>Sign up</button></Link>
        <Link to='/login'><button className='login'>Login</button></Link>
        </div>
        
          <p className='serv'>OUR SERVICES</p>
          <div className="abt_container">
          <div className='Abt-2'>
          <AbtCont
          title = 'Fertilisers'
          content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac tristique id massa. Curabitur commodo pellentesque amet, feugiat. Duis malesuada enim non, pulvinar diam lorem eget et. Urna, in laoreet nisi commodo ultricies. Gravida faucibus pharetra, enim at platea enim nunc massa. Interdum lectus donec facilisis nunc elit semper id volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac tristique id massa. Curabitur commodo pellentesque amet, feugiat. Duis malesuada enim non, pulvinar diam lorem eget et. Urna, in laoreet nisi commodo ultricies. Gravida faucibus pharetra, enim at platea enim nunc massa. Interdum lectus donec facilisis nunc elit semper id volutpat."
          />
          </div>
          <div className="abt-3">
          <AbtCont 
          title = 'Seeds'
          content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac tristique id massa. Curabitur commodo pellentesque amet, feugiat. Duis malesuada enim non, pulvinar diam lorem eget et. Urna, in laoreet nisi commodo ultricies. Gravida faucibus pharetra, enim at platea enim nunc massa. Interdum lectus donec facilisis nunc elit semper id volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac tristique id massa. Curabitur commodo pellentesque amet, feugiat. Duis malesuada enim non, pulvinar diam lorem eget et. Urna, in laoreet nisi commodo ultricies. Gravida faucibus pharetra, enim at platea enim nunc massa. Interdum lectus donec facilisis nunc elit semper id volutpat.'
          />
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default AboutUs