
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <nav className='links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Softskills'>Softskills</NavLink>
            <NavLink to='/Techstack'>Techstack</NavLink>
            <NavLink to='/ProjectList'>Projectlist</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            
        </nav>
    </>
  )
}