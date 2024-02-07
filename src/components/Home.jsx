import React from 'react'
import Ashwath from './Ashwath.jpg'


export const Home = () => {
  return (
    <div className='Home-css'>


      
      < div className='styled-div'>
        <p>Hi,Welcome!</p>
        <p>I am Ashwath Kotari.</p>
        <p>Web Developer.</p>
      </div>

      <img src={Ashwath} alt='Ashwath' className="circle-image"/>
      


    </div>
  )
}
