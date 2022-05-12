import React, { useState} from 'react'
import './Navbar.css';

function Navbar() {
    const [click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <header>
        <div className="container">
            <a href="#" onClick={handleClick} className="logo">
                <img src="../img/Logo.png" alt="My logo image" />
                <h4> Ahmed </h4>
            </a>
            <ul className={click ? 'nav_links active' : 'nav_links'} >
                <li><a className='active' onClick={handleClick} href="#">Home</a></li>
                <li><a onClick={handleClick} href="#">About</a></li>
                <li><a onClick={handleClick} href="#">Projects</a></li>
            </ul>
            <div className="menu_icon" onClick={handleClick}>
                <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
        </div>
    </header>
  )
}

export default Navbar