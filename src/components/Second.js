import React from 'react'
import image from '../assets/image.png';
import './Second.css';


function Second() {
  return (
    <div>
    <div className='brand'>
      <h3>Brands we've worked with</h3>
    </div>
    <div className='image'>
        <img alt='image' src={image} className='one' />
      
    </div>
    </div>
  )
}

export default Second
