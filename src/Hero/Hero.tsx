import React from 'react'
import './style.scss'
import img from '../assets/blobanimation.svg';

export const Hero = () => {
  return (
    <div className='herocontainer'>
        <div className='heroitems'>
          <div className='over'>
            <p>Velkommen til min Portfolio</p><br/>
            <p>Webudvikler med passion for Frontend</p>
          </div>
          
          <div className='under'>
           <img src={img} alt=""/>
          </div>
        </div>
        
    </div>
  )
}
