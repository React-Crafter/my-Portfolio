import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer>
            <div className='container-F'>
                <div className="aria1">
                    <h2> Suscribe The MTHprogrammer </h2>
                    <hr />
                    <h2> Join and develop Yourself </h2>
                    <p> Change your Life Now </p>
                </div>
                <div className="aria2">
                    <ul>
                      <Link to={'/Home'}> <li>Home</li> </Link>
                      <Link to={'/Block'}> <li>Block</li> </Link>
                      <Link to={'/About'}> <li>About</li> </Link>
                      <Link to={'/Contacts'}> <li>Contacts</li> </Link>
                    </ul>
                    <ul>
                      <Link to={'/Home'}> <li>Home</li> </Link>
                      <Link to={'/Block'}> <li>Block</li> </Link>
                      <Link to={'/About'}> <li>About</li> </Link>
                      <Link to={'/Contacts'}> <li>Contacts</li> </Link>
                    </ul>
                    <ul>
                      <Link to={'/Home'}> <li>Home</li> </Link>
                      <Link to={'/Block'}> <li>Block</li> </Link>
                      <Link to={'/About'}> <li>About</li> </Link>
                      <Link to={'/Contacts'}> <li>Contacts</li> </Link>
                    </ul>
                </div>
            </div>
            <div className='lastAria'> Proviyat by MthProgrammer @2024 </div>
        </footer>
    </div>
  )
}

export default Footer