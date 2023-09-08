import React from 'react'
import Logo from '../assets/ds.jpg'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='centered'>
      <img src={Logo} alt='ds'className='Logoclass'/>
    </div>
    <div className='rightside'></div>
    <Link className='yo' to='/'> Home </Link>
    <Link className= "yoo" to='/cuisine'> Cuisine </Link>
    <Link className= "yooo" to='/about'> About </Link>
    </div>
  )
}

export default Navbar
