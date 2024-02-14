
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
    const [view,setview] = useState(false)

    function ButtonClicked(){
        setview(!view)
    }
    let responsivelinks = <nav className='links2'>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/About'>About</NavLink>
                                <NavLink to='/Softskills'>Softskills</NavLink>
                                <NavLink to='/Techstack'>Techstack</NavLink>
                                <NavLink to='/ProjectList'>Projectlist</NavLink>
                                {/* <NavLink to='/Contact'>Contact</NavLink> */}
                                
                            </nav>

  return (
    <>
    {/* <div className='hamburgerdiv'>
    <RxHamburgerMenu onClick={ButtonClicked} className='hamburger'/>
    </div> */}
        
        <nav className='links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Softskills'>Softskills</NavLink>
            <NavLink to='/Techstack'>Techstack</NavLink>
            <NavLink to='/ProjectList'>Projectlist</NavLink>
            {/* <NavLink to='/Contact'>Contact</NavLink> */}
            
        </nav>

        { view ? responsivelinks : ""}
    </>
  )
}