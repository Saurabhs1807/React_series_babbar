import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <ul>
            <li> 
               <NavLink to="/" className={({isActive}) =>isActive ? "active-links":""}>
               Home</NavLink>
            </li>

            <li >
                <NavLink to ="/About" className={({isActive}) =>isActive ? "active-links":""}>
               About</NavLink >
            </li>

            <li >
                <NavLink  to ="/Dashboard" className={({isActive}) =>isActive ? "active-links":""}>
               Dashboard</NavLink >
            </li>
        </ul>
    </div>
  )
}

export default Navbar