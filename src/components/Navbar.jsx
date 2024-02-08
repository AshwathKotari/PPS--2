
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <nav className='links'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Softskills'>Softskills</Link>
            <Link to='/Techstack'>Techstack</Link>
            <Link to='/ProjectList'>Projectlist</Link>
            <Link to='/Contact'>Contact</Link>
            
        </nav>
    </>
  )
}