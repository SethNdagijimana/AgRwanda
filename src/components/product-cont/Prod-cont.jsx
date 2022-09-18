import React from 'react'
import './prod-cont.css'
import { Link } from 'react-router-dom'
const Prodcont = (props) => {
  return (
    <div className='Prodcont'>
      <img src={props.img} alt='' className='Prod-Pic'/>
      <div className='Prod-detail'>
      <h>{props.name}</h>
      <h>{props.Qty}</h>
      <h>{props.Amt}</h>
      </div>
      <Link to='/Product Description'><button className='Prod-Buy'>Buy Now</button></Link>
    </div>
  )
}

export default Prodcont