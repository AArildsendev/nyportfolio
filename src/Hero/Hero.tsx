import React from 'react'
import './style.scss'
import img from '../assets/blobanimation.svg';

export const Hero = () => {
  return (
    <div className='herocontainer'>
        <div className='heroitems'>
          <div className='over'>
            <p>Andreas</p><br/>
            <p>Webudvikler</p>
          </div>
          
          <div className='under'>
           <img src={img} alt=""/>
          </div>
        </div>
        
    </div>
  )
}
