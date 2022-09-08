import React from 'react'
import './brands.css'
import more from './../../assets/more.png'

const Brands = props => {
  return (
    <div className='brands'>
        <h>{props.number}</h>
        <img src='' alt=''className='pImg'>{props.image}</img>
        <p>{props.type}</p>
        <img src={more} alt='' className='iC'/>
    </div>
  )
}

export default Brands