import React from 'react'
import './abtCont.css'

const AbtCont= (props) => {
  return (
    <div className='Dserv'>
          <div className='product_details'>
            <h className='h-Ttl'>{props.title}</h>
            <p className='p-Cont'>{props.content}</p>
            
            
          </div>
          </div>
  )
}

export default AbtCont