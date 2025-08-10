import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbarCss'>
        <Link to={'/product'}>Product</Link>
       <Link to={'/about'}>About</Link>
       <Link to={'/contact'}>Contact</Link>
   
    </div>
  )
}

export default Navbar