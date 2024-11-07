import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'
import logo from "../../../assets/Images/logo.png"; 
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={logo}
          alt="No logo"
        />
      </div>
      <Navbar />
      <div className='Buttons'>
        <div>Sign In</div>
          <button className='sign-up'>Sign Up</button>
      </div>
    </div>
  );
}

export default Header