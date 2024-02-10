import React from 'react'
import Ashwath from './Ashwath.jpg'
import './Home.css'


export const Home = () => {
  return (
    <div className='Home-css'>

      
      
      < div className='styled-div'>
        <div className='anima'>
        <h1>Welcome!</h1>
        <h2>I am Ashwath Kotari.</h2>
        <p>Web Developer.</p>
        </div>
      </div>
      <div className='image-div'>
      <img src={Ashwath} alt='Ashwath' className="circle-image"/>
      </div>
      </div>

    
  )
}
