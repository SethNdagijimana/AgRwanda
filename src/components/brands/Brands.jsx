import React from 'react'
import './brands.css'
import more from './../../assets/more.png'

const Brands = props => {
  return (
    <div className='brands'>
        <h>{props.number}</h>
        <img src={props.image} alt=''className='pImg'/>
        <p>{props.type}</p>
        <img src={more} alt='' className='iC'/>
    </div>
  )
}

export default Brands