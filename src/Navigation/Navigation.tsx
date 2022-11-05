import React from 'react'
import './style.scss'

export const Navigation = () => {

  

  return (
    <div>
        <nav className='Nav'>
            <ul className='navlist'>
                <a href='/'><li className='navitem'>Home</li></a>
                <a href='/'><li className='navitem'>Projects</li></a>
                <a href='/'><li className='navitem'>About</li></a>
                
            </ul>
        </nav>
    </div>
  )
}
