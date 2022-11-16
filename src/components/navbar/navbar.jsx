import React from 'react'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaAmazonPay } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return ( 
        
        <>
         <nav className="app__navbar">
      <div className="app__navbar-logo flex">
        {/* <img src={images.gericht} alt="app__logo" /> */}
        <h1><FaAmazonPay className='logo'/> Tanga Food</h1> 
       
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><a href="/about">About</a></li>
        <li className="p__opensans"><a href="#menu">The Table</a></li>
        <li className="p__opensans"><a href="/login">Donate</a></li>
        <li className="p__opensans"><a href="/contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/login" className="p__opensans ">Log In / </a>
        <a href="/register" className="p__opensans">Registration</a>
        <div />
        <a href="/login" className="p__opensans">DONATE</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>The Table</a></li>
              <li><a href="/login" onClick={() => setToggleMenu(false)}>Donate</a></li>
              <li><a href="/contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>

        
        
        </>
     );
}
 
export default Navbar;