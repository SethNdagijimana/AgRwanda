import React from 'react'
import './brands.css'
import more from './../../assets/more.png'

const Brands = props => {
  return (
    <div className='brands'>
        <h3 className='number'>{props.number}</h3>
        <img src={props.image} alt=''className='pImg'/>
        <p className='p_brands'>{props.type}</p>
        <img src={more} alt='' className='iC'/>
    </div>
  )
}

export default Brands