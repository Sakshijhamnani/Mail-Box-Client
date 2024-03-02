import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
   
  return (
    <nav className={classes.nav}>
        <ul className={classes.ul}>
       
          <NavLink to='/login'> <li className={classes.li}>Login</li></NavLink> 
        </ul>
    </nav>
  )
}

export default Navbar