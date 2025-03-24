import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div>
        <nav className='navbar'>
            <div className="container">
                <div className="logo">
                    <a href="/"> <img src="src/img/sort.png" alt="" /> </a>
                </div>
                <div className='nav'>
                    <ul>
                        <li> <Link to={'/Home'}> Home </Link> </li>
                        <li> <Link to={'/Block'}> Block </Link> </li>
                        <li> <Link to={'/About'}> About </Link> </li>
                        <li> <Link to={'/Contacts'}> Contacts </Link> </li>
                    </ul>
                    <div className="btnAria">
                        <button className='btn'> Start And Develpment </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar